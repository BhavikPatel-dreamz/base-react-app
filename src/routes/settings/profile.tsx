import { createFileRoute } from '@tanstack/react-router';
import Profile from '../../pages/Profile';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../layouts/AdminLayout';

export const Route = createFileRoute('/settings/profile')({
  component: () => (
    <ProtectedRoute>
      <AdminLayout>
        <Profile />
      </AdminLayout>
    </ProtectedRoute>
  ),
}); 