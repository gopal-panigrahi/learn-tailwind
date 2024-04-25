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
      <div className="m-3 flex flex-col space-y-4 rounded-2xl bg-white p-6 shadow-xl md:p-36">
        <div className="text-md flex flex-col justify-end space-y-4 text-center md:flex-row md:space-x-8 md:space-y-0">
          <div className="underline-offset-8 transition-all hover:underline">
            Vector
          </div>
          <div className="underline-offset-8 transition-all hover:underline">
            Illustration
          </div>
          <div className="underline-offset-8 transition-all hover:underline">
            Images
          </div>
          <div className="underline-offset-8 transition-all hover:underline">
            Icons
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-row border-b border-gray-300">
            <input
              type="text"
              className="p-2 outline-none placeholder:font-light"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </button>
          </div>

          <button className="rounded-lg bg-black p-3 text-white shadow-lg hover:bg-white hover:text-black hover:outline hover:outline-1 md:w-32">
            Upload
          </button>
        </div>

        <div className="flex flex-col flex-wrap gap-4 md:flex-row">
          <div className="group relative">
            <img src={image1} alt="" className="w-72 md:w-48" />
            <div className="absolute bottom-0 flex w-full flex-row justify-between bg-black bg-opacity-40 p-2 text-xs text-white opacity-0 transition-all group-hover:opacity-100">
              <div>
                <p>Abstract Painting</p>
                <p>245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image2} alt="" className="w-72 md:w-48" />
            <div className="absolute bottom-0 flex w-full flex-row justify-between bg-black bg-opacity-40 p-2 text-xs text-white opacity-0 transition-all group-hover:opacity-100">
              <div>
                <p>Abstract Painting</p>
                <p>245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image3} alt="" className="w-72 md:w-48" />
            <div className="absolute bottom-0 flex w-full flex-row justify-between bg-black bg-opacity-40 p-2 text-xs text-white opacity-0 transition-all group-hover:opacity-100">
              <div>
                <p>Abstract Painting</p>
                <p>245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image4} alt="" className="w-72 md:w-48" />
            <div className="absolute bottom-0 flex w-full flex-row justify-between bg-black bg-opacity-40 p-2 text-xs text-white opacity-0 transition-all group-hover:opacity-100">
              <div>
                <p>Abstract Painting</p>
                <p>245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image5} alt="" className="w-72 md:w-48" />
            <div className="absolute bottom-0 flex w-full flex-row justify-between bg-black bg-opacity-40 p-2 text-xs text-white opacity-0 transition-all group-hover:opacity-100">
              <div>
                <p>Abstract Painting</p>
                <p>245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>

          <div className="group relative">
            <img src={image6} alt="" className="w-72 md:w-48" />
            <div className="absolute bottom-0 flex w-full flex-row justify-between bg-black bg-opacity-40 p-2 text-xs text-white opacity-0 transition-all group-hover:opacity-100">
              <div>
                <p>Abstract Painting</p>
                <p>245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
