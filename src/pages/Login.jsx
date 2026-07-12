import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      setError("Phone number is required to login");
      return;
    }

    if (/^\+\d{12}$/.test(trimmedPhone)) {
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      setError("");
      navigate("/");
    } else {
      setError("Mobile number should start with a + followed by 12 digit");
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <form
        action="#"
        onSubmit={handleLogin}
        className="rounded-lg p-6 shadow-md"
      >
        <h1 className="text-center text-2xl font-bold mb-6">Login</h1>

        <label htmlFor="mobile" className="mb-2 block">
          Enter a mobile number to log in
        </label>
        <input
          type="tel"
          placeholder="+254712345678"
          className="w-full rounded border border-grey-400 px-3 py-2 focus:border-blue-400 focus:outline-none"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setError("");
          }}
        />

        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          className=" cursor-pointer mt-6 w-full rounded bg-blue-400 py-2 font-bold text-white transition hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
