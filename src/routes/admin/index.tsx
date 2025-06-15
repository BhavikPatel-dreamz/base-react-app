import { createFileRoute } from '@tanstack/react-router';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../layouts/AdminLayout';

export const Route = createFileRoute('/admin/')({
  component: () => (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/admin/users" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <h2 className="text-lg font-semibold">User Management</h2>
              <p className="text-gray-600">Manage system users and permissions</p>
            </a>
            <a href="/admin/analytics" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <h2 className="text-lg font-semibold">Analytics</h2>
              <p className="text-gray-600">View system analytics and reports</p>
            </a>
            <a href="/admin/settings" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              <h2 className="text-lg font-semibold">System Settings</h2>
              <p className="text-gray-600">Configure system-wide settings</p>
            </a>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  ),
}); 