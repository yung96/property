import { motion } from 'framer-motion';
import { useTelegram } from '../hooks/useTelegram';

export const PropertyCard = ({ property, onClick, delay = 0 }) => {
  const { hapticFeedback } = useTelegram();

  const handleClick = () => {
    hapticFeedback('medium');
    onClick?.(property);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative overflow-hidden rounded-2xl bg-secondary cursor-pointer"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Year Badge */}
        {property.year && (
          <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-gold text-sm font-semibold">{property.year}</span>
          </div>
        )}

        {/* Tags */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {property.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tag */}
        {property.tag && (
          <p className="text-xs text-gray-500 mb-2">Tag: {property.tag}</p>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">
          {property.title}
        </h3>

        {/* Location */}
        {property.location && (
          <div className="flex items-center gap-2 mb-3">
            <svg
              className="w-4 h-4 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm text-gray-400">{property.location}</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-gold">{property.price}</p>
          <svg
            className="w-6 h-6 text-gold"
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
    </motion.div>
  );
};

