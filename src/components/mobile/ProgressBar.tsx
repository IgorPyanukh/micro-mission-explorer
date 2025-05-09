
interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  color = "bg-app-blue"
}) => {
  return (
    <div className="progress-bar">
      <div 
        className={`progress-value ${color}`} 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
};

export default ProgressBar;
