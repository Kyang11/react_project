import { Login } from "@mui/icons-material";
import RegisterForm from "./forms/RegisterForm";
import LoginForm from "./forms/LoginForm";
import NavBar from './components/NavBar'




function App() {
  return (
    


      <NavBar>
      {/* //   <Button color="success" onClick={handleAPITest}>Test API Call</Button>
      //   <Error style={{backgroundColor:'cornflowerblue'}}>This is an error Message</Error>
      //   <RegisterForm */}
      <RegisterForm/>
      <LoginForm/>
      </NavBar>
      
  );
}

export default App;
