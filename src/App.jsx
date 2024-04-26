
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';

import { refreshThunk } from './redux/auth/operations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { selectIsRefreshing } from './redux/auth/slice';
import Loader from './components/Loader';
import Layout from './components/Layout';

const Contacts = lazy(() => import('./pages/Contacts'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))



const App = () => {
  const dispatch = useDispatch()
const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])
  return isRefreshing ? (<Loader/>) : (
    <Suspense fallback={null}>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contacts' element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          } />
          
        </Route>
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
          <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
