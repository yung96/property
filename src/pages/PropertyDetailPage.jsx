import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackButton } from '../shared/ui/BackButton';
import { Button } from '../shared/ui/Button';
import { ImageGallery } from '../shared/ui/ImageGallery';
import { MOCK_PROPERTIES } from '../shared/constants/mockData';
import { useTelegram } from '../shared/hooks/useTelegram';
import { Header } from '../widgets/Header';

export const PropertyDetailPage = () => {
  const navigate = useNavigate();
  const { cityId, categoryId, propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const { hapticFeedback } = useTelegram();

  useEffect(() => {
    const found = MOCK_PROPERTIES.find((p) => p.id === propertyId);
    setProperty(found);
  }, [propertyId]);

  const handleBack = () => {
    navigate(`/city/${cityId}/category/${categoryId}/properties`);
  };

  const handleCopyLink = () => {
    hapticFeedback('light');
    // Копирование ссылки
    navigator.clipboard.writeText(window.location.href);
    alert('Ссылка скопирована!');
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-dark pb-8">
      <Header />
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-8 pb-4 border-b border-secondary-light"
      >
        <BackButton onClick={handleBack} />
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="relative"
      >
        <ImageGallery images={property.images || [property.image]} title={property.title} />
        
        {/* Year Badge */}
        {property.year && (
          <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg z-10">
            <span className="text-gold text-lg font-semibold">{property.year}</span>
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        {/* Main Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-secondary rounded-2xl p-6 border border-secondary-light mb-6"
        >
          {/* Tag */}
          {property.tag && (
            <p className="text-xs text-gray-500 mb-3">Tag: {property.tag}</p>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-4">
            {property.title}
          </h1>

          {/* Location */}
          {property.location && (
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-gold flex-shrink-0"
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
              <span className="text-gray-400">{property.location}</span>
            </div>
          )}

          {/* Price */}
          <div className="bg-primary-dark rounded-xl p-4 mb-4">
            <p className="text-gray-400 text-sm mb-1">Цена</p>
            <p className="text-3xl font-bold text-gold">{property.price}</p>
          </div>

          {/* Tags */}
          {property.tags && property.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {property.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary-dark px-4 py-2 rounded-lg text-sm text-white border border-secondary-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="border-t border-secondary-light pt-6">
            <h2 className="text-xl font-bold text-white mb-3">Описание</h2>
            <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
              {property.fullDescription || property.description}
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <Button onClick={handleCopyLink} fullWidth variant="outline" haptic="light">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Скопировать ссылку
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-500 text-sm mb-2">Связаться с нами:</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span className="text-sm font-medium">Telegram</span>
            </a>
            <a
              href="https://max.im/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm font-medium">MAX</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

