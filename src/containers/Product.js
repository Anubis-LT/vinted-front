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
         "https://lereacteur-vinted-api.herokuapp.com/offer/" + id
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
            <div className="pred_desc_fond">
               <div className="container">
                  <div className="product_detail">
                     <div className="pred_desc1">
                        <div>
                           <img
                              className="img_prod_descr"
                              src={data.product_image.secure_url}
                              alt="produit"
                           />
                        </div>

                        <div className="pred_desc2">
                           {data.product_price} €
                           {data.product_details.map((item, index) => (
                              <>
                                 <div>{item.MARQUE}</div>
                                 <div>{item.TAILLE}</div>
                                 <div> {item.ÉTAT}</div>
                                 <div>{item.MARQUE}</div>
                                 <div>{item.EMPLACEMENT}</div>
                              </>
                           ))}
                           <button>Acheter</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      </>
   );
};

export default Product;
