import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import bg from "./assets/image.jpg";

function LoginModal() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-rose-50">
      {/* Card */}
      <div className="relative flex rounded-lg bg-white shadow-xl md:flex-row">
        <div className="flex flex-col space-y-4 p-12">
          <h1 className="text-4xl font-bold">Log In</h1>
          <div className="text-sm font-light text-gray-500">
            Log in to your account to upload or download pictures, videos or
            music.
          </div>
          <input
            type="text"
            placeholder="Enter your email address"
            className="rounded-lg border border-gray-300 p-5 placeholder:text-gray-400"
          />

          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="text-center font-light text-cyan-700">
              Forgot Password
            </div>
            <button className="flex flex-row items-center justify-center gap-3 rounded-md bg-cyan-700 p-5 text-white">
              <div className="text-lg">Next</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <line x1="13" y1="18" x2="19" y2="12"></line>
                <line x1="13" y1="6" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          <div className="border-b border-gray-300 pt-6"></div>

          <div className="text-center text-sm text-gray-500">
            or log in with
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex w-full items-center justify-center gap-4 rounded-md border border-gray-300 p-3 font-light hover:-translate-y-1 hover:shadow-lg">
              <img src={facebook} alt="" className="w-9" />
              Facebook
            </button>
            <button className="flex w-full items-center justify-center gap-4 rounded-md border border-gray-300 p-3 font-light hover:-translate-y-1 hover:shadow-lg">
              <img src={google} alt="" className="w-9" />
              Google
            </button>
          </div>
        </div>

        <img src={bg} alt="" className="hidden w-72 md:block" />
        <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-black hover:-translate-y-1 md:bg-white">
          <p>X</p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
