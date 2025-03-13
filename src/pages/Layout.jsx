import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="flex gap-4 justify-center bg-gray-800 text-gray-100">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/vending" className="hover:text-gray-400">Vending</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
