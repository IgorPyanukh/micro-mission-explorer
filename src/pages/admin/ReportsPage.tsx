
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { leaderboardData, classPerformanceData } from "@/data/mockData";

const ReportsPage = () => {
  return (
    <AdminLayout title="Reports">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Student Performance</TabsTrigger>
          <TabsTrigger value="missions">Mission Analytics</TabsTrigger>
          <TabsTrigger value="classes">Class Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Students</CardTitle>
                <CardDescription>Active students across all classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">47</div>
                <div className="text-sm text-green-600 mt-2">+5% from last month</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Completed Missions</CardTitle>
                <CardDescription>Total missions submitted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">183</div>
                <div className="text-sm text-green-600 mt-2">+12% from last month</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Average Score</CardTitle>
                <CardDescription>Average points per student</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">336</div>
                <div className="text-sm text-yellow-600 mt-2">-2% from last month</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Performance</CardTitle>
                <CardDescription>Overview of all classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Class Name</th>
                        <th className="text-left py-3 px-4 font-medium">Students</th>
                        <th className="text-left py-3 px-4 font-medium">Avg Points</th>
                        <th className="text-left py-3 px-4 font-medium">Completion Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classPerformanceData.map((classData) => (
                        <tr key={classData.classId} className="border-b">
                          <td className="py-3 px-4">{classData.name}</td>
                          <td className="py-3 px-4">{classData.studentCount}</td>
                          <td className="py-3 px-4">{classData.avgPoints}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                                <div 
                                  className="h-full bg-app-blue rounded-full" 
                                  style={{ width: `${classData.missionCompletionRate * 100}%` }} 
                                />
                              </div>
                              <span>{Math.round(classData.missionCompletionRate * 100)}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Student Leaderboard</CardTitle>
              <CardDescription>Top performing students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Rank</th>
                      <th className="text-left py-3 px-4 font-medium">Student</th>
                      <th className="text-left py-3 px-4 font-medium">Points</th>
                      <th className="text-left py-3 px-4 font-medium">Badges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((student, index) => (
                      <tr key={student.studentId} className="border-b">
                        <td className="py-3 px-4">{index + 1}</td>
                        <td className="py-3 px-4">{student.name}</td>
                        <td className="py-3 px-4">{student.points}</td>
                        <td className="py-3 px-4">{student.badges}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="missions">
          <Card>
            <CardHeader>
              <CardTitle>Mission Analytics</CardTitle>
              <CardDescription>Performance data for each mission</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="py-4 text-center text-gray-500">
                Mission analytics coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="classes">
          <Card>
            <CardHeader>
              <CardTitle>Class Reports</CardTitle>
              <CardDescription>Detailed class performance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="py-4 text-center text-gray-500">
                Detailed class reports coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default ReportsPage;
