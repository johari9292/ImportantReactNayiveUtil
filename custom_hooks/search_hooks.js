import { useState } from "react";
import "url-search-params-polyfill";
import { useSelector } from "react-redux";
import axios from "axios";

import { useNetworkRequest } from "./network_hooks";

export const useSearchWithPaginator = (dataSourceCallback) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const latitude = useSelector((state) => state?.location?.latitude);
	const longitude = useSelector((state) => state?.location?.longitude);
	const [isNextAvailable, setIsNextAvailable] = useState(true);
	const [pageNumber, setPageNumber] = useState(1);
	//const [request] = useNetworkRequest();

	const getData = async (searchQuery) => {
		setResults([]);
		setLoading(true);
		try {
			const { results: _results, next: _next } = await dataSourceCallback(
				axios,
				{
					longitude,
					latitude,
					...searchQuery,
					page: 1,
				}
			);

			setResults([..._results]);
			if (_next) {
				const urlSeachParams = new URLSearchParams(_next.split("?")[1]);
				const page = urlSeachParams.get("page");

				setPageNumber(page);
				setIsNextAvailable(true);
			} else {
				setIsNextAvailable(false);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const loadMore = async (searchQuery) => {
		if (isNextAvailable) {
			setLoading(true);
			try {
				const { results: _results, next: _next } = await dataSourceCallback(
					axios,
					{
						longitude,
						latitude,
						...searchQuery,
						page: pageNumber,
					}
				);

				if (pageNumber <= 1) {
					setResults([..._results]);
				} else {
					setResults([...results, ..._results]);
				}
				if (_next) {
					const urlSeachParams = new URLSearchParams(_next.split("?")[1]);
					const page = urlSeachParams.get("page");

					setPageNumber(page);
					setIsNextAvailable(true);
				} else {
					setIsNextAvailable(false);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
	};

	return [getData, loading, results, loading ? () => null : loadMore];
};
