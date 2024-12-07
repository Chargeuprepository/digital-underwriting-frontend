import { useLazyQuery } from '@apollo/client';
import { GET_DASHBOARD_DATA } from './queries.js';

const QUERY_MAP = {
  getDashboardData: GET_DASHBOARD_DATA,
};

export const useDashboardQueryManager = (queryKey) => {
  const query = QUERY_MAP[queryKey];
  const [fetchDashboardData, { loading, error, data }] = useLazyQuery(query);

  return { fetchDashboardData, loading, error, data };
};
