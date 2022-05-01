import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      {/* Navbar */}
      <nav class="navbar">
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="heading">Canstay</li>
        </ul>
      </nav>
      {/* Heading */}
      <div className="head">
        <h1>Welcome To Canstay</h1>
        <span>
          <h3>Hostel Management system</h3>
        </span>
      </div>
    </div>
  );
};

export default Home;
