import {useState, useEffect} from 'react';
import 'url-search-params-polyfill';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useShopify} from './shopify_hook';
import Client from 'shopify-buy';

const clientca = Client.buildClient({
  storefrontAccessToken: 'e031a10cb563d06a7060560489011598',
  domain: 'the-no-sugar-company.myshopify.com',
});
const clientus = Client.buildClient({
  storefrontAccessToken: '31219e7f8b50538677c869daefc37835',
  domain: 'the-no-sugar-company-us.myshopify.com',
});
export const useProductsPagination = productType => {
  const [results, setResults] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const country = useSelector(state => state?.country?.country);
  const client = country === 'CA' ? clientca : clientus;
  const getData = async () => {
    if (currentProducts[0]?.hasNextPage?.value) {
      setLoading(true);
      try {
        const resp = await client.fetchNextPage(currentProducts);

        setResults([...results, ...resp?.model]);
        setCurrentProducts(resp?.model);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const refreshData = async query => {
    try {
      setRefreshing(true);
      const resp = await client.product.fetchAll();

      // const resp = await client.product.fetchQuery({
      //   first: 5,
      //   query: `title:${query}| tag:${country}`,
      // });
      setResults(resp);
      setCurrentProducts(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await client.product.fetchAll();
      // const resp = await client.product.fetchQuery({
      //   query: productType ? `product_type:${productType}  ` : null,
      // });

      setResults(resp);
      setCurrentProducts(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [
    loading,
    refreshing,
    results,
    loading || refreshing ? () => null : getData,
    loading || refreshing ? () => null : refreshData,
    loading || refreshing ? () => null : fetchData,
  ];
};
