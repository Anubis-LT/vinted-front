import "./assets/Css/App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Product from "./containers/Product";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
   const [userToken, setUserToken] = useState();
   const setUser = (token) => {
      if (token) {
         Cookies.set("userToken", token, { expires: 7 });
         setUserToken(token);
      } else {
         Cookies.remove("userToken");
         setUserToken(null);
      }
   };

   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   const fetchData = async (params) => {
      // "https://greg-vinted-api.herokuapp.com/offers"  =======> Il manque les images => A FAIRE
      // "https://lereacteur-vinted-api.herokuapp.com/offers"
      let req_Default = "https://lereacteur-vinted-api.herokuapp.com/offers";

      if (params !== undefined) {
         req_Default += params;
      }

      const response = await axios.get(req_Default);

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
            <Header
               userToken={userToken}
               setUser={setUser}
               fetchData={fetchData}
            />
            <Switch>
               <Route path="/offer/:id">
                  <Product data={data} />
               </Route>
               <Route path="/login">
                  <Login setUser={setUser} />
               </Route>
               <Route path="/signup">
                  <Signup setUser={setUser} />
               </Route>
               <Route path="/">
                  <Home data={data} />
               </Route>
            </Switch>
            <Footer />
         </Router>
      </>
   );
}

export default App;
