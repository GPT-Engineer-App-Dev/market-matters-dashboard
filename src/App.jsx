import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Globe, Briefcase, LineChart, MessageSquare, Coffee, MoreHorizontal, Search, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  { title: "Home", to: "/", icon: <Home className="h-4 w-4" /> },
  { title: "World", to: "/world", icon: <Globe className="h-4 w-4" /> },
  { title: "Business", to: "/business", icon: <Briefcase className="h-4 w-4" /> },
  { title: "Markets", to: "/markets", icon: <LineChart className="h-4 w-4" /> },
  { title: "Opinion", to: "/opinion", icon: <MessageSquare className="h-4 w-4" /> },
  { title: "Life & Arts", to: "/life-arts", icon: <Coffee className="h-4 w-4" /> },
  { title: "More", to: "/more", icon: <MoreHorizontal className="h-4 w-4" /> },
];

export const rightNavItems = [
  { title: "Search", icon: <Search className="h-4 w-4" /> },
  { title: "Profile", icon: <User className="h-4 w-4" /> },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;