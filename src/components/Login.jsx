import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const navigate = useNavigate();
  const {singInUser,singInWithGoogle} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    singInUser(email, password)
    .then(result =>{
      console.log(result.user);
      e.target.reset();
      navigate('/')
    })
    .catch(error => {
      console.error(error);
    })
  };
  const handleGoogleSignin =() =>{
    singInWithGoogle()
    .then(result =>{
      console.log(result.user);
      navigate('/')
    })
    .catch(error =>{
      console.error(error.message);
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            New to Auth integration? Please
            <Link to="/register">
              <button className="btn btn-active btn-link">Register</button>
            </Link>
          </p>
          <p>
            <button onClick={handleGoogleSignin} className="btn btn-ghost">Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
