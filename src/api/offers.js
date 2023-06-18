import axiosClient from './axiosClient';

export const getOffers = () => {
  return axiosClient.get('/offer');
};

export const postSubscription = (data) => {
  return axiosClient.post('/subscription', data);
};
