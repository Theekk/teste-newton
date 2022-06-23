import './App.css';
import Header from './components/header/Header'
import First from './components/main/first/First'
import About from './components/main/about/About';
import Team from './components/main/team/Team'
import Work from './components/main/work/Work'
import Contact from './components/main/contact/Contact';
import Form from './components/main/form/Form';
import Footer from './components/footer/Footer';

import {useRef} from 'react';

function App() {

  const quemSomosRef = useRef(null)
  const equipeRef = useRef(null)
  const espacoRef = useRef(null)
  const contatoRef = useRef(null)


  return (
  <>
    <Header quemSomosRef={quemSomosRef} equipeRef={equipeRef} espacoRef={espacoRef} contatoRef={contatoRef} />
    <First />
    <About quemSomosRef={quemSomosRef} />
    <Team equipeRef={equipeRef} />
    <Work espacoRef={espacoRef} />
    <Contact contatoRef={contatoRef} />
    <Form />
    <Footer />
  </>
  );
}

export default App;
