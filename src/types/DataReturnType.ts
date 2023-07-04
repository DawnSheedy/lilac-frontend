export enum DataReturnState {
  Loading,
  Loaded,
  Error,
}

export interface DataReturnType<T> {
  data: T | undefined;
  state: DataReturnState;
}
