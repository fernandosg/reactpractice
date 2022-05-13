import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  // El segundo parámetro es el elemento que esta a la escucha
  useEffect(async() => {
    const response = await axios(API);

    setProducts(response.data)
  }, []);

  return products
};


export default useGetProducts;
