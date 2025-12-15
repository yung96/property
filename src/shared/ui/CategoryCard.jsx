import { motion } from 'framer-motion';
import { useTelegram } from '../hooks/useTelegram';

export const CategoryCard = ({ category, onClick, delay = 0 }) => {
  const { hapticFeedback } = useTelegram();

  const handleClick = () => {
    hapticFeedback('light');
    onClick?.(category);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative overflow-hidden rounded-xl bg-secondary border border-secondary-light cursor-pointer"
      onClick={handleClick}
    >
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {category.title}
        </h3>

        {/* Price Range */}
        <p className="text-sm text-gray-400 mb-4">
          {category.priceRange}
        </p>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-gold">
          <div className="w-8 h-0.5 bg-gold" />
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-full" />
    </motion.div>
  );
};

