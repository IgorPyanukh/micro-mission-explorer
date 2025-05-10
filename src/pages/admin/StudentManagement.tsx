
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { leaderboardData, mockMissions, studentProgress } from "@/data/mockData";
import StudentList from "@/components/admin/student/StudentList";
import StudentDetail from "@/components/admin/student/StudentDetail";
import EmptyStudentState from "@/components/admin/student/EmptyStudentState";
import AddStudentForm from "@/components/admin/student/AddStudentForm";
import { Student } from "@/types/student";

// Map leaderboard data to Student objects
const students: Student[] = leaderboardData.map(student => ({
  ...student,
  email: `${student.name.toLowerCase().replace(' ', '.')}@school.edu`,
  grade: Math.floor(Math.random() * 5) + 6, // Grade 6-10
  className: "Biology 101"
}));

const StudentManagement = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [newStudentDialogOpen, setNewStudentDialogOpen] = useState(false);
  
  const selectedStudentData = students.find(s => s.studentId === selectedStudent);
  
  return (
    <AdminLayout title="Student Management">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Students</h2>
          <p className="text-gray-600">Manage student accounts and track performance</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Student list */}
        <StudentList 
          students={students}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
          onAddNewClick={() => setNewStudentDialogOpen(true)}
        />
        
        {/* Right column - Student details */}
        <div className="lg:col-span-2">
          {selectedStudentData ? (
            <StudentDetail 
              student={selectedStudentData} 
              missions={mockMissions}
              studentProgress={studentProgress}
              classRank={leaderboardData.findIndex(s => s.studentId === selectedStudentData.studentId) + 1}
            />
          ) : (
            <EmptyStudentState 
              onSelectFirstStudent={() => setSelectedStudent(students[0].studentId)} 
            />
          )}
        </div>
      </div>
      
      {/* Add New Student Dialog */}
      <AddStudentForm 
        open={newStudentDialogOpen}
        onOpenChange={setNewStudentDialogOpen}
      />
    </AdminLayout>
  );
};

export default StudentManagement;
