
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/mobile/MobileLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Mock learning materials data
const learningMaterials = [
  {
    id: "guide1",
    title: "Introduction to Microscopy",
    type: "guide",
    thumbnail: "/placeholder.svg",
    content: "This guide introduces students to the basics of using a microscope in a classroom setting...",
    description: "Learn how to use a microscope properly for biological observations",
    dateAdded: "2023-04-15"
  },
  {
    id: "worksheet1",
    title: "Cell Structure Identification",
    type: "worksheet",
    thumbnail: "/placeholder.svg",
    content: "In this worksheet, students will identify different cell structures...",
    description: "Practice identifying plant and animal cell structures",
    dateAdded: "2023-04-20"
  },
  {
    id: "video1",
    title: "Microscope Focusing Techniques",
    type: "video",
    thumbnail: "/placeholder.svg",
    videoUrl: "#",
    description: "Watch this tutorial on proper focusing techniques",
    duration: "5:30",
    dateAdded: "2023-04-18"
  },
  {
    id: "guide2",
    title: "Types of Microscopes",
    type: "guide",
    thumbnail: "/placeholder.svg",
    content: "This guide covers different types of microscopes and their uses...",
    description: "Explore different microscope types and when to use them",
    dateAdded: "2023-04-22"
  },
  {
    id: "worksheet2",
    title: "Microscopic Measurements",
    type: "worksheet",
    thumbnail: "/placeholder.svg",
    content: "Practice measuring microscopic specimens with calibration scales...",
    description: "Learn how to measure specimens using microscope calibration",
    dateAdded: "2023-04-25"
  }
];

const LearningMaterials = () => {
  const navigate = useNavigate();
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredMaterials = activeTab === "all" 
    ? learningMaterials 
    : learningMaterials.filter(material => material.type === activeTab);
  
  const handleMaterialSelect = (id: string) => {
    setSelectedMaterial(id);
  };
  
  const handleOpenMaterial = () => {
    // In a real app, navigate to the specific material page
    // For this prototype, just show a toast
    toast.success(`Opened material: ${learningMaterials.find(m => m.id === selectedMaterial)?.title}`);
  };
  
  return (
    <MobileLayout 
      title="Learning Materials" 
      showBackButton={true}
      onBack={() => navigate("/mobile/profile")}
    >
      <div className="pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="guide">Guides</TabsTrigger>
            <TabsTrigger value="worksheet">Worksheets</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="space-y-3">
          {filteredMaterials.map((material) => (
            <div 
              key={material.id} 
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                selectedMaterial === material.id ? 'ring-2 ring-app-blue' : ''
              }`}
              onClick={() => handleMaterialSelect(material.id)}
            >
              <div className="flex">
                <div className="h-24 w-24 bg-gray-200 flex-shrink-0">
                  <img 
                    src={material.thumbnail} 
                    alt={material.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-3 flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{material.title}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {material.type === 'guide' ? 'Guide' : 
                       material.type === 'worksheet' ? 'Worksheet' : 'Video'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{material.description}</p>
                  
                  {material.type === 'video' && (
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <circle cx="12" cy="12" r="10"/>
                        <polygon points="10 8 16 12 10 16 10 8"/>
                      </svg>
                      <span>{(material as any).duration}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedMaterial && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
            <Button 
              className="w-full bg-app-blue hover:bg-blue-700"
              onClick={handleOpenMaterial}
            >
              Open Material
            </Button>
          </div>
        )}
      </div>
    </MobileLayout>
  );
};

export default LearningMaterials;
