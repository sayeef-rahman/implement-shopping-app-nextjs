const Navbar = (props) => {
  return (
    <div className="container d-flex justify-content-between align-items-center bg-dark text-white">
      <div>Online Shop</div>
      <div className="d-flex">
        <ul className="d-flex">
          <li className="nav-list">Shop</li>
          <li className="nav-list">Blogs</li>
          <li className="nav-list">About</li>
          <li className="nav-list">Orders</li>
        </ul>
        <div>
          <ul className="d-flex">
            <li className="nav-list">Profile</li>
            <li className="nav-list">Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
