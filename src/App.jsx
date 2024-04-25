
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import  Home from './pages/Home'
import  Contacts from './pages/Contacts'
import  NotFound from './pages/NotFound'

const App = () => {
  
 
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
</Routes>
      
    </>
  );
};




export default App;