
import { Link } from "react-router-dom";
import { Mission } from "../../types";

interface MissionCardProps {
  mission: Mission;
}

const MissionCard: React.FC<MissionCardProps> = ({ mission }) => {
  const statusColors = {
    available: "bg-app-blue text-white",
    "in-progress": "bg-app-yellow text-app-navy",
    completed: "bg-app-green text-white",
    verified: "bg-app-purple text-white"
  };
  
  const statusLabels = {
    available: "Available",
    "in-progress": "In Progress",
    completed: "Completed",
    verified: "Verified"
  };
  
  return (
    <Link to={`/mobile/mission/${mission.id}`} className="mission-card mb-4">
      <span className={`mission-badge ${statusColors[mission.status]}`}>
        {statusLabels[mission.status]}
      </span>
      
      <div className="flex items-center mb-3">
        <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center mr-3 overflow-hidden">
          {mission.imageUrl ? (
            <img src={mission.imageUrl} alt={mission.title} className="w-full h-full object-cover" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <path d="M12 18v-6"/>
              <path d="M8 18v-1"/>
              <path d="M16 18v-3"/>
            </svg>
          )}
        </div>
        <div>
          <h3 className="font-bold">{mission.title}</h3>
          <div className="flex items-center mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-app-orange mr-1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span className="text-sm text-gray-600">{mission.points} points</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{mission.description}</p>
      
      {mission.deadline && (
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
            <line x1="16" x2="16" y1="2" y2="6"/>
            <line x1="8" x2="8" y1="2" y2="6"/>
            <line x1="3" x2="21" y1="10" y2="10"/>
          </svg>
          Due: {new Date(mission.deadline).toLocaleDateString()}
        </div>
      )}
    </Link>
  );
};

export default MissionCard;
