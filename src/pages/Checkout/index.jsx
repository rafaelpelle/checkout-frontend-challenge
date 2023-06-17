import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dataFetchRequested } from '../../actionCreators/checkout';
import PageContainer from './PageContainer';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function CheckoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataFetchRequested());
  }, [dispatch]);

  return (
    <PageContainer>
      <LeftPanel />
      <RightPanel />
    </PageContainer>
  );
}

export default CheckoutPage;
