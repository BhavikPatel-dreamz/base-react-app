import { createFileRoute } from '@tanstack/react-router';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import AdminLayout from '../layouts/AdminLayout';

export const Route = createFileRoute('/dashboard')({
  component: () => (
    <ProtectedRoute>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </ProtectedRoute>
  ),
}); 