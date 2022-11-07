import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { BookContext } from './contexts/BookContext';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence, getAuth } from "firebase/auth";
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from './firebaseConfig';

import { Header } from './components/header/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { Footer } from './components/footer/Footer';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { CreateBook } from './components/create-book/CreateBook';
import { MyBooks } from './components/my-books/MyBooks';
import { Details } from './components/details/Details';
import { Edit } from './components/edit/Edit';
import { useEffect, useState } from 'react';

export const App = () => {
  const auth = getAuth();
  const [books, setBooks] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);

  const navigate = useNavigate();
  const collectionRef = collection(database, 'books');

  useEffect(() => {
    onSnapshot(collectionRef, (data) => {
      setBooks(data.docs.map(item => {
        return { ...item.data(), id: item.id };
      }))
    })
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedUser(user);
    }
  })

  const onLogin = (auth, email, password) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password);
      })
      .catch((err) => {
        alert(err.message);
      });
    navigate('/');
  }
console.log(loggedUser);
  const onRegister = (auth, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        setLoggedUser(response.user);
        navigate('/');
      })
      .catch(err => {
        alert(err.message);
      })
  }

  return (
    <>
      <AuthContext.Provider value={{ loggedUser, onLogin, onRegister, setLoggedUser }}>
        <Header />
        <BookContext.Provider value={{ books }}>
          <main className="site__content">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/edit/:bookId' element={<Edit />} />
              <Route path='/details/:bookId' element={<Details />} />
              <Route path='/create' element={<CreateBook />} />
              <Route path='/mybooks' element={<MyBooks />} />
            </Routes>
          </main>
        </BookContext.Provider>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

