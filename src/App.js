import { BrowserRouter as Router, Route } from "react-router-dom";

import EmployeeList from './Pages/EmployeeList';
import Home from './Pages/Home';
import SignIn from "./Pages/SignIn";



function App() {
  return (
    <Router>  
      <Route exact path="login" component={SignIn} />
      <Route exact path="/" component={Home} />
      <Route exact path="/employee" component={EmployeeList} />
    
     
    </Router>
  );

  
  
}

export default App;
