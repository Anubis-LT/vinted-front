import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const fetchData = async () => {
      const response = await axios.get(
         "https://lereacteur-vinted-api.herokuapp.com/offer/" + { id }
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
         <div>
            <Header />
            <div className="container">id : {id}</div>
            <Footer />
         </div>
      </>
   );
};

export default Product;
