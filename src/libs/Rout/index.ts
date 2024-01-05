import { LoaderFunctionArgs } from "react-router-dom";

export default interface NavigationLoader<T> {
  (value: LoaderFunctionArgs): Promise<T>;
}
export interface NavigationLoaderVoid {
  (value: LoaderFunctionArgs): Promise<Object>;
}
export interface NavigationLoaderUnknow {
  (value: LoaderFunctionArgs): Promise<unknown | null>;
}
