import { createFileRoute } from '@tanstack/react-router';
import ProtectedRoute from '../../../components/ProtectedRoute';
import AdminLayout from '../../../layouts/AdminLayout';
import { useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/analytics/$type')({
  validateParams: (params: Record<string, unknown>) => {
    const type = params.type as string;
    if (!['users', 'traffic', 'revenue'].includes(type)) {
      throw new Error('Invalid analytics type');
    }
    return { type };
  },
  component: () => {
    const { type } = useParams({ from: '/admin/analytics/$type' });
    
    return (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminLayout>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{type.charAt(0).toUpperCase() + type.slice(1)} Analytics</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Overview</h3>
                  {/* Add analytics overview component */}
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Trends</h3>
                  {/* Add trends component */}
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Details</h3>
                  {/* Add details component */}
                </div>
              </div>
            </div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  },
}); 