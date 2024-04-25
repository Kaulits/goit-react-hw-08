
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/operations';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          
        </Route>
        <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
