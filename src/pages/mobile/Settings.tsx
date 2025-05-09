
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [dataSharing, setDataSharing] = useState(true);
  
  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/mobile/login");
  };
  
  return (
    <MobileLayout 
      title="Settings" 
      showBackButton={true}
      onBack={() => navigate("/mobile/profile")}
    >
      <div className="space-y-4">
        {/* Account Settings */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h3 className="font-bold mb-3">Account</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Profile Information</h4>
                <p className="text-sm text-gray-600">Update your personal information</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => toast.info("This feature is not available in the demo")}>
                Edit
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Change Password</h4>
                <p className="text-sm text-gray-600">Update your password</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => toast.info("This feature is not available in the demo")}>
                Change
              </Button>
            </div>
          </div>
        </div>
        
        {/* App Settings */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h3 className="font-bold mb-3">App Settings</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications" className="font-medium">Notifications</Label>
                <p className="text-sm text-gray-600">Receive mission and badge alerts</p>
              </div>
              <Switch 
                id="notifications" 
                checked={notifications} 
                onCheckedChange={setNotifications} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="dark-mode" className="font-medium">Dark Mode</Label>
                <p className="text-sm text-gray-600">Use dark theme</p>
              </div>
              <Switch 
                id="dark-mode" 
                checked={darkMode} 
                onCheckedChange={setDarkMode} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="offline" className="font-medium">Offline Mode</Label>
                <p className="text-sm text-gray-600">Download content for offline use</p>
              </div>
              <Switch 
                id="offline" 
                checked={offlineMode} 
                onCheckedChange={setOfflineMode} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="data-sharing" className="font-medium">Data Sharing</Label>
                <p className="text-sm text-gray-600">Share anonymous data to improve the app</p>
              </div>
              <Switch 
                id="data-sharing" 
                checked={dataSharing} 
                onCheckedChange={setDataSharing} 
              />
            </div>
          </div>
        </div>
        
        {/* Help & Support */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h3 className="font-bold mb-3">Help & Support</h3>
          
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full justify-start" 
              onClick={() => toast.info("This feature is not available in the demo")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Help Center
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => toast.info("This feature is not available in the demo")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              User Guide
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => toast.info("This feature is not available in the demo")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact Support
            </Button>
          </div>
        </div>
        
        {/* Logout */}
        <Button 
          variant="destructive" 
          className="w-full" 
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Settings;
