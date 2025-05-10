
import { Badge as BadgeType } from "../../types";
import { 
  Badge
} from "lucide-react";

interface BadgeIconProps {
  badge: BadgeType;
  size?: "sm" | "md" | "lg";
}

const BadgeIcon: React.FC<BadgeIconProps> = ({ badge, size = "md" }) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20"
  };
  
  const getBadgeColorClasses = () => {
    switch(badge.color) {
      case 'blue':
        return 'bg-app-blue';
      case 'green':
        return 'bg-app-green';
      case 'red':
        return 'bg-app-red';
      case 'yellow':
        return 'bg-app-yellow';
      case 'purple':
        return 'bg-app-purple';
      case 'orange':
        return 'bg-app-orange';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <div className={`${getBadgeColorClasses()} ${sizeClasses[size]} rounded-full flex items-center justify-center shadow-md`}>
      <Badge className="w-3/4 h-3/4 text-white stroke-[1.5]" />
    </div>
  );
};

export default BadgeIcon;
