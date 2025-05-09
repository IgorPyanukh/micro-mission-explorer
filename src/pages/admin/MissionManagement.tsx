
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { mockMissions } from "@/data/mockData";
import { Mission } from "@/types";
import MissionList from "@/components/admin/missions/MissionList";
import MissionDetail from "@/components/admin/missions/MissionDetail";
import NoMissionSelected from "@/components/admin/missions/NoMissionSelected";
import CreateMissionModal from "@/components/admin/CreateMissionModal";

const MissionManagement = () => {
  const [selectedMission, setSelectedMission] = useState<string | null>(null);
  const [missions, setMissions] = useState<Mission[]>(mockMissions);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  
  const selectedMissionData = missions.find(m => m.id === selectedMission);
    
  const handleCreateMission = (newMission: Mission) => {
    setMissions(prev => [...prev, newMission]);
  };
  
  return (
    <AdminLayout title="Mission Management">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Missions</h2>
          <p className="text-gray-600">Create, manage, and verify student missions</p>
        </div>
        <Button 
          className="bg-app-blue hover:bg-blue-700"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Create New Mission
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MissionList 
          missions={missions} 
          selectedMission={selectedMission} 
          onSelectMission={setSelectedMission} 
        />
        
        <div className="lg:col-span-2">
          {selectedMissionData ? (
            <MissionDetail mission={selectedMissionData} />
          ) : (
            <NoMissionSelected 
              onSelectFirst={() => missions.length > 0 && setSelectedMission(missions[0].id)} 
            />
          )}
        </div>
      </div>

      <CreateMissionModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateMission={handleCreateMission}
      />
    </AdminLayout>
  );
};

export default MissionManagement;
