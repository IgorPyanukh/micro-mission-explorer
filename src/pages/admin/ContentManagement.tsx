
import AdminLayout from "@/components/admin/AdminLayout";

const ContentManagement = () => {
  return (
    <AdminLayout title="Content Management">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">Learning Materials</h2>
        <p className="text-gray-600 mb-6">
          Manage learning materials, resources, and educational content for students.
        </p>
        
        <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Add Learning Materials</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-4">
            Upload documents, videos, and other resources to help students learn about science topics.
          </p>
          <button className="bg-app-blue hover:bg-blue-700 text-white px-4 py-2 rounded">
            Upload Materials
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ContentManagement;
