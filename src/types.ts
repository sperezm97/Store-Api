enum Status {
  ACTIVE,
  INACTIVE,
}

export interface IDepartments {
  _id?: string;
  label?: string;
  status?: Status;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IInvoices {
  _id?: string;
  identification?: string;
  status: Status;
  product: keyof IProducts;
  quantity?: number;
  unit: keyof IUnits;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IProducts {}

export interface ISuppliers {}

export interface IUnits {}
