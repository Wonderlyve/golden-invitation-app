
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import LandingPage from "./pages/LandingPage";
import StartPage from "./pages/StartPage";
import Index from "./pages/Index";
import Templates from "./pages/Templates";
import Edition from "./pages/Edition";
import Preview from "./pages/Preview";
import GuestInvitation from "./pages/GuestInvitation";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/start" element={<ProtectedRoute><StartPage /></ProtectedRoute>} />
            <Route path="/app" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/templates" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
            <Route path="/edition" element={<ProtectedRoute><Edition /></ProtectedRoute>} />
            <Route path="/preview" element={<ProtectedRoute><Preview /></ProtectedRoute>} />
            <Route path="/invitation" element={<GuestInvitation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <PWAInstallPrompt />
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
