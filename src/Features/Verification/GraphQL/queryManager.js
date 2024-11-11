import { useLazyQuery } from '@apollo/client';
import { GET_CREDIT_DATA, GET_VEHICLE_DATA } from './queries.js';

const QUERY_MAP = {
  getVehicleData: GET_VEHICLE_DATA,
  getCreditData: GET_CREDIT_DATA,
  //   getRiskData: GET_RISK_DATA,
};

export const useVerificationQueryManager = (queryKey) => {
  const query = QUERY_MAP[queryKey];
  const [fetchVehicleCreditRiskData, { loading, error, data }] =
    useLazyQuery(query);

  return { fetchVehicleCreditRiskData, loading, error, data };
};
