const Navbar = (props) => {
  return (
    <div className="container bg-success">
      <div>Online Shop</div>
      <div>
        <ul>
          <li>Shop</li>
          <li>Blogs</li>
          <li>About</li>
          <li>Orders</li>
        </ul>
        <div>
          <ul>
            <li>Profile</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
