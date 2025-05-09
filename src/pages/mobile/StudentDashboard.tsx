
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import ProgressBar from "@/components/mobile/ProgressBar";
import MissionCard from "@/components/mobile/MissionCard";
import BadgeIcon from "@/components/mobile/BadgeIcon";
import { mockMissions, mockBadges, studentProgress } from "@/data/mockData";

const StudentDashboard = () => {
  const navigate = useNavigate();
  
  // Filter available or in-progress missions
  const activeMissions = mockMissions.filter(
    mission => mission.status === "available" || mission.status === "in-progress"
  );
  
  // Get earned badges
  const earnedBadges = mockBadges.filter(
    badge => studentProgress.badges.includes(badge.id)
  );
  
  return (
    <MobileLayout title="Home">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-app-light-blue flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-app-blue">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="10" r="3"/>
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
            </svg>
          </div>
          <div>
            <p className="text-gray-600">Welcome back,</p>
            <h2 className="text-xl font-bold">Alex Johnson</h2>
          </div>
        </div>
      </div>
      
      {/* Points & Progress */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Your Progress</h3>
          <span className="text-app-orange font-bold">{studentProgress.totalPoints} pts</span>
        </div>
        <ProgressBar progress={60} />
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>{studentProgress.completedMissions} completed</span>
          <span>{studentProgress.availableMissions} total missions</span>
        </div>
      </div>
      
      {/* Badges Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Your Badges</h3>
          <button 
            onClick={() => navigate("/mobile/profile")}
            className="text-sm text-app-blue"
          >
            View all
          </button>
        </div>
        
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {earnedBadges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center min-w-[4rem]">
              <BadgeIcon badge={badge} size="sm" />
              <span className="text-xs mt-1 text-center">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Active Missions Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Active Missions</h3>
          <button 
            onClick={() => navigate("/mobile/missions")}
            className="text-sm text-app-blue"
          >
            View all
          </button>
        </div>
        
        {activeMissions.map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>
    </MobileLayout>
  );
};

export default StudentDashboard;
