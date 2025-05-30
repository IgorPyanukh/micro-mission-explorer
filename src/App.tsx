
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentLogin from "./pages/mobile/StudentLogin";
import StudentDashboard from "./pages/mobile/StudentDashboard";
import MissionCenter from "./pages/mobile/MissionCenter";
import MissionDetails from "./pages/mobile/MissionDetails";
import CameraView from "./pages/mobile/CameraView";
import StudentProfile from "./pages/mobile/StudentProfile";
import LearningMaterials from "./pages/mobile/LearningMaterials";
import Settings from "./pages/mobile/Settings";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MissionManagement from "./pages/admin/MissionManagement";
import StudentManagement from "./pages/admin/StudentManagement";
import ContentManagement from "./pages/admin/ContentManagement";
import ReportsPage from "./pages/admin/ReportsPage";
import SettingsPage from "./pages/admin/SettingsPage";

const queryClient = new QueryClient();

// Demo context for prototype
export const AppContext = React.createContext<{
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
}>({
  userType: "",
  setUserType: () => {},
});

const App = () => {
  const [userType, setUserType] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ userType, setUserType }}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Mobile App Routes */}
              <Route path="/mobile/login" element={<StudentLogin />} />
              <Route path="/mobile/dashboard" element={<StudentDashboard />} />
              <Route path="/mobile/missions" element={<MissionCenter />} />
              <Route path="/mobile/mission/:id" element={<MissionDetails />} />
              <Route path="/mobile/camera" element={<CameraView />} />
              <Route path="/mobile/profile" element={<StudentProfile />} />
              <Route path="/mobile/learning-materials" element={<LearningMaterials />} />
              <Route path="/mobile/settings" element={<Settings />} />

              {/* Admin Panel Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/missions" element={<MissionManagement />} />
              <Route path="/admin/students" element={<StudentManagement />} />
              <Route path="/admin/content" element={<ContentManagement />} />
              <Route path="/admin/reports" element={<ReportsPage />} />
              <Route path="/admin/settings" element={<SettingsPage />} />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
