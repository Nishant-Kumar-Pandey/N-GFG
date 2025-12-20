import React from 'react'
import CustomTask1 from './CustomTask1'

const App = () => {
  const [data] = CustomTask1("https://dummyjson.com/products");
  console.log(data);
  return (
    <div>
      {data?.products?.map((products) => {
        return (
          <div key = {products.id}>
            <p>{products.title}</p>
          </div>
        );
  })}
    </div>
  );
};
export default App;
