

import { Header } from './components/header/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { Footer } from './components/footer/Footer';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { CreateBook } from './components/create-book/CreateBook';
import { MyBooks } from './components/my-books/MyBooks';
import { Details } from './components/details/Details';
import { Edit } from './components/edit/Edit';

export const App = () => {
  return (
    <>
    <Header />
    <main className="site__content">
      <Edit />
    </main>
    <Footer />
    </>
  );
}

