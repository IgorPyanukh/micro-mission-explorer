
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Student } from "@/types";

interface StudentListProps {
  students: Student[];
  selectedStudent: string | null;
  setSelectedStudent: (studentId: string) => void;
  onAddNewClick: () => void;
}

const StudentList: React.FC<StudentListProps> = ({ 
  students, 
  selectedStudent, 
  setSelectedStudent,
  onAddNewClick 
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredStudents = searchQuery
    ? students.filter(student => 
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : students;
    
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="w-full">
            <Input
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
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
  );
};

export default StudentList;
