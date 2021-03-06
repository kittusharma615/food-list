import {useQuery, QueryConfig} from 'react-query';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {onError} from 'src/Helpers';

export const fetcher = async (
  url: string,
  headers: AxiosRequestConfig['headers'],
  config: AxiosRequestConfig,
) => {
  return await axios.request({
    url,
    ...config,
    headers: {
      ...config?.headers,
      ...headers,
    },
  });
};

function useApiFetch(
  queryKeys: [string, AxiosRequestConfig['headers']?, AxiosRequestConfig?],
  queryConfig?: QueryConfig<AxiosResponse<any>, unknown> | undefined,
) {
  return useQuery(queryKeys, fetcher, {onError, ...queryConfig});
}

export default useApiFetch;

// Usage

// const {data, isLoading, error} = useApiFetch(['/users?page=2']);

// console.log(data);
// console.log(isLoading);
// console.log(error);
