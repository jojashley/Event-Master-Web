import {Supplier} from "../types";

export const setSupplier = (supplier: Supplier | null) => {
  sessionStorage.setItem('supplier', supplier ? JSON.stringify(supplier) : "null");
};

export const getSupplier = (): Supplier | null => {
  const supplierData = sessionStorage.getItem('supplier');
  return supplierData && supplierData !== "null" ? JSON.parse(supplierData) as Supplier : null;
};
