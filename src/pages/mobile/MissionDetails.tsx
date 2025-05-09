
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { mockMissions, mockBadges } from "@/data/mockData";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const MissionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [missionStatus, setMissionStatus] = useState<"available" | "in-progress" | "completed" | "verified">("available");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [numericValue, setNumericValue] = useState<number>(0);
  
  // Find the mission by ID
  const mission = mockMissions.find(m => m.id === id);
  const badge = mission?.badgeId ? mockBadges.find(b => b.id === mission.badgeId) : null;
  
  const handleStartMission = () => {
    // In a real app, update mission status to "in-progress"
    setMissionStatus("in-progress");
    navigate("/mobile/camera", { state: { missionId: id } });
  };
  
  const handleSubmitMission = () => {
    if (!capturedImage && mission?.requiresImage) {
      toast.error("Please capture an image for this mission");
      return;
    }
    
    if (mission?.requiresText && !answerText.trim()) {
      toast.error("Please provide an answer for this mission");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setMissionStatus("completed");
      toast.success("Mission completed successfully!");
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
      
      {/* Mission Submission Form - Only shown when mission is in progress */}
      {missionStatus === "in-progress" && (
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h3 className="font-bold mb-3">Your Submission</h3>
          
          {/* Image Preview - Only shown if image is captured */}
          {capturedImage && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Captured Image:</h4>
              <div className="rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
                <img 
                  src={capturedImage} 
                  alt="Captured for mission" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-end mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate("/mobile/camera")}
                >
                  Recapture
                </Button>
              </div>
            </div>
          )}
          
          {/* Text Answer Field - If required */}
          {mission.requiresText && (
            <div className="mb-4">
              <Label htmlFor="answer" className="block mb-2">
                Your Answer:
              </Label>
              <Textarea 
                id="answer"
                placeholder="Enter your response here..." 
                className="w-full" 
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
              />
            </div>
          )}
          
          {/* Multiple Choice - If required */}
          {mission.hasMultipleChoice && (
            <div className="mb-4">
              <Label className="block mb-2">Select one option:</Label>
              <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="optionA" id="optionA" />
                  <Label htmlFor="optionA">Plant Cell</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="optionB" id="optionB" />
                  <Label htmlFor="optionB">Animal Cell</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="optionC" id="optionC" />
                  <Label htmlFor="optionC">Bacterial Cell</Label>
                </div>
              </RadioGroup>
            </div>
          )}
          
          {/* Numeric Input - If required */}
          {mission.requiresNumericInput && (
            <div className="mb-4">
              <Label htmlFor="numeric" className="block mb-2">
                Measurement (in micrometers):
              </Label>
              <Input 
                id="numeric"
                type="number" 
                placeholder="0" 
                className="w-full" 
                value={numericValue || ''}
                onChange={(e) => setNumericValue(parseInt(e.target.value) || 0)}
              />
            </div>
          )}
        </div>
      )}
      
      {/* Badge to Earn */}
      {badge && (
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <h3 className="font-bold mb-3">Badge to Earn</h3>
          <div className="flex items-center">
            <div className="mr-3">
              <BadgeIcon badge={badge} size="md" />
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
        {missionStatus === "available" ? (
          <Button 
            onClick={handleStartMission}
            className="w-full bg-app-blue hover:bg-blue-700"
          >
            Start Mission
          </Button>
        ) : missionStatus === "in-progress" ? (
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
