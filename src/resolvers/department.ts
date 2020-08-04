import schema from '../models/departments';
import { IDepartments } from '../types';

export default {
  Query: {
    departments: async () => {
      const data = await schema.find({});
      return data;
    },
    oneDepartment: async (root: any, _id: keyof IDepartments) => {
      const data = await schema.findById(_id);
      return data;
    },
  },
  Mutation: {
    addDepartment: async (root: any, doc: IDepartments) => {
      const data = await schema.create<IDepartments>(doc);
      return data;
    },
    updateDepartment: async (root: any, department: IDepartments) => {
      const { _id, ...rest } = department;
      rest.updatedAt = new Date().toISOString();
      const data = await schema.findByIdAndUpdate(_id, rest);
      return data;
    },
    deleteDepartment: async (root: any, _id: keyof IDepartments) => {
      await schema.findByIdAndDelete(_id);
      return 'sucess deleted';
    },
  },
  Subscription: {},
};
