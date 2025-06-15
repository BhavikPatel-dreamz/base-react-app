import { createFileRoute } from '@tanstack/react-router';
import ProtectedRoute from '../../../components/ProtectedRoute';
import AdminLayout from '../../../layouts/AdminLayout';
import { useSearch } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/users/')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      page: Number(search.page) || 1,
      role: (search.role as string) || 'all',
      search: (search.search as string) || '',
    };
  },
  component: () => {
    const search = useSearch({ from: '/admin/users/' });
    
    return (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminLayout>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <p className="text-gray-600">
                  Current filters: Page {search.page}, Role: {search.role}, Search: {search.search}
                </p>
              </div>
              {/* Add user list component here */}
            </div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  },
}); 