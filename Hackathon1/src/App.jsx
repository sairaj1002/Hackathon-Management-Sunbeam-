import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";

import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />

        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
              fontSize: "14px",
            },
          }}
        />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;