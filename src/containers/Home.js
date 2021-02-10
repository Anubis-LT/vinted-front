import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = ({ data }) => {
   return (
      <div>
         <Header />
         <Content data={data} />
         <Footer />
      </div>
   );
};

export default Home;
