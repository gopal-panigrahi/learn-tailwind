import headphoneImage from "./assets/headphone.png";
import weight from "./assets/weight.png";
import wishlist from "./assets/heart.png";

function ProductModal() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="m-3 flex flex-col space-y-10 rounded-2xl bg-white p-6 shadow-2xl md:m-0 md:flex-row md:space-x-10 md:space-y-0 md:p-16">
        <div>
          <img
            src={headphoneImage}
            alt="headphone"
            className="mx-auto w-60 duration-200 hover:scale-105"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
            <div>
              <span className="rounded-full bg-black px-3 py-1 text-sm text-white">
                Free Shipping
              </span>
            </div>
            <h1 className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </h1>
            <div className="mb-4 flex flex-col space-y-3">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">$599</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>

            <div className="group">
              <button className="w-full rounded-lg border-b-8 border-b-blue-700 bg-blue-700 text-white transition-all duration-150 group-hover:border-b-0 group-hover:border-t-8 group-hover:border-t-blue-700 group-hover:bg-blue-700 group-hover:shadow-lg">
                <div className="rounded-lg bg-blue-500 px-8 py-4 duration-150 group-hover:bg-blue-700">
                  Add to cart
                </div>
              </button>
            </div>

            <div className="group flex items-center space-x-3">
              <div className="group h-3 w-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 px-5 py-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg">
                <img src={weight} alt="add to cart" className="w-8" />
                <span>Add to cart</span>
              </button>
              <button className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 px-5 py-3 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg">
                <img src={wishlist} alt="add to wishlist" className="w-8" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
