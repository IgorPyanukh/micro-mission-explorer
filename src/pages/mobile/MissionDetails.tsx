
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import MissionHeader from "@/components/mobile/mission/MissionHeader";
import MissionInstructions from "@/components/mobile/mission/MissionInstructions";
import MissionSubmission from "@/components/mobile/mission/MissionSubmission";
import MissionBadge from "@/components/mobile/mission/MissionBadge";
import MissionActionButton from "@/components/mobile/mission/MissionActionButton";
import { useMissionState } from "@/hooks/useMissionState";

const MissionDetails = () => {
  const navigate = useNavigate();
  const {
    mission,
    badge,
    missionStatus,
    isSubmitting,
    capturedImage,
    answerText,
    selectedOption,
    numericValue,
    handleStartMission,
    handleSubmitMission,
    navigateBack,
    setAnswerText,
    setSelectedOption,
    setNumericValue
  } = useMissionState();
  
  if (!mission) {
    return (
      <MobileLayout 
        title="Mission Not Found" 
        showBackButton 
        onBack={() => navigate("/mobile/missions")}
      >
        <div className="text-center py-12">
          <p>Sorry, this mission could not be found.</p>
          <button 
            onClick={() => navigate("/mobile/missions")} 
            className="mt-4 bg-app-blue hover:bg-blue-700"
          >
            Back to Missions
          </button>
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
      <MissionHeader mission={mission} />
      
      {/* Instructions */}
      <MissionInstructions instructions={mission.instructions} />
      
      {/* Submission Section */}
      <MissionSubmission
        mission={mission}
        missionStatus={missionStatus}
        capturedImage={capturedImage}
        answerText={answerText}
        selectedOption={selectedOption}
        numericValue={numericValue}
        onAnswerTextChange={setAnswerText}
        onSelectedOptionChange={setSelectedOption}
        onNumericValueChange={setNumericValue}
      />
      
      {/* Badge to Earn */}
      {badge && <MissionBadge badge={badge} />}
      
      {/* Action Button */}
      <MissionActionButton
        missionStatus={missionStatus}
        isSubmitting={isSubmitting}
        onStartMission={handleStartMission}
        onSubmitMission={handleSubmitMission}
        onNavigateBack={navigateBack}
      />
    </MobileLayout>
  );
};

export default MissionDetails;
