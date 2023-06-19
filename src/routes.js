import CheckoutPage from './pages/Checkout';
import SuccessPage from './pages/Success';

const routes = [
  { path: '/', element: <CheckoutPage /> },
  { path: '/success', element: <SuccessPage /> },
];

export default routes;
