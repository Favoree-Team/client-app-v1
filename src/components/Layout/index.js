import Navbar from "../../parts/Navbar";
import Footer from "../../parts/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;

