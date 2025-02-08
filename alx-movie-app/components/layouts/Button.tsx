// components/commons/Button.tsx
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ children, action }) => {
  return (
    <button
      onClick={action}
      className="px-8 py-2 border-2 border-[#E2D609] rounded-full hover:bg-[#E2D609] hover:text-black transition-colors duration-300"
    >
      <p>Click &quot;Sign In&quot; to continue</p>
    </button>
  );
};

export default Button;
