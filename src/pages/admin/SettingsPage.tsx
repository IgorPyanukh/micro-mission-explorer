
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const SettingsPage = () => {
  const [schoolName, setSchoolName] = useState("Central Science Academy");
  const [adminEmail, setAdminEmail] = useState("admin@example.com");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoApprove, setAutoApprove] = useState(false);
  const [aiClassification, setAiClassification] = useState(true);
  
  const handleSaveGeneralSettings = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Settings saved successfully");
  };
  
  return (
    <AdminLayout title="Settings">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your school and platform settings</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveGeneralSettings} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="schoolName">School Name</Label>
                    <Input 
                      id="schoolName" 
                      value={schoolName} 
                      onChange={(e) => setSchoolName(e.target.value)} 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="adminEmail">Administrator Email</Label>
                    <Input 
                      id="adminEmail" 
                      type="email" 
                      value={adminEmail} 
                      onChange={(e) => setAdminEmail(e.target.value)} 
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="autoApprove" 
                      checked={autoApprove} 
                      onCheckedChange={setAutoApprove} 
                    />
                    <Label htmlFor="autoApprove">Auto-approve simple submissions</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="aiClassification" 
                      checked={aiClassification} 
                      onCheckedChange={setAiClassification} 
                    />
                    <Label htmlFor="aiClassification">Enable AI classification of submissions</Label>
                  </div>
                </div>
                
                <Button type="submit">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-500">Receive email notifications for important events</p>
                  </div>
                  <Switch 
                    checked={notificationsEnabled} 
                    onCheckedChange={setNotificationsEnabled} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">New Submission Alerts</h4>
                    <p className="text-sm text-gray-500">Get notified when students submit missions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Low Activity Alerts</h4>
                    <p className="text-sm text-gray-500">Get notified when students are inactive</p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <Button className="mt-6">Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="permissions">
          <Card>
            <CardHeader>
              <CardTitle>Permissions</CardTitle>
              <CardDescription>Configure role-based permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="py-4 text-center text-gray-500">
                Permission management coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with external services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Google Classroom</h4>
                      <p className="text-sm text-gray-500">Import students and classes</p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
                
                <div className="flex items-center justify-between border p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"/>
                        <path d="M14 6.5v10"/>
                        <path d="M10 7.5v10"/>
                        <path d="m16 7 1-2"/>
                        <path d="M8 7H6"/>
                        <path d="M18 18v2"/>
                        <path d="M18 8V6"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Microsoft Teams</h4>
                      <p className="text-sm text-gray-500">Sync with your Teams classroom</p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default SettingsPage;
