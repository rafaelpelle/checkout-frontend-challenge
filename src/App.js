import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <header>TO-DO Header component</header>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route exact path={path} element={element} key={path} />
        ))}

        <Route path="*" element={<Navigate to="/checkout" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
