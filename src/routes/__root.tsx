import { Outlet, createRootRoute } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';

type RootContext = {
  queryClient: QueryClient;
};

export const Route = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
}); 