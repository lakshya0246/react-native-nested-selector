export interface NestedDataType {
  value: string | number;
  label: string;
  children?: NestedDataType[];
}
