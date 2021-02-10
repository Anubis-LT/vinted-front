const Content = ({ data }) => {
   //{data.offers[0].product_details[0]}
   return (
      <div className="container content">
         Liste des produits
         {
            (data.offers.map = (item, index) => (
               <div>
                  <p>item[index]</p>
               </div>
            ))
         }
      </div>
   );
};

export default Content;
