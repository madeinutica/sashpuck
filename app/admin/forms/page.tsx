import { AuthProvider } from '../../../components/admin/AuthProvider';
import ProtectedRoute from '../../../components/admin/ProtectedRoute';
import AdminLayout from '../../../components/admin/AdminLayout';
import FormsManager from '../../../components/admin/FormsManager';
import { AdminErrorBoundary } from '../../../components/admin/ErrorBoundary';

export default function FormsPage() {
  return (
    <AdminErrorBoundary>
      <AuthProvider>
        <ProtectedRoute requiredPermission="projects:read">
          <AdminLayout>
            <FormsManager />
          </AdminLayout>
        </ProtectedRoute>
      </AuthProvider>
    </AdminErrorBoundary>
  );
}