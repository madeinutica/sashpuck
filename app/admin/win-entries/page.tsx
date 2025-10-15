import { AuthProvider } from '../../../components/admin/AuthProvider';
import ProtectedRoute from '../../../components/admin/ProtectedRoute';
import AdminLayout from '../../../components/admin/AdminLayout';
import WinEntriesManager from '../../../components/admin/WinEntriesManager';

export default function WinEntriesPage() {
  return (
    <AuthProvider>
      <ProtectedRoute requiredPermission="projects:read">
        <AdminLayout>
          <WinEntriesManager />
        </AdminLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
}