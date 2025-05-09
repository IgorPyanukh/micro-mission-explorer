
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import { Button } from "@/components/ui/button";

const CameraView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { missionId } = location.state || {};
  const [isCaptured, setIsCaptured] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [classification, setClassification] = useState("");
  const imageRef = useRef<HTMLImageElement>(null);
  
  const handleCapture = () => {
    // In a real app, this would trigger the device camera
    // For prototype, we'll simulate capturing an image
    setIsCaptured(true);
  };
  
  const handleRetry = () => {
    setIsCaptured(false);
    setClassification("");
  };
  
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setClassification("Plant Cell - Onion Epidermal");
    }, 2000);
  };
  
  const handleSave = () => {
    // In a real app, this would save the captured image and classification
    // For prototype, we'll just navigate back with simulated data
    if (missionId) {
      navigate(`/mobile/mission/${missionId}`, {
        state: {
          capturedImage: "/placeholder.svg", // In a real app, this would be the actual image
          classification: classification
        }
      });
    } else {
      navigate("/mobile/missions");
    }
  };
  
  return (
    <MobileLayout 
      title="Camera" 
      showBackButton={true}
      onBack={() => navigate(missionId ? `/mobile/mission/${missionId}` : "/mobile/missions")}
      showNavigation={false}
    >
      {/* Camera Preview */}
      <div className="relative aspect-[3/4] bg-black rounded-lg shadow-sm overflow-hidden mb-4">
        {isCaptured ? (
          // Static captured image (for prototype)
          <img 
            ref={imageRef}
            src="/placeholder.svg" 
            alt="Captured microscope image" 
            className="w-full h-full object-cover"
          />
        ) : (
          // Camera view simulation
          <div className="w-full h-full flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <p className="text-white mt-4">Align your microscope with the camera</p>
          </div>
        )}
        
        {/* AI classification overlay */}
        {classification && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-app-green">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <div>
                <span className="text-sm text-gray-300">AI Classification:</span>
                <p className="font-bold">{classification}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Camera Options */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium mb-1">Camera Mode</h3>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Microscope Mode</option>
              <option>Regular Camera</option>
              <option>Low Light</option>
            </select>
          </div>
          <div className="flex-1 ml-4">
            <h3 className="text-sm font-medium mb-1">Magnification</h3>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>4x</option>
              <option>10x</option>
              <option>40x</option>
              <option>100x</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        {!isCaptured ? (
          <div className="flex justify-center">
            <Button
              onClick={handleCapture}
              className="w-16 h-16 rounded-full bg-app-red hover:bg-red-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </Button>
          </div>
        ) : (
          <div className="flex space-x-3">
            <Button
              onClick={handleRetry}
              variant="outline"
              className="flex-1"
            >
              Retake
            </Button>
            
            {!classification ? (
              <Button
                onClick={handleAnalyze}
                className="flex-1 bg-app-blue hover:bg-blue-700"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? "Analyzing..." : "Analyze"}
              </Button>
            ) : (
              <Button
                onClick={handleSave}
                className="flex-1 bg-app-green hover:bg-green-700"
              >
                Save
              </Button>
            )}
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default CameraView;
