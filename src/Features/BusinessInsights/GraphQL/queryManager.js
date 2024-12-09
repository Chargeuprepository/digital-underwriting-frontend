import { useLazyQuery } from '@apollo/client';
import { GET_BUSINESS_INSIGHTS_DATA } from './queries.js';

const QUERY_MAP = {
  getBusinessInsightsData: GET_BUSINESS_INSIGHTS_DATA,
};

export const useBusinessInsightsQueryManager = (queryKey) => {
  const query = QUERY_MAP[queryKey];
  const [fetchBusinessInsightsData, { loading, error, data }] =
    useLazyQuery(query);

  return { fetchBusinessInsightsData, loading, error, data };
};
