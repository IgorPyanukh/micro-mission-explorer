
import { Badge } from "../../types";
import { Award, Check, Star, Trophy, Zap } from "lucide-react";

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
        return <Check className="w-3/4 h-3/4 text-white" />;
      case 'excellence':
        return <Star className="w-3/4 h-3/4 text-white" />;
      case 'special':
        return <Zap className="w-3/4 h-3/4 text-white" />;
      default:
        return <Award className="w-3/4 h-3/4 text-white" />;
    }
  };
  
  return (
    <div className={`badge-icon ${badge.color} ${sizeClasses[size]} rounded-full flex items-center justify-center`}>
      {badge.imageUrl ? (
        <img src={badge.imageUrl} alt={badge.name} className="w-3/4 h-3/4" />
      ) : (
        getBadgeIcon()
      )}
    </div>
  );
};

export default BadgeIcon;
