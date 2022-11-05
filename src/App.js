import { Header } from './components/header/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { Footer } from './components/footer/Footer';

export const App = () => {
  return (
    <>
    <Header />
    <main className="site__content">
      <Dashboard />
    </main>
    <Footer />
    </>
  );
}

