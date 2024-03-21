import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className="bg-[#E44848]">
        <div className="h-14 flex justify-center items-center container">
          <nav className="flex gap-9">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                clsx(
                  'text-xl font-semibold',
                  isActive ? 'text-[#FFC531]' : 'text-white'
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to={'/catalog'}
              className={({ isActive }) =>
                clsx(
                  'text-xl font-semibold',
                  isActive ? 'text-[#FFC531]' : 'text-white'
                )
              }
            >
              Catalog
            </NavLink>
            <NavLink
              to={'/favorites'}
              className={({ isActive }) =>
                clsx(
                  'text-xl font-semibold',
                  isActive ? 'text-[#FFC531]' : 'text-white'
                )
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
