import { Link } from "react-router-dom";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="adminRoot">
      <div className="adminRoot__left">
        <form action="post" className="adminRoot__right__box">
          <div className="admin__user">
            <label htmlFor="">USERNAME :</label>
            <input type="email" placeholder="xyz@.com" />
          </div>
          <div className="admin__pass">
            <label htmlFor="">PASSWORD :</label>
            <input type="password" placeholder="acb123" />
          </div>
          <button>Sign Up</button>
          <p>
            <a href="/" className="back">
              STUDENT
            </a>
            <a href="#" className="admin_forgot">
              Forgot Password
            </a>
          </p>
        </form>
      </div>
      <div className="adminRoot__right">
        <h1>A D M I N</h1>
        <h2>L O G I N</h2>
      </div>
    </div>
  );
};

export default AdminLogin;
