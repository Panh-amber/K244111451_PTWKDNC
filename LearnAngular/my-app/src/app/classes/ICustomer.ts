// Ex 18: Customer model
export interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

// Ex 18: Nhóm khách hàng - mỗi nhóm chứa một mảng khách hàng
// (giữ nguyên key "CustomterTypeName" như cấu trúc JSON trong đề bài)
export interface CustomerGroup {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: Customer[];
}
