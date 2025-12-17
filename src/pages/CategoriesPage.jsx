import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryCard } from '../shared/ui/CategoryCard';
import { BackButton } from '../shared/ui/BackButton';
import { CATEGORIES, CITIES } from '../shared/constants/cities';
import { Header } from '../widgets/Header';

export const CategoriesPage = () => {
  const navigate = useNavigate();
  const { cityId } = useParams();

  const city = Object.values(CITIES).find((c) => c.id === cityId);

  // Получаем категории для конкретного города
  const cityCategories = city?.categories || CATEGORIES;

  // Сортируем категории только для городов с ценовыми диапазонами (Сочи)
  // Для Крыма используем порядок как есть
  const sortedCategories = cityCategories[0]?.minPrice !== undefined 
    ? [...cityCategories].sort((a, b) => {
        // Сначала группируем по типу
        if (a.type !== b.type) {
          return a.type === 'houses' ? -1 : 1;
        }
        // Внутри группы сортируем по минимальной цене
        return a.minPrice - b.minPrice;
      })
    : cityCategories;

  const handleCategorySelect = (category) => {
    navigate(`/city/${cityId}/category/${category.id}/properties`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-primary-dark">
      <Header />
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-8 pb-6 border-b border-secondary-light"
      >
        <BackButton onClick={handleBack} />
        
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            {city?.name}
          </h1>
          <p className="text-gray-400">
            Выберите категорию недвижимости
          </p>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <div className="px-6 py-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {sortedCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={handleCategorySelect}
            delay={index * 0.05}
          />
        ))}
      </div>
    </div>
  );
};

