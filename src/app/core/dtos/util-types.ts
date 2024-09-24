export interface TModel {
  id: number;
  [k: string]: unknown;
}

// export type TModel<T extends TModel> = Record<keyof T, T[keyof T]>;
