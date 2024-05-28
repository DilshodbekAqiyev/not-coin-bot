import { AppRouter } from "./router";

export const App = () => {
  const renderContent = () => {
    return <AppRouter />;
  };

  return <>{renderContent()}</>;
};
