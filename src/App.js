import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'

function App() {
  const registrationSummary = document.querySelector('#registration-summary');
  const registerButton = document.querySelector('#register-button');

  
  return (
    <div className="App">
      <Header/>
      <RegistrationForm/>
    </div>
  );
}

export default App;