import schema from '../models/invoice';
import { IInvoices } from '../types';

export default {
  Query: {
    products: async () => {
      const data = await schema.find({});
      return data;
    },
    product: async (root: any, _id: keyof IInvoices) => {
      const data = await schema.findById(_id);
      return data;
    },
  },
  Mutation: {
    createInvoices: async (root: any, doc: IInvoices) => {
      const data = await schema.create<IInvoices>(doc);
      return data;
    },
    updateInvoices: async (root: any, invoice: IInvoices) => {
      const { _id, ...rest } = invoice;
      rest.updatedAt = new Date().toISOString();
      const data = await schema.findByIdAndUpdate(_id, rest);
      return data;
    },
    deleteInvoices: async (root: any, _id: keyof IInvoices) => {
      await schema.findByIdAndDelete(_id);
      return 'success deleted';
    },
  },
  Subscription: {},
};
