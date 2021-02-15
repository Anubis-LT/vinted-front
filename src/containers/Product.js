import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = ({ AdressSite }) => {
   const { id } = useParams();
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const fetchData = async () => {
      const response = await axios.get(`${AdressSite}/offer/${id}`);
      setData(response.data);
      setIsLoading(false);
   };

   useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return isLoading ? (
      <span>En cours de chargement... </span>
   ) : (
      <>
         <div>
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
                           <div className="pred_desc3">
                              {data.product_price} €
                           </div>
                           <div className="pred_desc4">
                              <div>
                                 <p>MARQUE</p>
                                 <p>TAILLE</p>
                                 <p>ÉTAT</p>
                                 <p>COULEUR</p>
                                 <p>EMPLACEMENT</p>
                              </div>
                              <div>
                                 {data.product_details.map((item, index) => (
                                    <>
                                       <p>{item.MARQUE}</p>
                                       <p>{item.TAILLE}</p>
                                       <p>{item.ÉTAT}</p>
                                       <p>{item.COULEUR}</p>
                                       <p>{item.EMPLACEMENT}</p>
                                    </>
                                 ))}
                              </div>
                           </div>
                           <div className="sep"></div>
                           {data.product_name}
                           <div>{data.product_description}</div>
                           <div className="pred_descAvatar">
                              <img
                                 className="avatar avatar1"
                                 alt="avatar"
                                 src={data.owner.account.avatar.secure_url}
                              />
                              {data.owner.account.username}
                           </div>

                           <div className="pred_desc5">
                              <button>Acheter</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Product;
