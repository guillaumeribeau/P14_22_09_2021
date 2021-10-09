import { BrowserRouter as Router, Route } from "react-router-dom";

import EmployeeList from "./Pages/EmployeeList";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { AuthProvider } from "./utils/AuthProvider";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/employee" component={EmployeeList} />
      </Router>
    </AuthProvider>
  );
}

export default App;
