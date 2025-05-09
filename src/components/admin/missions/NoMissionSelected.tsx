
import { Button } from "@/components/ui/button";

interface NoMissionSelectedProps {
  onSelectFirst: () => void;
}

const NoMissionSelected = ({ onSelectFirst }: NoMissionSelectedProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
          <line x1="16" x2="16" y1="2" y2="6"/>
          <line x1="8" x2="8" y1="2" y2="6"/>
          <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
      </div>
      <h3 className="text-lg font-medium">Select a mission</h3>
      <p className="text-gray-600 mt-1 max-w-md">
        Choose a mission from the list on the left to view details and manage submissions
      </p>
      <Button 
        className="mt-4 bg-app-blue hover:bg-blue-700"
        onClick={onSelectFirst}
      >
        Select First Mission
      </Button>
    </div>
  );
};

export default NoMissionSelected;
