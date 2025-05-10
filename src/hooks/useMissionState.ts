
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { mockMissions, mockBadges, mockSubmissions } from "@/data/mockData";
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
  
  // Get the badge with proper color information
  let badge: Badge | null = null;
  if (mission?.badgeId) {
    badge = mockBadges.find(b => b.id === mission.badgeId) || null;
    console.log("Found badge:", badge); // Debug log
  }
  
  // Check if there's a submission for this mission
  const submission = mockSubmissions.find(s => s.missionId === id);
  
  // Effect to check if we're returning from the camera with an image
  useEffect(() => {
    // If we're returning from camera with a captured image, update state
    // This implements requirement #2 - handle camera return
    if (location.state?.capturedImage) {
      setCapturedImage(location.state.capturedImage);
      setMissionStatus("in-progress");
    }
    
    // If the mission already has a status, use that
    if (mission) {
      if (mission.status !== "available") {
        setMissionStatus(mission.status);
      }
    }
    
    // If there's a submission for this mission, pre-fill the form fields
    if (submission) {
      if (submission.imageUrl) setCapturedImage(submission.imageUrl);
      if (submission.text) setAnswerText(submission.text);
      setMissionStatus("in-progress"); // Show the submission form
    }
  }, [location.state, mission, submission]);
  
  const handleStartMission = () => {
    // This implements part of requirement #2 - start mission and go to camera
    setMissionStatus("in-progress");
    navigate("/mobile/camera", { state: { missionId: id, returnTo: `/mobile/mission/${id}` } });
  };
  
  const handleSubmitMission = () => {
    // Implement requirement #3 - submission validation and handling
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
    setNumericValue,
    submission
  };
};
