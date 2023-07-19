import { FormComponent } from './FormComponent';
import { Content } from './Content';
import logo from './logo.svg';
import './App.css';
import './fonts.css';

function App() {
  return(
    <div className="signup-form-component container">
      <Content />
      <FormComponent />
    </div>
  );
}

export default App;
