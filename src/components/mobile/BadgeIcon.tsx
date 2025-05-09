
import { Badge } from "../../types";

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
  
  return (
    <div className={`badge-icon ${badge.color} ${sizeClasses[size]}`}>
      {badge.imageUrl ? (
        <img src={badge.imageUrl} alt={badge.name} className="w-3/4 h-3/4" />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      )}
    </div>
  );
};

export default BadgeIcon;
