import schema from '../models/suppliers';
import { ISuppliers } from '../types';

export default {
  Query: {
    suppliers: async () => {
      const data = await schema.find({});
      return data;
    },
    supplier: async (root: any, _id: keyof ISuppliers) => {
      const data = await schema.findById(_id);
      return data;
    },
  },
  Mutation: {
    createSuppliers: async (root: any, doc: ISuppliers) => {
      const data = await schema.create<ISuppliers>(doc);
      return data;
    },
    updateSuppliers: async (root: any, supplier: ISuppliers) => {
      const { _id, ...rest } = supplier;
      rest.updatedAt = new Date().toISOString();
      const data = await schema.findByIdAndUpdate(_id, rest);
      return data;
    },
    deleteSuppliers: async (root: any, _id: keyof ISuppliers) => {
      await schema.findByIdAndDelete(_id);
      return 'success deleted';
    },
  },
  Subscription: {},
};
