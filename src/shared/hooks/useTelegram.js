import { useEffect, useState } from 'react';

export const useTelegram = () => {
  const [tg, setTg] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp;
      telegram.ready();
      telegram.expand();
      
      setTg(telegram);
      setUser(telegram.initDataUnsafe?.user);
      
      // Установка цветовой схемы
      telegram.setHeaderColor('#0f0f0f');
      telegram.setBackgroundColor('#0f0f0f');
    }
  }, []);

  const hapticFeedback = (type = 'light') => {
    if (tg?.HapticFeedback) {
      switch (type) {
        case 'light':
          tg.HapticFeedback.impactOccurred('light');
          break;
        case 'medium':
          tg.HapticFeedback.impactOccurred('medium');
          break;
        case 'heavy':
          tg.HapticFeedback.impactOccurred('heavy');
          break;
        case 'success':
          tg.HapticFeedback.notificationOccurred('success');
          break;
        case 'error':
          tg.HapticFeedback.notificationOccurred('error');
          break;
        default:
          tg.HapticFeedback.impactOccurred('light');
      }
    }
  };

  const showMainButton = (text, onClick) => {
    if (tg?.MainButton) {
      tg.MainButton.setText(text);
      tg.MainButton.show();
      tg.MainButton.onClick(onClick);
    }
  };

  const hideMainButton = () => {
    if (tg?.MainButton) {
      tg.MainButton.hide();
    }
  };

  const showBackButton = (onClick) => {
    if (tg?.BackButton) {
      tg.BackButton.show();
      tg.BackButton.onClick(onClick);
    }
  };

  const hideBackButton = () => {
    if (tg?.BackButton) {
      tg.BackButton.hide();
    }
  };

  return {
    tg,
    user,
    hapticFeedback,
    showMainButton,
    hideMainButton,
    showBackButton,
    hideBackButton,
  };
};

