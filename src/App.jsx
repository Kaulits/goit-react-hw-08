import React from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import { ContactList } from './components/ContactList';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from './redux/contactsSlice';

const App = () => {
  
    const error = useSelector(selectIsError)
    const loading = useSelector(selectIsLoading)
  return (
    <div>
      <ContactForm />
      <Filter />
      {loading && <h1>LOADING</h1>}
     {!error ?  <ContactList /> : <h1>OPS</h1>}
    </div>
  );
};

export default App;