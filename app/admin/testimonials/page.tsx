import { AuthProvider } from '../../../components/admin/AuthProvider';
import ProtectedRoute from '../../../components/admin/ProtectedRoute';
import AdminLayout from '../../../components/admin/AdminLayout';
import ComingSoonModule from '../../../components/admin/ComingSoonModule';

export default function TestimonialsPage() {
  return (
    <AuthProvider>
      <ProtectedRoute requiredPermission="testimonials:read">
        <AdminLayout>
          <ComingSoonModule
            title="Testimonials Management"
            description="Collect, manage, and showcase customer testimonials to build trust and credibility with potential clients."
            icon="⭐"
            priority="Medium"
            estimatedCompletion="Q2 2026"
            features={[
              "Customer testimonial collection forms",
              "Rating and review management",
              "Photo testimonials with before/after",
              "Video testimonial uploads",
              "Testimonial approval workflow",
              "Display widgets for website integration",
              "Google Reviews integration",
              "Testimonial request automation"
            ]}
          />
        </AdminLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
}