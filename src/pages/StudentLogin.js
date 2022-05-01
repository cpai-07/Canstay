import { Link } from "react-router-dom";
import "../styles/StudentLogin.css";

<style>
  h1:@import
  url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
</style>;

function StudentLogin() {
  return (
    <div className="loginRoot">
      <div className="loginRoot__left">
        <h1>S T U D E N T </h1>
        <h1>L O G I N</h1>
      </div>
      <div className="loginRoot__right">
        <form action="post" className="loginRoot__right__box">
          <div className="login__user">
            <label htmlFor="">USERNAME : </label>
            <input type="email" placeholder=".xyz@gamil.com" />
          </div>
          <div className="login__pass">
            <label htmlFor="">PASSWORD : </label>
            <input type="password" placeholder=".acb123" />
          </div>
          <button>LOGIN IN</button>
          <p>
            <a href="AdminLogin" className="back">
              ADMIN
            </a>
            <a href="#" className="student_forgot">
              Forgot Password
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;
