import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import bookmark from "./assets/bookmark.svg";

function ImageGallery() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cyan-50">
      {/* Card */}
      <div className="m-3 space-y-10 rounded-3xl bg-white p-6 shadow-2xl md:p-40">
        {/* Menu */}
        <div className="flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-x-8 md:space-y-0">
          {/* MenuItem */}
          <div className="group">
            <a href="#">Vector</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-200 group-hover:opacity-100" />
          </div>
          <div className="group">
            <a href="#">Illustration</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-200 group-hover:opacity-100" />
          </div>
          <div className="group">
            <a href="#">Images</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-200 group-hover:opacity-100" />
          </div>
          <div className="group">
            <a href="#">Icons</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-200 group-hover:opacity-100" />
          </div>
        </div>

        <div className="flex flex-col space-y-5 md:flex-row md:justify-between md:space-y-0">
          <div className="flex justify-between border-b">
            <input
              type="text"
              className="ml-6 border-none placeholder:font-thin focus:outline-none md:w-80"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </button>
          </div>

          <button className="rounded-md border border-black bg-black px-14 py-3 text-lg font-normal text-white shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>

        {/* Gallery */}
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="group relative">
            <img src={image1} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image2} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image3} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image4} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image5} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image6} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
              <div className="flex w-full justify-between">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
