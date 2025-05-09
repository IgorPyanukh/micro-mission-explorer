
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CameraView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { missionId, returnTo } = location.state || {};
  
  const [isCameraActive, setIsCameraActive] = useState(true);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  
  // In a real app, this would use the device's camera API
  // For this prototype, we're simulating with placeholder images
  const placeholderImages = [
    "/placeholder.svg",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  ];
  
  const handleCaptureImage = () => {
    // Simulate camera capture with a random placeholder
    const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
    setCapturedImage(randomImage);
    setIsCameraActive(false);
    toast.success("Image captured!");
  };
  
  const handleRetake = () => {
    setCapturedImage(null);
    setIsCameraActive(true);
  };
  
  const handleConfirm = () => {
    if (capturedImage && returnTo) {
      // Navigate back to mission details with the captured image
      navigate(returnTo, { state: { capturedImage } });
    } else {
      // Default fallback if no return path was specified
      navigate("/mobile/missions");
    }
  };
  
  const handleBack = () => {
    if (returnTo) {
      navigate(returnTo);
    } else {
      navigate("/mobile/missions");
    }
  };
  
  return (
    <MobileLayout 
      title="Camera" 
      showBackButton={!isCameraActive}
      onBack={handleBack}
      showNavigation={false}
    >
      <div className="h-full flex flex-col">
        {/* Camera Viewport or Captured Image Preview */}
        <div className="flex-1 bg-black rounded-lg overflow-hidden relative mb-4">
          {isCameraActive ? (
            <div className="w-full h-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
          ) : (
            <img 
              src={capturedImage || ""} 
              alt="Captured" 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        
        {/* Camera Controls */}
        <div className="p-4 bg-white rounded-lg">
          {isCameraActive ? (
            <div className="flex justify-center">
              <Button
                onClick={handleCaptureImage}
                className="w-16 h-16 rounded-full bg-app-blue hover:bg-blue-700 flex items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full border-2 border-white"></div>
              </Button>
            </div>
          ) : (
            <div className="flex justify-between">
              <Button
                onClick={handleRetake}
                variant="outline"
                className="px-8"
              >
                Retake
              </Button>
              <Button
                onClick={handleConfirm}
                className="px-8 bg-app-green hover:bg-green-700"
              >
                Use Photo
              </Button>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
};

export default CameraView;
