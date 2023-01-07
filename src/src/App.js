import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Pages/Header';
import Cardpage from '../src/Components/Pages/Cardpage';
import Imgcard from './Components/Pages/Imgcard';
import { FormPage } from './Components/Pages/FormPage';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div>
      <Header />
      <Cardpage/>
      <Imgcard/> 
      <FormPage/>
      <Footer/>
    </div>
  );
}

export default App;
