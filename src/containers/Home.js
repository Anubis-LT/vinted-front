import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = () => {
   let id = "toto";
   return (
      <div>
         <Header />
         <link to={"/Product/${id}"}>Product</link>
         <Content />

         <Footer />
      </div>
   );
};

export default Home;
