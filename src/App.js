import "./assets/Css/App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Publish from "./containers/Publish";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
   // Greg Prod "https://greg-vinted-api.herokuapp.com"
   // local "http://localhost:3001"

   const AdressSite = "https://greg-vinted-api.herokuapp.com";
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
      let req_Default = `${AdressSite}/offers`;

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
                  <Product data={data} AdressSite={AdressSite} />
               </Route>
               <Route path="/login">
                  <Login setUser={setUser} AdressSite={AdressSite} />
               </Route>
               <Route path="/signup">
                  <Signup setUser={setUser} AdressSite={AdressSite} />
               </Route>
               <Route path="/publish">
                  <Publish token={userToken} AdressSite={AdressSite} />
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
