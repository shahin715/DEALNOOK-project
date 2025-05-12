// src/pages/auth/LoginPage.jsx
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log("User logged in with:", credentials);
    // API logic goes here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm title="Welcome Back!" onSubmit={handleLogin} buttonLabel="Sign In" />
    </div>
  );
};

export default LoginPage;

