import valuesData from '../mocks/values.mocks.json';
import { Value } from '../models/values.types';

export const getValues = (): Value[] => {
  return valuesData.values;
};
