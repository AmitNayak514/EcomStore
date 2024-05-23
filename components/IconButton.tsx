import { Button } from "./ui/button";

interface IconButtonProps {
  icon: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <Button className="rounded-full flex items-center justify-center bg-white border shadow-sm p-2 hover:scale-110 transition">
      {icon}
    </Button>
  );
};

export default IconButton;
