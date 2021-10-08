import { BrowserRouter as Router, Route } from "react-router-dom";

import EmployeeList from './Pages/EmployeeList';
import Home from './Pages/Home';
import Login from "./Pages/Login";
import {AuthProvider} from "./utils/AuthProvider"


function App() {
  return (
    <AuthProvider>
    <Router>  
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/employee" component={EmployeeList} />
    
     
    </Router>
    </AuthProvider>
  );

  
  
}

export default App;
