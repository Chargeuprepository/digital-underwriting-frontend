import { useLazyQuery } from '@apollo/client';
import { GET_ONBOARDED_DATA, GET_DRIVER } from './queries.js';

const QUERY_MAP = {
  getOnboardedData: GET_ONBOARDED_DATA,
  getDriverData: GET_DRIVER,
};

export const useOnboardedDriversQueryManager = (queryKey) => {
  const query = QUERY_MAP[queryKey];
  const [fetchOnboardedDriversData, { loading, error, data: driverData }] =
    useLazyQuery(query);

  return { fetchOnboardedDriversData, loading, error, driverData };
};
