import { Footer, Header } from "../components";
import passwordResetPhoto from "../assets/password-reset.jpg";
import { Link } from "react-router-dom";

export const ResetPasswordPage = () => {
  return (
    <>
      <Header />
      <div className="flex-col bg-[#96cef3] pb-20">
        <h1 className="uppercase text-[#0F2A70] text-6xl text-center font-bold pt-16 pb-32">
          alarmbill
        </h1>
        <div className="flex justify-center items-center">
          <div className="bg-[#AAA9F2] py-10 px-10 rounded-xl">
            <input
              type="text"
              name=""
              id=""
              placeholder="e-mail:"
              className="mb-5 block bg-transparent placeholder-black border-b-2 border-black w-full h-10"
            />
            <div className="bg-[#3A3A3A] px-8 py-2 mb-5 text-white text-center rounded-3xl cursor-pointer">
              <Link to={"/reset-password-success"} className="">
                Recuperar contraseña
              </Link>
            </div>
            <p>
              ¿No tienes una cuenta?{" "}
              <Link to={"/"} className="underline font-bold">
                Registrarse
              </Link>
            </p>
          </div>
          <div className="ml-80 mt-5">
            <img src={passwordResetPhoto} alt="photo" className="w-96 h-auto" />
          </div>
        </div>

        <p className="text-center mt-40 ">
          Paga tus cuentas a tiempo, sin estres y sin filas!
        </p>
      </div>
      <Footer />
    </>
  );
};
