import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import { FoodProductResponse } from '../types/product';

const API_URL = 'https://run.mocky.io/v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645';

const useFoodProducts = (): UseQueryResult<FoodProductResponse, Error> => {
  const fetchFoodProducts = async () => {
    const response = await axios.get<FoodProductResponse>(API_URL);
    return response.data;
  };

  return useQuery<FoodProductResponse, Error>({
    queryKey: ['foodProducts'],
    queryFn: fetchFoodProducts,
  });
};

export default useFoodProducts;
