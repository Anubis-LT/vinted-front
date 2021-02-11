import Hook from "../components/Hook";
import Menu from "../components/Menu";
import Content from "../components/Content";

const Home = ({ data }) => {
   return (
      <div>
         <Menu />
         <Hook />
         <Content data={data} />
      </div>
   );
};

export default Home;
