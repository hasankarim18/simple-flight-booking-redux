const Header = () => {
  return (
    <header id="header">
      <div className="container ">
        <div className="text-3xl text-white">Redux Flight</div>
        <div className="flex items-center">
          <a className="text-white min-w-[50px] font-medium" href="#">
            Home
          </a>
          <button className="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
