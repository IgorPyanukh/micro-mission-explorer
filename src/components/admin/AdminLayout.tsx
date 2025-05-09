
import React, { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import { Bell, User } from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      
      <div className="flex-1">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-app-orange text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-app-blue text-white flex items-center justify-center mr-2">
                <User size={16} />
              </div>
              <span className="font-medium text-sm">Ms. Smith</span>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
