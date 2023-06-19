import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from './routes';
import NavHeader from './components/NavHeader';
import Loader from './components/Loader';
import status from './constants/status';

function App() {
  const offersIsLoading = useSelector(
    ({ checkoutReducer }) => checkoutReducer.offers.status === status.loading,
  );

  const subscriptionIsLoading = useSelector(
    ({ checkoutReducer }) =>
      checkoutReducer.subscription.status === status.loading,
  );

  return (
    <BrowserRouter>
      {(offersIsLoading || subscriptionIsLoading) && <Loader />}
      <NavHeader />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route exact path={path} element={element} key={path} />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
