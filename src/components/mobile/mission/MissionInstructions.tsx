
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MissionInstructionsProps {
  instructions: string;
}

const MissionInstructions: React.FC<MissionInstructionsProps> = ({ instructions }) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="font-bold mb-3">Instructions</h3>
        {instructions.split("\n").map((line, index) => (
          <p key={index} className="mb-2 text-sm">{line}</p>
        ))}
      </CardContent>
    </Card>
  );
};

export default MissionInstructions;
