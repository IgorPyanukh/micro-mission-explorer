
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const StudentLogin = () => {
  const [schoolId, setSchoolId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      navigate("/mobile/dashboard");
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-app-blue to-blue-700 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-app-blue rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" x2="3" y1="12" y2="12"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">DEMO-MAKE-APP</h1>
          <p className="text-gray-600 mt-1">Sign in to start your science missions</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="schoolId" className="block text-sm font-medium text-gray-700">
              School ID
            </label>
            <Input
              id="schoolId"
              type="text" 
              placeholder="Enter your school ID"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              Student ID
            </label>
            <Input
              id="userId"
              type="text" 
              placeholder="Enter your student ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
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
          
          <Button 
            type="submit" 
            className="w-full bg-app-blue hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Need help? Contact your teacher
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
