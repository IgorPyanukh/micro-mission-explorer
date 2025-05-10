
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
    // Make sure we're using the correct color property from the badge
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
        // If no color is specified, use gray as fallback
        return 'bg-gray-500';
    }
  };
  
  // Let's add console logs to help debug
  console.log("Badge color:", badge.color);
  console.log("Badge color class:", getBadgeColorClasses());
  
  return (
    <div className={`${getBadgeColorClasses()} ${sizeClasses[size]} rounded-full flex items-center justify-center shadow-md`}>
      <Badge className="w-3/4 h-3/4 text-white stroke-[1.5]" />
    </div>
  );
};

export default BadgeIcon;
