
import React from "react";
import { Badge } from "../../../types";
import { Card, CardContent } from "@/components/ui/card";
import BadgeIcon from "../BadgeIcon";

interface MissionBadgeProps {
  badge: Badge;
}

const MissionBadge: React.FC<MissionBadgeProps> = ({ badge }) => {
  return (
    <Card className="mb-20">
      <CardContent className="p-4">
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
      </CardContent>
    </Card>
  );
};

export default MissionBadge;
