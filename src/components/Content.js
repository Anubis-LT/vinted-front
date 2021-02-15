import { Link } from "react-router-dom";

const Content = ({ data }) => {
   const number = (price) => {
      return price.toFixed(2);
   };

   return (
      <>
         <div className="container content">
            <div className="list_product">
               <div className="products">
                  {data.offers.map((item, index) => (
                     <div className="product">
                        <div>
                           <img
                              className="avatar"
                              alt="avatar"
                              src={item.owner.account.avatar.secure_url}
                           />

                           {item.owner.account.username}
                        </div>
                        <Link to={`/offer/${item._id}`}>
                           {item.product_image ? (
                              <img
                                 className="prodimg"
                                 alt="avatar"
                                 src={item.product_image.secure_url}
                              ></img>
                           ) : (
                              <div>Annonce sans image</div>
                           )}
                        </Link>

                        <div className="descr1">
                           <div>{number(item.product_price)} €</div>
                           <div>
                              {item.product_details[0].MARQUE}
                              {item.product_details[1].TAILLE}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default Content;
