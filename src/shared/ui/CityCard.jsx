import { motion } from 'framer-motion';
import { useTelegram } from '../hooks/useTelegram';

export const CityCard = ({ city, onClick }) => {
  const { hapticFeedback } = useTelegram();

  const handleClick = () => {
    hapticFeedback('medium');
    onClick?.(city);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h2 className="text-3xl font-bold text-white mb-2">{city.name}</h2>
        <div className="flex items-center gap-2">
          <div className="w-12 h-0.5 bg-gold" />
          <span className="text-gold text-sm">Выбрать</span>
        </div>
      </div>
    </motion.div>
  );
};

