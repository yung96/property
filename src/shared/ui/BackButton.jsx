import { useEffect } from 'react';
import { useTelegram } from '../hooks/useTelegram';

export const BackButton = ({ onClick }) => {
  const { tg, hapticFeedback, showBackButton, hideBackButton } = useTelegram();

  useEffect(() => {
    // Если есть Telegram WebApp, используем встроенную кнопку
    if (tg?.BackButton) {
      showBackButton(onClick);
      
      return () => {
        hideBackButton();
      };
    }
  }, [tg, onClick, showBackButton, hideBackButton]);

  // Если есть Telegram, не показываем нашу кнопку
  if (tg?.BackButton) {
    return null;
  }

  // Показываем кнопку только если нет Telegram
  const handleClick = () => {
    hapticFeedback('light');
    onClick?.();
  };

  return (
    <button
      className="flex items-center gap-2 text-gold"
      onClick={handleClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="font-medium">Назад</span>
    </button>
  );
};

