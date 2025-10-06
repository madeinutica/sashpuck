import { AuthProvider } from '../../../components/admin/AuthProvider';
import ProtectedRoute from '../../../components/admin/ProtectedRoute';
import AdminLayout from '../../../components/admin/AdminLayout';
import ComingSoonModule from '../../../components/admin/ComingSoonModule';

export default function BlogManagementPage() {
  return (
    <AuthProvider>
      <ProtectedRoute requiredPermission="blog:read">
        <AdminLayout>
          <ComingSoonModule
            title="Blog Management System"
            description="Create, edit, and publish blog posts to showcase your expertise and attract customers through valuable content."
            icon="📝"
            priority="High"
            estimatedCompletion="Q1 2026"
            features={[
              "Rich text editor with media uploads",
              "SEO optimization tools",
              "Scheduled publishing",
              "Category and tag management",
              "Comment moderation system",
              "Blog analytics and engagement tracking",
              "Social media integration",
              "RSS feed generation"
            ]}
          />
        </AdminLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
}