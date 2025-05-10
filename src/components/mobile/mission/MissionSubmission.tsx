
import React from "react";
import { Mission } from "../../../types";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MissionSubmissionProps {
  mission: Mission;
  missionStatus: "available" | "in-progress" | "completed" | "verified";
  capturedImage: string | null;
  answerText: string;
  selectedOption: string;
  numericValue: number;
  onAnswerTextChange: (text: string) => void;
  onSelectedOptionChange: (option: string) => void;
  onNumericValueChange: (value: number) => void;
}

const MissionSubmission: React.FC<MissionSubmissionProps> = ({
  mission,
  missionStatus,
  capturedImage,
  answerText,
  selectedOption,
  numericValue,
  onAnswerTextChange,
  onSelectedOptionChange,
  onNumericValueChange
}) => {
  const navigate = useNavigate();
  
  // Use isReadOnly for completed or verified missions
  const isReadOnly = missionStatus === "completed" || missionStatus === "verified";
  
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="font-bold mb-3">Your Submission</h3>
        
        {/* Image Section - Always shown, but with different states */}
        {capturedImage ? (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Captured Image:</h4>
            <div className="rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
              <img 
                src={capturedImage} 
                alt="Captured for mission" 
                className="w-full h-full object-contain"
              />
            </div>
            {!isReadOnly && (
              <div className="flex justify-end mt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate("/mobile/camera", { 
                    state: { missionId: mission.id, returnTo: `/mobile/mission/${mission.id}` } 
                  })}
                >
                  <Camera className="mr-2 w-4 h-4" /> Recapture
                </Button>
              </div>
            )}
          </div>
        ) : mission?.requiresImage && !isReadOnly ? (
          <div className="mb-4">
            <Button
              variant="outline"
              className="w-full py-8 border-dashed border-2"
              onClick={() => navigate("/mobile/camera", { 
                state: { missionId: mission.id, returnTo: `/mobile/mission/${mission.id}` } 
              })}
            >
              <div className="flex flex-col items-center">
                <Camera className="mb-2 w-6 h-6" />
                <span>Take photo</span>
              </div>
            </Button>
          </div>
        ) : mission?.requiresImage ? (
          <div className="mb-4">
            <div className="rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center border-dashed border-2 border-gray-300">
              <div className="text-gray-400 flex flex-col items-center">
                <Camera className="mb-2 w-6 h-6" />
                <span>No image submitted</span>
              </div>
            </div>
          </div>
        ) : null}
        
        {/* Text Answer Field - If required */}
        {mission.requiresText && (
          <div className="mb-4">
            <Label htmlFor="answer" className="block mb-2">
              Your Answer:
            </Label>
            {isReadOnly ? (
              <div className="p-3 bg-gray-100 rounded-md min-h-[80px]">
                {answerText ? answerText : <span className="text-gray-400">No text submitted</span>}
              </div>
            ) : (
              <Textarea 
                id="answer"
                placeholder="Enter your response here..." 
                className="w-full" 
                value={answerText}
                onChange={(e) => onAnswerTextChange(e.target.value)}
              />
            )}
          </div>
        )}
        
        {/* Multiple Choice - If required */}
        {mission.hasMultipleChoice && (
          <div className="mb-4">
            <Label className="block mb-2">Select one option:</Label>
            {isReadOnly ? (
              <div className="p-3 bg-gray-100 rounded-md">
                {selectedOption ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-app-blue mr-2"></div>
                    <span>{selectedOption === "optionA" ? "Plant Cell" : 
                          selectedOption === "optionB" ? "Animal Cell" : 
                          selectedOption === "optionC" ? "Bacterial Cell" : 
                          "No option selected"}</span>
                  </div>
                ) : (
                  <span className="text-gray-400">No option selected</span>
                )}
              </div>
            ) : (
              <RadioGroup value={selectedOption} onValueChange={onSelectedOptionChange}>
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
            )}
          </div>
        )}
        
        {/* Numeric Input - If required */}
        {mission.requiresNumericInput && (
          <div className="mb-4">
            <Label htmlFor="numeric" className="block mb-2">
              Measurement (in micrometers):
            </Label>
            {isReadOnly ? (
              <div className="p-3 bg-gray-100 rounded-md">
                {numericValue ? `${numericValue} μm` : <span className="text-gray-400">No value submitted</span>}
              </div>
            ) : (
              <Input 
                id="numeric"
                type="number" 
                placeholder="0" 
                className="w-full" 
                value={numericValue || ''}
                onChange={(e) => onNumericValueChange(parseInt(e.target.value) || 0)}
              />
            )}
          </div>
        )}

        {/* Status indicator for completed missions */}
        {isReadOnly && (
          <div className="mt-4 p-3 bg-app-green/10 rounded-md flex items-center">
            <Check className="text-app-green mr-2" />
            <span className="text-app-green">
              {missionStatus === "verified" ? "Mission verified by teacher" : "Submission complete"}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MissionSubmission;
