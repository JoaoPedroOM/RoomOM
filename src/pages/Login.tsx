import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useClerk } from "@clerk/clerk-react";

const Login = () => {
  const { openSignIn } = useClerk();

  const handleGoogleLogin = () => {
    openSignIn({ 
      redirectUrl: window.location.origin + '/dashboard'
    });
    
  };

  const handleGitHubLogin = () => {
    openSignIn({
      redirectUrl: window.location.origin + '/dashboard'
     });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#101010] text-white relative overflow-hidden">
      <div className="relative w-[400px] h-[400px] flex flex-col items-center justify-center bg-black rounded-xl p-6 border-neutral-700 z-10">
        
        <div className="text-center w-full mb-6">
          <h1 className="font-font text-lg font-main text-center">
            Entre com sua conta
          </h1>
        </div>

        <div className="relative mt-6 w-full">
          <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-2 text-[#737373] bg-black">
            🎥
          </div>
          <div className="border-b border-neutral-300"></div>
        </div>

        <div className="mt-6 flex w-full flex-col gap-4 font-main">
          <button
            onClick={handleGoogleLogin}
            className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white"
          >
            <FaGoogle size={23} /> <div>Continue com o Google</div>
          </button>

          <button
            onClick={handleGitHubLogin}
            className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white"
          >
            <FaGithub size={23} /> <div>Continue com o GitHub</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
