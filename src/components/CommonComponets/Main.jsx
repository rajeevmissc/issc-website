import { Outlet } from 'react-router-dom';
import Header from './Header'; 
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <Header />
      </header>

      {/* Main Content - Takes Full Space */}
      <div className="flex-1 mt-[60px]"> 
        <Outlet /> {/* Render nested routes here */}
      </div>

      {/* Footer Always at Bottom */}
      <footer className="w-full shadow-md w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
