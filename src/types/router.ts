import { queryClient } from '../queryClient';

export type RouterContext = {
  queryClient: typeof queryClient;
};

export type IndexContext = RouterContext;
export type LoginContext = RouterContext;
export type RegisterContext = RouterContext;
export type ProfileContext = RouterContext;
export type UsersContext = RouterContext; 