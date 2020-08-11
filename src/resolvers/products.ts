import schema from '../models/products';
import { IProducts } from '../types';

export default {
  Query: {
    products: async () => {
      const data = await schema.find({});
      return data;
    },
    product: async (root: any, _id: keyof IProducts) => {
      const data = await schema.findById(_id);
      return data;
    },
  },
  Mutation: {
    createProducts: async (root: any, doc: IProducts) => {
      const data = await schema.create<IProducts>(doc);
      return data;
    },
    updateProducts: async (root: any, product: IProducts) => {
      const { _id, ...rest } = product;
      rest.updatedAt = new Date().toISOString();
      const data = await schema.findByIdAndUpdate(_id, rest);
      return data;
    },
    deleteProducts: async (root: any, _id: keyof IProducts) => {
      await schema.findByIdAndDelete(_id);
      return 'success deleted';
    },
  },
  Subscription: {},
};
