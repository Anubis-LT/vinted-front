import "./assets/Css/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Product from "./containers/Product";

function App() {
   return (
      <>
         <Router>
            <Switch>
               <Route path="/">
                  <Home />
               </Route>
               <Route path="/Product/:id">
                  <Product />
               </Route>
            </Switch>
         </Router>
      </>
   );
}

export default App;
