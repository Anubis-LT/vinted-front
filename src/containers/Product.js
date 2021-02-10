import { useParams } from "react-router-dom";
const Product = (props) => {
   const { id } = useParams();
   return <div>id : {id}</div>;
};

export default Product;
