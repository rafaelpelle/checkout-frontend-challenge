import axiosClient from './axiosClient';

export const getOffers = () => {
  return axiosClient.get('/offer');
};
