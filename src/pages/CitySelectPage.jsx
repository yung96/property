import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CityCard } from '../shared/ui/CityCard';
import { CITIES } from '../shared/constants/cities';
import { Header } from '../widgets/Header';

export const CitySelectPage = () => {
  const navigate = useNavigate();

  const handleCitySelect = (city) => {
    navigate(`/city/${city.id}/categories`);
  };

  const cities = Object.values(CITIES);

  return (
    <div className="min-h-screen bg-primary-dark">
      <Header />
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-10 pb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-3">
          Выберите город
        </h1>
        <p className="text-gray-400">
          Откройте каталог недвижимости в вашем регионе
        </p>
      </motion.div>

      {/* Cities Grid */}
      <div className="px-6 pb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cities.map((city, index) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CityCard city={city} onClick={handleCitySelect} />
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="px-6 pb-10 text-center"
      >
        <p className="text-gray-500 text-sm">
          Премиальная недвижимость на южном побережье
        </p>
      </motion.div>
    </div>
  );
};

