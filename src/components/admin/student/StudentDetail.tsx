
import { Button } from "@/components/ui/button";
import { Student, StudentProgress, Mission } from "@/types";
import BadgeIcon from "@/components/mobile/BadgeIcon";

interface StudentDetailProps {
  student: Student;
  missions: Mission[];
  studentProgress: StudentProgress;
  classRank: number;
}

const StudentDetail: React.FC<StudentDetailProps> = ({ 
  student, 
  missions, 
  studentProgress,
  classRank 
}) => {
  return (
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
              <h2 className="text-xl font-bold">{student.name}</h2>
              <p className="text-gray-600">{student.email}</p>
              <p className="text-sm text-gray-500 mt-1">
                Grade {student.grade} • {student.className}
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
            <div className="text-2xl font-bold text-app-orange">{student.points}</div>
            <div className="text-xs text-gray-600">Total Points</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-app-blue">{student.badges}</div>
            <div className="text-xs text-gray-600">Badges Earned</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-app-green">{studentProgress.completedMissions}</div>
            <div className="text-xs text-gray-600">Missions Completed</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-gray-700">{classRank}</div>
            <div className="text-xs text-gray-600">Class Rank</div>
          </div>
        </div>
      </div>
      
      {/* Missions Progress */}
      <div className="p-6">
        <h3 className="font-medium mb-4">Mission Progress</h3>
        
        <div className="space-y-3">
          {missions.map((mission) => (
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
  );
};

export default StudentDetail;
