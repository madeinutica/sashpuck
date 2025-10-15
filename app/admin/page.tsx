import { AuthProvider } from '../../components/admin/AuthProvider';
import ProtectedRoute from '../../components/admin/ProtectedRoute';
import AdminLayout from '../../components/admin/AdminLayout';
import ProjectManagementDashboard from '../../components/admin/ProjectManagementDashboard';
import { AdminErrorBoundary } from '../../components/admin/ErrorBoundary';

export default function AdminPage() {
  return (
    <AdminErrorBoundary>
      <AuthProvider>
        <ProtectedRoute requiredPermission="projects:read">
          <AdminLayout>
            <ProjectManagementDashboard />
          </AdminLayout>
        </ProtectedRoute>
      </AuthProvider>
    </AdminErrorBoundary>
  );
}