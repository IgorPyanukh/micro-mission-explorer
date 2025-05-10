
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AddStudentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ open, onOpenChange }) => {
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentEmail, setNewStudentEmail] = useState("");
  const [newStudentGrade, setNewStudentGrade] = useState("6");
  const [newStudentClass, setNewStudentClass] = useState("Biology 101");
  
  const resetForm = () => {
    setNewStudentName("");
    setNewStudentEmail("");
    setNewStudentGrade("6");
    setNewStudentClass("Biology 101");
  };
  
  const handleAddStudent = () => {
    if (!newStudentName || !newStudentEmail) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // In a real app, this would send a request to add a new student
    toast.success(`Added new student: ${newStudentName}`);
    onOpenChange(false);
    resetForm();
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
            <Input 
              id="name" 
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input 
              id="email" 
              type="email"
              value={newStudentEmail}
              onChange={(e) => setNewStudentEmail(e.target.value)}
              placeholder="john.doe@school.edu"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Input 
                id="grade" 
                type="number"
                min={6}
                max={12}
                value={newStudentGrade}
                onChange={(e) => setNewStudentGrade(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Input 
                id="class" 
                value={newStudentClass}
                onChange={(e) => setNewStudentClass(e.target.value)}
                placeholder="Biology 101"
              />
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddStudent}>
            Add Student
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentForm;
