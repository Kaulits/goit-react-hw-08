
import ContactForm from './ContactForm';
import Filter from './Filter';
import { ContactList } from './ContactList';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../../redux/contacts/slice';

const ContactFormBase = () => {
  
    const error = useSelector(selectIsError)
    const loading = useSelector(selectIsLoading)
  return (
    <>



      <ContactForm />
      <Filter />
      {loading && <h1>LOADING</h1>}
     {!error ?  <ContactList /> : <h1>OPS</h1>}
    </>
  );
};

export default ContactFormBase;