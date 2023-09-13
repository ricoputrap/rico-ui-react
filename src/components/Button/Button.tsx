import { ButtonProps } from "./Button.types";

const buttonDefaultStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContents: 'center',
  border: 'none',
  borderRadius: '4px',
};

const buttonSizes = {
  small: {
    height: '28px',
    fontSize: '14px',
    padding: '3px 16px'
  },
  medium: {
    height: '36px',
    fontSize: '16px',
    padding: '4px 20px'
  },
  large: {
    height: '48px',
    fontSize: '20px',
    padding: '5px 24px'
  }
};

const Button: React.FC<ButtonProps> = ({ size = 'medium', children, ...props }) => {
  const buttonStyles = {
    ...props.style,
    ...buttonDefaultStyles,
    ...buttonSizes[size],
  }

  return (
    <button style={buttonStyles} {...props}>
      {children}
    </button>
  );
}

export default Button;