import "./assets/Css/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Product from "./containers/Product";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const fetchData = async () => {
      // "https://greg-vinted-api.herokuapp.com/offers"  =======> Il manque les images => A FAIRE
      const response = await axios.get(
         "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
   };
   useEffect(() => {
      fetchData();
   }, []);
   return isLoading ? (
      <span>En cours de chargement... </span>
   ) : (
      <>
         <Router>
            <Switch>
               <Route path="/product/:id">
                  <Product />
               </Route>
               <Route path="/">
                  <Home data={data} />
               </Route>
            </Switch>
         </Router>
      </>
   );
}

export default App;
