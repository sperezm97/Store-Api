import { IUnits } from '../types';
import schema from '../models/unitConversation';

export default {
  Query: {
    units: async () => {
      const data = await schema.find({});
      return data;
    },
    unit: async (root: any, _id: keyof IUnits) => {
      const data = await schema.findById(_id);
      return data;
    },
  },
  Mutation: {
    createUnit: async (root: any, doc: IUnits) => {
      const data = await schema.create({ ...doc });
      return data;
    },
    updateUnit: async (root: any, doc: IUnits) => {
      const { _id, ...rest } = doc;
      rest.updatedAt = new Date().toISOString();
      const data = await schema.findByIdAndUpdate(_id, rest);
      return data;
    },
    deleteUnit: async (root: any, _id: keyof IUnits) => {
      await schema.findByIdAndDelete(_id);
      return 'success';
    },
  },
  Subscription: {},
};
