import { AppRouter } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  const renderContent = () => {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  };

  return <>{renderContent()}</>;
};
