import { Link } from "react-router-dom";

const Content = ({ data }) => {
   return (
      <>
         Liste des produits
         <div className="container content">
            <div className="list_product">
               <div className="products">
                  {data.offers.map((item, index) => (
                     <Link to={`/offer/${item._id}`}>
                        <div className="product">
                           <div>{item.product_name}</div>
                           <div>{item.product_name}</div>
                           <div>{item.product_name}</div>
                           <div>{item.product_price}</div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default Content;
