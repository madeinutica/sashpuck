import { AuthProvider } from '../../../components/admin/AuthProvider';
import ProtectedRoute from '../../../components/admin/ProtectedRoute';
import AdminLayout from '../../../components/admin/AdminLayout';
import ComingSoonModule from '../../../components/admin/ComingSoonModule';

export default function LeadsPage() {
  return (
    <AuthProvider>
      <ProtectedRoute requiredPermission="projects:read">
        <AdminLayout>
          <ComingSoonModule
            title="Lead Management System"
            description="Track customer inquiries, manage quotes, and streamline your sales process from initial contact to project completion."
            icon="👥"
            priority="High"
            estimatedCompletion="Q1 2026"
            features={[
              "Lead capture from website forms",
              "Quote generation and tracking",
              "Customer communication timeline",
              "Follow-up reminder system",
              "Project status tracking",
              "Sales pipeline visualization",
              "Lead source analytics",
              "Integration with phone system",
              "Automated email responses",
              "Customer relationship management"
            ]}
          />
        </AdminLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
}