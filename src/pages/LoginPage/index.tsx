import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InputComponent from "../../component/InputComponent";
import LoginImg from "../../assets/img-01.png"

type LoginPageProps = {
  onLogin: () => void;
};

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formData.email === "test@example.com" &&
      formData.password === "admin123"
    ) {
      // localStorage.setItem("email", formData.email);
      // localStorage.setItem("password", formData.password);
      onLogin();
      navigate("/dashboard");
      alert("Login successful!");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-center items-center h-screen p-3 bg-gradient-to-br from-[#00000091] to-[#00000091]">
        <div className="rounded-2xl mx-auto space-y-5 p-5 bg-white">
          <div className="flex justify-center items-center p-5 text-center py-10">
            <div className="hidden md:block">
              <img
                src={LoginImg}
                alt="Login"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold mb-4">Member Login</h1>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <div>
                  <InputComponent
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="test@example.com"
                  />
                </div>

                <div>
                  <InputComponent
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="admin123"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#00000091] text-white px-4 py-2 border shadow-xl cursor-pointer rounded-full"
                >
                  Login
                </button>
              </form>

              <div>
                <Link to="/register" className="text-blue-500">
                  Create your Account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
