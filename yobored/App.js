import { Provider as AuthProvider } from "./context/AuthContext";
import AppNavigation from "./navigation/AppNavigation";

export default () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};
