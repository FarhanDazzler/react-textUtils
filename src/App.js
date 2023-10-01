
import './App.css';
import Navbar from './Navbar';

import TextForm from './TextForm';


function App() {
  return (
    <>

    <Navbar title="Textutils" aboutText="About Textutils" />
    <div className="container">
    <TextForm/>

    </div>
    </>
  );
}

export default App;
