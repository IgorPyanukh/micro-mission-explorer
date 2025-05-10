
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { mockBadges } from "@/data/mockData";
import { toast } from "sonner";

interface CreateMissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateMission: (mission: any) => void;
}

const CreateMissionModal = ({ isOpen, onClose, onCreateMission }: CreateMissionModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [instructions, setInstructions] = useState("");
  const [deadline, setDeadline] = useState("");
  const [badgeId, setBadgeId] = useState("");
  const [requiresImage, setRequiresImage] = useState(false);
  const [requiresText, setRequiresText] = useState(false);
  const [hasMultipleChoice, setHasMultipleChoice] = useState(false);
  const [requiresNumericInput, setRequiresNumericInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !instructions) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newMission = {
      id: `mission${Date.now()}`,
      title,
      description,
      status: "available" as const,
      points,
      deadline: deadline || undefined,
      instructions,
      imageUrl: "/placeholder.svg",
      badgeId: badgeId || undefined,
      requiresImage,
      requiresText,
      hasMultipleChoice,
      requiresNumericInput
    };

    onCreateMission(newMission);
    toast.success("Mission created successfully!");
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPoints(100);
    setInstructions("");
    setDeadline("");
    setBadgeId("");
    setRequiresImage(false);
    setRequiresText(false);
    setHasMultipleChoice(false);
    setRequiresNumericInput(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Mission</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new mission for students.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="font-medium">
                Mission Title <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="e.g. Identify Plant Cells" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="font-medium">
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Brief description of the mission" 
                rows={3} 
                required 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="points" className="font-medium">
                  Points
                </Label>
                <Input 
                  id="points" 
                  type="number" 
                  min={0} 
                  value={points} 
                  onChange={(e) => setPoints(Number(e.target.value))} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline" className="font-medium">
                  Deadline (Optional)
                </Label>
                <Input 
                  id="deadline" 
                  type="date" 
                  value={deadline} 
                  onChange={(e) => setDeadline(e.target.value)} 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructions" className="font-medium">
                Instructions <span className="text-red-500">*</span>
              </Label>
              <Textarea 
                id="instructions" 
                value={instructions} 
                onChange={(e) => setInstructions(e.target.value)} 
                placeholder="Step-by-step instructions (separate steps with new lines)" 
                rows={5} 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="badge" className="font-medium">
                Badge Reward
              </Label>
              <Select value={badgeId} onValueChange={setBadgeId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a badge" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {mockBadges.map((badge) => (
                    <SelectItem key={badge.id} value={badge.id}>
                      {badge.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="border rounded-lg p-4 space-y-3">
              <h4 className="font-medium">Submission Requirements</h4>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="requiresImage" 
                  checked={requiresImage} 
                  onCheckedChange={(checked) => setRequiresImage(checked as boolean)} 
                />
                <Label htmlFor="requiresImage">Requires photo submission</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="requiresText" 
                  checked={requiresText} 
                  onCheckedChange={(checked) => setRequiresText(checked as boolean)} 
                />
                <Label htmlFor="requiresText">Requires text explanation</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="hasMultipleChoice" 
                  checked={hasMultipleChoice} 
                  onCheckedChange={(checked) => setHasMultipleChoice(checked as boolean)} 
                />
                <Label htmlFor="hasMultipleChoice">Has multiple choice questions</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="requiresNumericInput" 
                  checked={requiresNumericInput} 
                  onCheckedChange={(checked) => setRequiresNumericInput(checked as boolean)} 
                />
                <Label htmlFor="requiresNumericInput">Requires numeric input</Label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Create Mission</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMissionModal;
