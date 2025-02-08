interface ButtonProps {
  children: React.ReactNode; // Allows text inside the button
  action?: () => void; // Optional action function
}

const Button: React.FC<ButtonProps> = ({ children, action }) => {
  return (
    <button onClick={action} className="btn">
      {children}
    </button>
  );
};

export default Button;
