
import React from "react";
import { Mission } from "../../../types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MissionHeaderProps {
  mission: Mission;
}

const MissionHeader: React.FC<MissionHeaderProps> = ({ mission }) => {
  return (
    <Card className="mb-4 overflow-hidden">
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
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">{mission.title}</h2>
          <Badge className="bg-app-orange">{mission.points} pts</Badge>
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
      </CardContent>
    </Card>
  );
};

export default MissionHeader;
