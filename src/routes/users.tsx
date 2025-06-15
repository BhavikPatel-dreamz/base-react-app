import { createFileRoute } from '@tanstack/react-router';
import Users from '../pages/Users';
import ProtectedRoute from '../components/ProtectedRoute';
import AdminLayout from '../layouts/AdminLayout';

export const Route = createFileRoute('/users')({
  component: () => (
    <ProtectedRoute>
      <AdminLayout>
        <Users />
      </AdminLayout>
    </ProtectedRoute>
  ),
}); 