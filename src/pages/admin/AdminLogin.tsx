
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"teacher" | "admin">("teacher");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      navigate("/admin/dashboard");
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left side - illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-app-blue items-center justify-center">
        <div className="max-w-md text-center text-white p-8">
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-xl mx-auto mb-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" x2="3" y1="12" y2="12"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-3">DEMO-MAKE-APP</h1>
          <p className="text-xl mb-6">Administration Panel</p>
          <p className="opacity-80">
            Manage student missions, track progress, and analyze submissions for the microscopic image classification project.
          </p>
        </div>
      </div>
      
      {/* Right side - login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 bg-app-blue rounded-xl mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" x2="3" y1="12" y2="12"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold">DEMO-MAKE-APP</h1>
            <p className="text-gray-600">Administration Panel</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Sign In</h2>
            
            <div className="flex border border-gray-200 rounded-lg mb-6">
              <button 
                onClick={() => setRole("teacher")}
                className={`flex-1 py-2 text-center ${role === "teacher" ? "bg-app-blue text-white" : "bg-white text-gray-600"} rounded-lg`}
              >
                Teacher
              </button>
              <button 
                onClick={() => setRole("admin")}
                className={`flex-1 py-2 text-center ${role === "admin" ? "bg-app-blue text-white" : "bg-white text-gray-600"} rounded-lg`}
              >
                Administrator
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password" 
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-app-blue focus:ring-app-blue border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-app-blue hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-app-blue hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                Having trouble? Contact system administrator
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
