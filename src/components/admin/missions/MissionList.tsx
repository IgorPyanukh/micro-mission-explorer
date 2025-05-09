
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Mission } from "@/types";

interface MissionListProps {
  missions: Mission[];
  selectedMission: string | null;
  onSelectMission: (id: string) => void;
}

const MissionList = ({ missions, selectedMission, onSelectMission }: MissionListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredMissions = searchQuery 
    ? missions.filter(mission => 
        mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mission.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : missions;
  
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="mb-4">
          <Input
            placeholder="Search missions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          {filteredMissions.map((mission) => (
            <div 
              key={mission.id} 
              className={`p-3 rounded-lg cursor-pointer ${
                selectedMission === mission.id 
                  ? 'bg-app-light-blue border-l-4 border-app-blue' 
                  : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => onSelectMission(mission.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{mission.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  mission.status === 'available' ? 'bg-blue-100 text-app-blue' :
                  mission.status === 'in-progress' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                {mission.description}
              </p>
              <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                <span>{mission.points} points</span>
                {mission.deadline && (
                  <span>Due: {new Date(mission.deadline).toLocaleDateString()}</span>
                )}
              </div>
            </div>
          ))}
          
          {filteredMissions.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No missions found matching your search
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MissionList;
