
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { leaderboardData, mockMissions, studentProgress } from "@/data/mockData";

// Mock student data (expanded from leaderboardData)
const students = leaderboardData.map(student => ({
  ...student,
  email: `${student.name.toLowerCase().replace(' ', '.')}@school.edu`,
  grade: Math.floor(Math.random() * 5) + 6, // Grade 6-10
  className: "Biology 101"
}));

const StudentManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  
  const filteredStudents = searchQuery
    ? students.filter(student => 
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : students;
    
  const selectedStudentData = students.find(s => s.studentId === selectedStudent);
  
  return (
    <AdminLayout title="Student Management">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Students</h2>
          <p className="text-gray-600">Manage student accounts and track performance</p>
        </div>
        <Button className="bg-app-blue hover:bg-blue-700">
          Add New Student
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Student list */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="mb-4">
              <Input
                placeholder="Search students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              {filteredStudents.map((student) => (
                <div 
                  key={student.studentId} 
                  className={`p-3 rounded-lg cursor-pointer ${
                    selectedStudent === student.studentId 
                      ? 'bg-app-light-blue border-l-4 border-app-blue' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedStudent(student.studentId)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">{student.name}</h3>
                      <p className="text-xs text-gray-500">{student.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2 text-xs">
                    <span className="text-gray-500">Grade {student.grade} • {student.className}</span>
                    <span className="text-app-orange font-medium">{student.points} pts</span>
                  </div>
                </div>
              ))}
              
              {filteredStudents.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  No students found matching your search
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right column - Student details */}
        <div className="lg:col-span-2">
          {selectedStudentData ? (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Student Profile Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{selectedStudentData.name}</h2>
                      <p className="text-gray-600">{selectedStudentData.email}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Grade {selectedStudentData.grade} • {selectedStudentData.className}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                        <path d="m15 5 4 4"/>
                      </svg>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M3 6h18"/>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        <line x1="10" x2="10" y1="11" y2="17"/>
                        <line x1="14" x2="14" y1="11" y2="17"/>
                      </svg>
                      Delete
                    </Button>
                  </div>
                </div>
                
                {/* Student Stats */}
                <div className="mt-6 grid grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-app-orange">{selectedStudentData.points}</div>
                    <div className="text-xs text-gray-600">Total Points</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-app-blue">{selectedStudentData.badges}</div>
                    <div className="text-xs text-gray-600">Badges Earned</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-app-green">{studentProgress.completedMissions}</div>
                    <div className="text-xs text-gray-600">Missions Completed</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-gray-700">
                      {leaderboardData.findIndex(s => s.studentId === selectedStudentData.studentId) + 1}
                    </div>
                    <div className="text-xs text-gray-600">Class Rank</div>
                  </div>
                </div>
              </div>
              
              {/* Missions Progress */}
              <div className="p-6">
                <h3 className="font-medium mb-4">Mission Progress</h3>
                
                <div className="space-y-3">
                  {mockMissions.map((mission) => (
                    <div key={mission.id} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{mission.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          mission.status === 'available' ? 'bg-blue-100 text-app-blue' :
                          mission.status === 'in-progress' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="mt-2 flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          {mission.points} points
                        </div>
                        
                        {mission.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            View Submission
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Activity Timeline */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <h3 className="font-medium mb-4">Recent Activity</h3>
                
                <div className="relative pl-6 border-l border-gray-300 space-y-6">
                  {studentProgress.recentActivity.map((activity, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-9 w-5 h-5 rounded-full bg-app-blue border-4 border-white"></div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="text-sm font-medium">{activity.action}</div>
                        <div className="text-sm">{activity.mission || activity.badge}</div>
                        <div className="text-xs text-gray-500 mt-1">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium">Select a student</h3>
              <p className="text-gray-600 mt-1 max-w-md">
                Choose a student from the list on the left to view their details and progress
              </p>
              <Button 
                className="mt-4 bg-app-blue hover:bg-blue-700"
                onClick={() => setSelectedStudent(students[0].studentId)}
              >
                Select First Student
              </Button>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentManagement;
