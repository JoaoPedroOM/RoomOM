import { Link } from "react-router-dom"; 

interface ButtonLoginProps {
    children: React.ReactNode,
    redirect: string
}

const ButtonLogin = ({children, redirect} : ButtonLoginProps) => {
  return (
    <div className="relative group">
      <div className="relative lg:w-[130px] w-[80px] h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

        <Link to={redirect} className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
          <button
            name="text"
            className="input font-main font-semibold lg:text-base text-[12px] h-full w-full px-3 py-3 rounded-xl bg-black"
          >
            {children}
          </button>
        </Link>
        <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] blur-[30px]"></div>
      </div>
    </div>
  );
};

export default ButtonLogin;
