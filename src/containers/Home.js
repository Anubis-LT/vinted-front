import Header from "../components/Header";
import Hook from "../components/Hook";
import Menu from "../components/Menu";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = ({ data }) => {
   return (
      <div>
         <Header />
         <Menu />
         <Hook />
         <Content data={data} />
         <Footer />
      </div>
   );
};

export default Home;
