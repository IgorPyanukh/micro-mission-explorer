
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { mockMissions, mockBadges } from "@/data/mockData";
import { Mission, Badge } from "../types";

export const useMissionState = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [missionStatus, setMissionStatus] = useState<"available" | "in-progress" | "completed" | "verified">("available");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [numericValue, setNumericValue] = useState<number>(0);
  
  // Find the mission by ID
  const mission = mockMissions.find(m => m.id === id);
  const badge = mission?.badgeId ? mockBadges.find(b => b.id === mission.badgeId) : null;
  
  // Effect to check if we're returning from the camera with an image
  useEffect(() => {
    if (location.state?.capturedImage) {
      setCapturedImage(location.state.capturedImage);
      setMissionStatus("in-progress");
    }
    
    // Check if mission exists and set its status
    if (mission) {
      setMissionStatus(mission.status);
    }
  }, [location.state, mission]);
  
  const handleStartMission = () => {
    setMissionStatus("in-progress");
    navigate("/mobile/camera", { state: { missionId: id, returnTo: `/mobile/mission/${id}` } });
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
  
  const navigateBack = () => navigate("/mobile/missions");
  
  return {
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
  };
};
