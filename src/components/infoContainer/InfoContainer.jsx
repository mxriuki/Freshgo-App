import fast from "../assets/fastfood.jpg";
import drink from "../assets/drink.jpg";

function InfoContainer() {

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 text-center md:text-left relative">
        <img src={fast} className="w-full" alt="Fast Food" />
        <div className="absolute inset-0 p-4 bg-black bg-opacity-30 text-white">
          <div className="flex flex-col justify-start items-end space-y-2">
            <label className="font-bold text-4xl text-right md:text-left">Fast Food <br /> Recipes</label>
            <p className="md:text-xl md:w-[25rem]">Fresh, nourishing and always delicious. Check out our favoriterecipes for a fruity revival.</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">View Recipes</button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left relative">
        <img src={drink} className="w-full" alt="Our Drinks" />
        <div className="absolute inset-0  p-4 bg-black bg-opacity-30 text-white">
          <div className="flex flex-col items-end space-y-2">
            <label className="text-4xl font-bold text-right md:text-left">
              Our Drinks
            </label>
            <p className="md:text-xl">
              To create the perfect juice, nature does all the work.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              View Drinks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
