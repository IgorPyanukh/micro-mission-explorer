
import { Button } from "@/components/ui/button";

interface EmptyStudentStateProps {
  onSelectFirstStudent: () => void;
}

const EmptyStudentState: React.FC<EmptyStudentStateProps> = ({ onSelectFirstStudent }) => {
  return (
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
        onClick={onSelectFirstStudent}
      >
        Select First Student
      </Button>
    </div>
  );
};

export default EmptyStudentState;
