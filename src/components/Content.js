const Content = ({ data }) => {
   return (
      <div className="container content">
         {data.offers[0].product_details[0]}
         {
            (data.offers.map = (item, index) => (
               <div>
                  <p>item[index]</p>
               </div>
            ))
         }
         ) Liste des produits
      </div>
   );
};

export default Content;
