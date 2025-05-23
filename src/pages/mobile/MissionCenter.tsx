
import { useState } from "react";
import MobileLayout from "@/components/mobile/MobileLayout";
import MissionCard from "@/components/mobile/MissionCard";
import { mockMissions } from "@/data/mockData";
import { MissionStatus } from "@/types";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const MissionCenter = () => {
  const [activeTab, setActiveTab] = useState<MissionStatus | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filterMissions = () => {
    if (activeTab === "all" && !searchTerm) {
      return mockMissions;
    }
    
    return mockMissions
      .filter(mission => activeTab === "all" || mission.status === activeTab)
      .filter(mission => 
        mission.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        mission.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };
  
  const filteredMissions = filterMissions();
  
  return (
    <MobileLayout title="Missions">
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          className="pl-9 pr-4 py-2 w-full rounded-lg"
          placeholder="Search missions..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Tabs */}
      <div className="flex bg-white rounded-lg shadow-sm mb-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab("all")}
          className={`flex-1 py-2 px-3 text-sm font-medium whitespace-nowrap ${activeTab === "all" ? "text-app-blue border-b-2 border-app-blue" : "text-gray-600"}`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveTab("available")}
          className={`flex-1 py-2 px-3 text-sm font-medium whitespace-nowrap ${activeTab === "available" ? "text-app-blue border-b-2 border-app-blue" : "text-gray-600"}`}
        >
          Available
        </button>
        <button 
          onClick={() => setActiveTab("in-progress")}
          className={`flex-1 py-2 px-3 text-sm font-medium whitespace-nowrap ${activeTab === "in-progress" ? "text-app-blue border-b-2 border-app-blue" : "text-gray-600"}`}
        >
          In Progress
        </button>
        <button 
          onClick={() => setActiveTab("completed")}
          className={`flex-1 py-2 px-3 text-sm font-medium whitespace-nowrap ${activeTab === "completed" ? "text-app-blue border-b-2 border-app-blue" : "text-gray-600"}`}
        >
          Completed
        </button>
      </div>
      
      {/* Missions List */}
      <div>
        {filteredMissions.length > 0 ? (
          filteredMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))
        ) : (
          <div className="text-center py-8">
            <div className="bg-gray-100 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
            </div>
            <p className="text-gray-600">No missions found</p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default MissionCenter;
