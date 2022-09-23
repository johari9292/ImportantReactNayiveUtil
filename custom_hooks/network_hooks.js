import ServiceRequest from "../src/utils/ServiceRequests";
import { url } from "../constants/url";

export const useNetworkRequest = async () => {
	const request = new ServiceRequest(url);
	return [request];
};
