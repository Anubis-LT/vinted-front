import Hook from "../components/Hook";
import Menu from "../components/Menu";
import Content from "../components/Content";

const Home = ({ data, AdressSite }) => {
   return (
      <div>
         <Menu />
         <Hook />
         <Content data={data} AdressSite={AdressSite} />
      </div>
   );
};

export default Home;
