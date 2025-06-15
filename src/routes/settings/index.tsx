import { createFileRoute } from '@tanstack/react-router';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../layouts/AdminLayout';

export const Route = createFileRoute('/settings/')({
  component: () => (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Settings</h1>
          <div className="space-y-4">
            <a href="/settings/profile" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              Profile Settings
            </a>
            <a href="/settings/security" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
              Security Settings
            </a>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  ),
}); 