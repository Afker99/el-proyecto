import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      variant="Secondary"
      onClick={() => {
        navigate(-1);
      }}
      hasIcon
    >
      <ArrowLeft size={16} />
      <span>Back</span>
    </Button>
  );
}

export default BackButton;
