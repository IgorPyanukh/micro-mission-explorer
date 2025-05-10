
import { Badge } from "../../types";
import { Award, Check, Star, Trophy, Zap, BadgeCheck, BadgePlus, BadgeInfo, BadgeHelp, BadgeAlert } from "lucide-react";

interface BadgeIconProps {
  badge: Badge;
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
        return <Trophy className="w-3/4 h-3/4 text-white" />;
      case 'completion':
        return <BadgeCheck className="w-3/4 h-3/4 text-white" />;
      case 'excellence':
        return <Star className="w-3/4 h-3/4 text-white" />;
      case 'special':
        return <BadgePlus className="w-3/4 h-3/4 text-white" />;
      default:
        return <BadgeInfo className="w-3/4 h-3/4 text-white" />;
    }
  };
  
  // Generate badge colors based on the badge's color property
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
    <div className={`badge-icon ${getBadgeColorClasses()} ${sizeClasses[size]} rounded-full flex items-center justify-center`}>
      {badge.imageUrl ? (
        <img src={badge.imageUrl} alt={badge.name} className="w-3/4 h-3/4" />
      ) : (
        getBadgeIcon()
      )}
    </div>
  );
};

export default BadgeIcon;
