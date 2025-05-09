
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import { mockMissions, mockBadges } from "@/data/mockData";

const MissionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Find the mission by ID
  const mission = mockMissions.find(m => m.id === id);
  const badge = mission?.badgeId ? mockBadges.find(b => b.id === mission.badgeId) : null;
  
  const handleStartMission = () => {
    // In a real app, update mission status to "in-progress"
    navigate("/mobile/camera");
  };
  
  const handleSubmitMission = () => {
    setIsSubmitting(true);
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate back to missions
      navigate("/mobile/missions");
    }, 1500);
  };
  
  if (!mission) {
    return (
      <MobileLayout 
        title="Mission Not Found" 
        showBackButton 
        onBack={() => navigate("/mobile/missions")}
      >
        <div className="text-center py-12">
          <p>Sorry, this mission could not be found.</p>
          <Button 
            onClick={() => navigate("/mobile/missions")} 
            className="mt-4 bg-app-blue hover:bg-blue-700"
          >
            Back to Missions
          </Button>
        </div>
      </MobileLayout>
    );
  }
  
  return (
    <MobileLayout 
      title="Mission Details" 
      showBackButton 
      onBack={() => navigate("/mobile/missions")} 
      showNavigation={false}
    >
      {/* Mission Header */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
        <div className="h-32 bg-gradient-to-r from-app-blue to-blue-500 flex items-center justify-center">
          {mission.imageUrl ? (
            <img src={mission.imageUrl} alt={mission.title} className="w-full h-full object-cover" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold">{mission.title}</h2>
            <span className="bg-app-orange text-white rounded-full px-3 py-1 text-sm font-semibold">
              {mission.points} pts
            </span>
          </div>
          
          <p className="text-gray-600 my-3">{mission.description}</p>
          
          {mission.deadline && (
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              Due: {new Date(mission.deadline).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
      
      {/* Instructions */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <h3 className="font-bold mb-3">Instructions</h3>
        {mission.instructions.split("\n").map((line, index) => (
          <p key={index} className="mb-2 text-sm">{line}</p>
        ))}
      </div>
      
      {/* Badge to Earn */}
      {badge && (
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h3 className="font-bold mb-3">Badge to Earn</h3>
          <div className="flex items-center">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mr-3 ${badge.color}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">{badge.name}</h4>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        {mission.status === "available" ? (
          <Button 
            onClick={handleStartMission}
            className="w-full bg-app-blue hover:bg-blue-700"
          >
            Start Mission
          </Button>
        ) : mission.status === "in-progress" ? (
          <Button 
            onClick={handleSubmitMission}
            className="w-full bg-app-green hover:bg-green-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Mission"}
          </Button>
        ) : (
          <Button disabled className="w-full bg-gray-400">
            Mission Completed
          </Button>
        )}
      </div>
    </MobileLayout>
  );
};

export default MissionDetails;
