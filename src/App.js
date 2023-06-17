import { useSelector } from 'react-redux';

function App() {
  const data = useSelector(({ checkoutReducer }) => checkoutReducer.data);

  return (
    <div>
      <h1>Initializing project...</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
