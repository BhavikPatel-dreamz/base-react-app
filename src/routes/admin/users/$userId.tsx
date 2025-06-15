import { createFileRoute } from '@tanstack/react-router';
import ProtectedRoute from '../../../components/ProtectedRoute';
import AdminLayout from '../../../layouts/AdminLayout';
import { useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/users/$userId')({
  component: () => {
    const { userId } = useParams({ from: '/admin/users/$userId' });
    
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Details</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">Viewing details for user: {userId}</p>
              {/* Add user details component here */}
            </div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  },
}); 