
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Play, ArrowRight } from "lucide-react";

interface MissionActionButtonProps {
  missionStatus: "available" | "in-progress" | "completed" | "verified";
  isSubmitting: boolean;
  onStartMission: () => void;
  onSubmitMission: () => void;
  onNavigateBack: () => void;
}

const MissionActionButton: React.FC<MissionActionButtonProps> = ({
  missionStatus,
  isSubmitting,
  onStartMission,
  onSubmitMission,
  onNavigateBack
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
      {missionStatus === "available" ? (
        <Button 
          onClick={onStartMission}
          className="w-full bg-app-blue hover:bg-blue-700 py-6 text-lg"
        >
          <Play className="mr-2" /> Start Mission
        </Button>
      ) : missionStatus === "in-progress" ? (
        <Button 
          onClick={onSubmitMission}
          className="w-full bg-app-green hover:bg-green-700 py-6 text-lg"
          disabled={isSubmitting}
        >
          <Check className="mr-2" /> {isSubmitting ? "Submitting..." : "Submit Mission"}
        </Button>
      ) : (
        <Button 
          onClick={onNavigateBack}
          className="w-full bg-app-blue hover:bg-blue-700 py-6 text-lg"
        >
          <ArrowRight className="mr-2" /> Back to Missions
        </Button>
      )}
    </div>
  );
};

export default MissionActionButton;
