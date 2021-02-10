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
                              src={item.owner.account.avatar.secure_url}
                           />
                           {item.owner.account.username}
                        </div>
                        <Link to={`/offer/${item._id}`}>
                           <img
                              className="prodimg"
                              src={item.product_pictures[0].secure_url}
                           ></img>
                        </Link>
                        <div className="descr1">
                           <div>{number(item.product_price)} €</div>
                           <div>
                              {item.product_details[0].MARQUE}{" "}
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
