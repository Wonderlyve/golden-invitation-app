
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
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/app" element={<Index />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/edition" element={<Edition />} />
            <Route path="/preview" element={<Preview />} />
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
