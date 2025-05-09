
import { Button } from "@/components/ui/button";
import { Mission, Badge } from "@/types";
import { mockBadges } from "@/data/mockData";

interface MissionDetailProps {
  mission: Mission;
}

const MissionDetail = ({ mission }: MissionDetailProps) => {
  const missionBadge = mission.badgeId 
    ? mockBadges.find(b => b.id === mission.badgeId) 
    : null;
    
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">{mission.title}</h2>
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
        
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
            <p>{mission.description}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
              <div className={`text-sm px-3 py-1 rounded-full inline-block ${
                mission.status === 'available' ? 'bg-blue-100 text-app-blue' :
                mission.status === 'in-progress' ? 'bg-yellow-100 text-yellow-600' :
                'bg-green-100 text-green-600'
              }`}>
                {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Points</h3>
              <p className="font-medium text-app-orange">{mission.points} pts</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Deadline</h3>
              <p>{mission.deadline 
                ? new Date(mission.deadline).toLocaleDateString() 
                : "No deadline"}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Instructions</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              {mission.instructions.split('\n').map((line, index) => (
                <p key={index} className="mb-2 text-sm last:mb-0">{line}</p>
              ))}
            </div>
          </div>
          
          {missionBadge && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Badge Reward</h3>
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 ${missionBadge.color}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"/>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">{missionBadge.name}</h4>
                  <p className="text-sm text-gray-600">{missionBadge.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 bg-gray-50">
        <h3 className="font-medium mb-4">Recent Submissions (3)</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Alex Johnson</h4>
                  <p className="text-xs text-gray-500">Submitted: Nov 15, 2023 at 10:30 AM</p>
                </div>
              </div>
              <div className="text-sm text-green-600 bg-green-50 rounded-full px-3 py-1">Approved</div>
            </div>
            
            <div className="mt-3 flex">
              <div className="w-20 h-20 bg-gray-100 rounded-lg mr-4 overflow-hidden">
                <img src="/placeholder.svg" alt="Submission" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 line-clamp-3">
                  I observed plant cells have a cell wall and central vacuole, which animal cells lack. Animal cells have irregular shapes while plant cells are more rectangular.
                </p>
                <div className="mt-2 text-xs text-gray-500">
                  <span className="bg-blue-50 text-app-blue rounded-full px-2 py-0.5">AI: Plant Cell - Onion Epidermal</span>
                </div>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">
            View All Submissions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MissionDetail;
