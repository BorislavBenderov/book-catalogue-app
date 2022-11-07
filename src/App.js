import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';
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
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState([]);
  const collectionRef = collection(database, 'books');

  useEffect(() => {
    getDocs(collectionRef)
    .then(response => {
      setBooks(response.docs.map(item => {
        return {...item.data(), id: item.id};
      }))
    })
  }, [])

  const onLogin = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        setLoggedUser(response.user);
        navigate('/');
      })
      .catch(err => {
        alert(err.message);
      })
  }

  const onRegister = (auth, email, password) => {
    createUserWithEmailAndPassword (auth, email, password)
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
      <AuthContext.Provider value={{ loggedUser, onLogin, onRegister }}>
        <Header />
        <main className="site__content">
          <Routes>
            <Route path='/' element={<Dashboard books={books} />} />
            <Route path='/login' element={<Login  />} />
            <Route path='/register' element={<Register />} />
            <Route path='/edit/:bookId' element={<Edit />} />
            <Route path='/details/:bookId' element={<Details />} />
            <Route path='/create' element={<CreateBook />} />
            <Route path='/mybooks' element={<MyBooks />} />
          </Routes>
        </main>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

