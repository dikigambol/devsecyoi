import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MethodologySection } from './components/MethodologySection';
import { CurriculumList } from './components/CurriculumList';
import { DashboardView } from './components/DashboardView';
import { Footer } from './components/Footer';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import type { UserProfile } from './components/GoogleAuthModal';

export function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  const handleLoginSuccess = (profile: UserProfile) => {
    setUser(profile);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      {/* Header */}
      <Navbar
        user={user}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'dashboard' && user ? (
          <DashboardView
            user={user}
            onBackToLanding={() => setCurrentView('landing')}
          />
        ) : (
          <>
            <Hero
              user={user}
              onOpenLogin={() => setIsLoginModalOpen(true)}
              onNavigate={(view) => setCurrentView(view)}
            />
            <MethodologySection />
            <CurriculumList />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Google Sign In Modal */}
      <GoogleAuthModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;
