import { NavLink } from 'react-router-dom/dist';

export default function HomePage() {
  return (
    <>
      <div className="bg-hero-pattern h-screen bg-no-repeat bg-cover flex items-center flex-col pt-[50px] ">
        <h1 className="text-center text-4xl font-semibold text-black">
          Welcome <br /> Camper-Rental Service{' '}
        </h1>
        <NavLink
          className="flex justify-center items-center w-[173px] h-[56px] rounded-[200px] bg-[#e44848] text-white font-medium text-sm tracking-[-0.01em]"
          to="/catalog"
        >
          Order Now
        </NavLink>
      </div>
    </>
  );
}
