import { useEffect } from 'react';

export const TelegramProvider = ({ children }) => {
  useEffect(() => {
    // Инициализация Telegram Web App
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      
      // Настройка темы
      tg.setHeaderColor('#0f0f0f');
      tg.setBackgroundColor('#0f0f0f');
      
      // Отключение возможности закрытия приложения свайпом вниз
      tg.enableClosingConfirmation();
      
      // Отключение вертикальных свайпов для предотвращения закрытия приложения
      if (tg.disableVerticalSwipes) {
        tg.disableVerticalSwipes();
      }
      
      // Альтернативный метод для старых версий API
      if (tg.isVerticalSwipesEnabled === true && tg.setVerticalSwipesEnabled) {
        tg.setVerticalSwipesEnabled(false);
      }
    }
  }, []);

  return <>{children}</>;
};

