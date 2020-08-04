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

export interface IInvoices {}

export interface IProdcuts {}

export interface ISuppliers {}

export interface IUnits {}
