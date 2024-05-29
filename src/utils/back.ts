declare global {
  interface Window {
    Telegram: {
      WebApp: {
        BackButton: {
          isVisible: boolean;
          show: () => void;
          hide: () => void;
          onClick: (callback: () => void) => void;
          offClick: (callback: () => void) => void;
        };
      };
    };
  }
}

export const initializeBackButton = (onBackClick: () => void) => {
  const { Telegram } = window;

  if (Telegram?.WebApp) {
    const backButton = Telegram.WebApp.BackButton;

    backButton.show();
    backButton.onClick(onBackClick);

    return () => {
      backButton.offClick(onBackClick);
      backButton.hide();
    };
  }

  return () => {};
};
