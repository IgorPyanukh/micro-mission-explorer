
import { Badge as BadgeType } from "../../types";
import { 
  Award,
  Check,
  Star,
  BadgePlus
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
  
  const getBadgeIcon = () => {
    switch(badge.type) {
      case 'achievement':
        return <Award className="w-3/4 h-3/4 text-white" />;
      case 'completion':
        return <Check className="w-3/4 h-3/4 text-white" />;
      case 'excellence':
        return <Star className="w-3/4 h-3/4 text-white" />;
      case 'special':
        return <BadgePlus className="w-3/4 h-3/4 text-white" />;
      default:
        return <Award className="w-3/4 h-3/4 text-white" />;
    }
  };
  
  const getBadgeColorClasses = () => {
    switch(badge.color) {
      case 'blue':
        return 'bg-blue-500';
      case 'green':
        return 'bg-green-500';
      case 'red':
        return 'bg-red-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'purple':
        return 'bg-purple-500';
      case 'orange':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <div className={`${getBadgeColorClasses()} ${sizeClasses[size]} rounded-full flex items-center justify-center shadow-md`}>
      {getBadgeIcon()}
    </div>
  );
};

export default BadgeIcon;
