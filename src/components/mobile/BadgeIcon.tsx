
import { Badge as BadgeType } from "../../types";
import { 
  Award
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
    // Fix color mapping to match the provided image
    switch(badge.name.toLowerCase()) {
      case 'plant explorer':
        return 'bg-emerald-500'; // Green like in the image
      case 'cell comparer':
        return 'bg-purple-500';  // Purple like in the image
      case 'first submission':
        return 'bg-amber-400';   // Yellow/gold like in the image
      case 'ocean explorer':
        return 'bg-app-blue';
      case 'blood analyst':
        return 'bg-app-red';
      // Keep other color mappings as fallbacks  
      default:
        // If we can't determine the color from the name, try the color property
        if (badge.color) {
          switch(badge.color) {
            case 'blue': return 'bg-app-blue';
            case 'green': return 'bg-app-green';
            case 'red': return 'bg-app-red';
            case 'yellow': return 'bg-app-yellow';
            case 'purple': return 'bg-app-purple';
            case 'orange': return 'bg-app-orange';
            default: return 'bg-emerald-500'; // Default to green if unknown
          }
        }
        return 'bg-emerald-500'; // Default to green if no color info available
    }
  };
  
  return (
    <div className={`${getBadgeColorClasses()} ${sizeClasses[size]} rounded-full flex items-center justify-center shadow-md`}>
      <Award className="w-3/4 h-3/4 text-white stroke-[1.5]" />
    </div>
  );
};

export default BadgeIcon;
