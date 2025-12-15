import { motion } from 'framer-motion';
import { useTelegram } from '../hooks/useTelegram';

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  fullWidth = false,
  className = '',
  haptic = 'light',
}) => {
  const { hapticFeedback } = useTelegram();

  const handleClick = (e) => {
    hapticFeedback(haptic);
    onClick?.(e);
  };

  const baseStyles = 'px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gold text-primary',
    secondary: 'bg-secondary text-white',
    outline: 'border-2 border-gold text-gold',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

