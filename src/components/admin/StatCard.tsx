
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  isPositive?: boolean;
  bgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  isPositive = true,
  bgColor = "bg-white"
}) => {
  return (
    <div className={`rounded-xl shadow-sm p-4 ${bgColor}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          
          {change && (
            <div className="flex items-center mt-2">
              <span className={`text-xs font-medium ${isPositive ? 'text-app-green' : 'text-app-red'}`}>
                {isPositive ? '↑' : '↓'} {change}
              </span>
              <span className="text-xs text-gray-500 ml-1">vs. last month</span>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-full ${isPositive ? 'bg-app-light-blue text-app-blue' : 'bg-red-100 text-app-red'}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
