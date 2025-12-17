import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PropertyCard } from '../shared/ui/PropertyCard';
import { BackButton } from '../shared/ui/BackButton';
import { CITIES } from '../shared/constants/cities';
import { MOCK_PROPERTIES } from '../shared/constants/mockData';
import { Header } from '../widgets/Header';

export const PropertiesListPage = () => {
  const navigate = useNavigate();
  const { cityId, categoryId } = useParams();
  const [properties, setProperties] = useState([]);

  // Получаем город и его категории
  const city = Object.values(CITIES).find((c) => c.id === cityId);
  const category = city?.categories.find((c) => c.id === categoryId);

  useEffect(() => {
    // Фильтрация объектов по городу и категории
    const filtered = MOCK_PROPERTIES.filter(
      (prop) => prop.city === cityId && prop.category === categoryId
    );
    setProperties(filtered);
  }, [cityId, categoryId]);

  const handlePropertySelect = (property) => {
    navigate(`/city/${cityId}/category/${categoryId}/property/${property.id}`);
  };

  const handleBack = () => {
    navigate(`/city/${cityId}/categories`);
  };

  return (
    <div className="min-h-screen bg-primary-dark pb-8">
      <Header />
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-8 pb-6 border-b border-secondary-light"
      >
        <BackButton onClick={handleBack} />
        
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-white mb-1">
            {category?.title}
          </h1>
          {category?.priceRange && (
            <p className="text-gold text-sm">
              {category.priceRange}
            </p>
          )}
          <p className="text-gray-400 text-sm mt-2">
            Найдено объектов: {properties.length}
          </p>
        </div>
      </motion.div>

      {/* Properties Grid */}
      {properties.length > 0 ? (
        <div className="px-6 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={handlePropertySelect}
              delay={index * 0.05}
            />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-20 text-center"
        >
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Объекты скоро появятся
            </h3>
            <p className="text-gray-400">
              В данной категории пока нет доступных объектов. Попробуйте другую категорию или вернитесь позже.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

