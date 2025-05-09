
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import StatCard from "@/components/admin/StatCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { classPerformanceData, leaderboardData } from "@/data/mockData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

// Mock data for charts
const activityData = [
  { name: "Mon", submissions: 12, verifications: 8 },
  { name: "Tue", submissions: 19, verifications: 15 },
  { name: "Wed", submissions: 14, verifications: 10 },
  { name: "Thu", submissions: 22, verifications: 16 },
  { name: "Fri", submissions: 25, verifications: 18 },
  { name: "Sat", submissions: 10, verifications: 8 },
  { name: "Sun", submissions: 5, verifications: 4 }
];

const classificationData = [
  { name: "Plant Cells", count: 64 },
  { name: "Animal Cells", count: 42 },
  { name: "Bacteria", count: 28 },
  { name: "Protozoa", count: 16 },
  { name: "Fungi", count: 10 }
];

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState("week");
  
  return (
    <AdminLayout title="Dashboard">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Students"
          value="126"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          }
          change="4.5%"
        />
        <StatCard 
          title="Active Missions"
          value="18"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
          }
          change="12%"
        />
        <StatCard 
          title="Submissions"
          value="284"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          }
          change="23.1%"
        />
        <StatCard 
          title="Pending Verification"
          value="26"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <path d="M12 18v-6"/>
              <path d="M8 18v-1"/>
              <path d="M16 18v-3"/>
            </svg>
          }
          change="5%"
          isPositive={false}
        />
      </div>
      
      {/* Activity & Classification */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Activity Overview</h3>
            <div className="flex space-x-2">
              <Button 
                variant={timeRange === "week" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange("week")}
                className={timeRange === "week" ? "bg-app-blue hover:bg-blue-700" : ""}
              >
                Week
              </Button>
              <Button 
                variant={timeRange === "month" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange("month")}
                className={timeRange === "month" ? "bg-app-blue hover:bg-blue-700" : ""}
              >
                Month
              </Button>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={activityData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="submissions" stroke="#0EA5E9" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="verifications" stroke="#F97316" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Image Classifications</h3>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={classificationData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#0EA5E9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Classes & Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-4 lg:col-span-2">
          <h3 className="font-bold text-gray-800 mb-4">Class Performance</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg. Points
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mission Completion
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {classPerformanceData.map((classData) => (
                  <tr key={classData.classId}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="font-medium">{classData.name}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {classData.studentCount}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-app-orange font-medium">{classData.avgPoints}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-app-green h-2 rounded-full"
                          style={{ width: `${classData.missionCompletionRate * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {Math.round(classData.missionCompletionRate * 100)}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-bold text-gray-800 mb-4">Top Students</h3>
          
          <div className="space-y-3">
            {leaderboardData.slice(0, 5).map((student, index) => (
              <div key={student.studentId} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : (index + 1)}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{student.name}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{student.points} pts</span>
                    <span className="mx-2">•</span>
                    <span>{student.badges} badges</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-4">
            View All Students
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
