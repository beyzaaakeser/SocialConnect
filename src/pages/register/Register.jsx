import './register.css';

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialConect</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialConect.
          </span>
        </div>
        <div className="loginRigth">
          <div className="loginBox">
            <input
              type="text"
              placeholder="Username"
              className="loginInput"
            />
            <input
              type="Email"
              placeholder="email@exemple.com"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="enter password"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="password again"
              className="loginInput"
            />
            <button className="loginButton">Sing Up</button> 
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
