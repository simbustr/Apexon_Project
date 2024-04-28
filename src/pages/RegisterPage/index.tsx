import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen p-3 bg-gradient-to-br from-[#00000091] to-[#00000091]">
      <div className="rounded-2xl mx-auto space-y-5 p-5 bg-white">
        <div className="flex justify-center items-center p-5 text-center py-10">
          <div>
            <img
              src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
              alt="Login"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold mb-4">Member Registration</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="px-3 py-2 border border-gray-400 outline-none rounded-full"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="px-3 py-2 border border-gray-400 outline-none rounded-full"
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="px-3 py-2 border border-gray-400 outline-none rounded-full"
              />
              <button
                type="submit"
                className="bg-[#00000091] text-white px-4 py-2 border shadow-xl cursor-pointer rounded-full"
              >
                Register
              </button>
            </form>
            <div className="cursor-pointer">
              <Link to="/" className="cursor-pointer text-blue-500">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
