import { Header } from './components/header/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { Footer } from './components/footer/Footer';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';

export const App = () => {
  return (
    <>
    <Header />
    <main className="site__content">
      <Register />
    </main>
    <Footer />
    </>
  );
}

