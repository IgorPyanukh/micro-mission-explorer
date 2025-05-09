
import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import BadgeIcon from "@/components/mobile/BadgeIcon";
import ProgressBar from "@/components/mobile/ProgressBar";
import { mockBadges, studentProgress, leaderboardData } from "@/data/mockData";

const StudentProfile = () => {
  // Find earned badges
  const earnedBadges = mockBadges.filter(
    badge => studentProgress.badges.includes(badge.id)
  );
  
  // Get current student rank
  const currentStudent = leaderboardData[0]; // Alex Johnson for demo
  
  return (
    <MobileLayout title="Profile">
      {/* Student Profile */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
        <div className="h-24 bg-gradient-to-r from-app-blue to-blue-500"></div>
        <div className="p-4 relative">
          <div className="absolute -top-12 left-4 w-20 h-20 rounded-full border-4 border-white bg-white shadow-sm overflow-hidden">
            <img src="/placeholder.svg" alt="Student avatar" className="w-full h-full object-cover" />
          </div>
          
          <div className="mt-10">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold">Alex Johnson</h2>
                <p className="text-gray-600">Biology 101 - Grade 8</p>
              </div>
              <div className="bg-app-orange text-white rounded-full px-3 py-1 text-sm font-semibold">
                {studentProgress.totalPoints} pts
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Level Progress</span>
                <span className="text-sm font-medium">Level 3</span>
              </div>
              <ProgressBar progress={60} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Badges Section */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <h3 className="font-bold mb-3">Your Badges</h3>
        
        <div className="grid grid-cols-3 gap-3">
          {earnedBadges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center">
              <BadgeIcon badge={badge} />
              <span className="text-xs mt-2 text-center">{badge.name}</span>
            </div>
          ))}
          
          {/* Placeholder badges for locked/future badges */}
          {Array(3 - earnedBadges.length).fill(0).map((_, i) => (
            <div key={`empty-${i}`} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" x2="12" y1="8" y2="16"/>
                  <line x1="8" x2="16" y1="12" y2="12"/>
                </svg>
              </div>
              <span className="text-xs mt-2 text-gray-400">Locked</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats & Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <h3 className="font-bold mb-3">Your Stats</h3>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xl font-bold text-app-blue">{studentProgress.completedMissions}</div>
            <div className="text-xs text-gray-600">Completed Missions</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xl font-bold text-app-orange">{earnedBadges.length}</div>
            <div className="text-xs text-gray-600">Badges Earned</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xl font-bold text-app-green">2nd</div>
            <div className="text-xs text-gray-600">Class Rank</div>
          </div>
        </div>
        
        <h4 className="font-medium text-sm mb-2">Class Leaderboard</h4>
        <div className="bg-gray-50 rounded-lg divide-y divide-gray-200">
          {leaderboardData.slice(0, 3).map((student, index) => (
            <div 
              key={student.studentId}
              className={`flex items-center p-3 ${student.studentId === currentStudent.studentId ? 'bg-app-light-blue' : ''}`}
            >
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
              </div>
              <div className="flex-1">
                <span className="font-medium">{student.name}</span>
              </div>
              <div className="text-sm font-medium text-app-orange">
                {student.points} pts
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Actions Section */}
      <Button variant="outline" className="w-full mb-4">
        View Learning Materials
      </Button>
      
      <Button variant="outline" className="w-full text-gray-600 mb-10">
        Settings
      </Button>
    </MobileLayout>
  );
};

export default StudentProfile;
