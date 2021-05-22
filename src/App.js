import './App.css';
//IMPORT ROUTE and COMPONENTS
import {Route, Switch} from "react-router-dom";
import About from "./pages/about";
import Main from "./pages/main";
import Stocks from "./pages/stocks";
import Nav from "./components/Nav"
import StockCompanies from './pages/stockCompany';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Stock App Text</h1>
      <Switch>
      <Route path = '/about'>
        <About />
      </Route>
      <Route path = '/stockCompanies'>
        <StockCompanies />
      </Route>
      <Route 
      path = '/stocks/:symbol'
      render = {(routerProps) => <Stocks{... routerProps} /> }
      />
      <Route exact path = '/'>
        <Main />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
