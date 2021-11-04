import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//Routes
import Home from './Views/Home';
import AddCustomers from './Views/AddCustomers';
import ShowCustomers from './Views/ShowCustomers.js';


function App() {
  
  return (
    <>
      <div className="containerBody">
        <BrowserRouter> 
          <Navbar />
          <Switch>
            <Route path="/Home" exact component={Home} />
            <Route path="/addcustomers" exact component={AddCustomers} />
            <Route path="/showcustomers" exact component={ShowCustomers} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

