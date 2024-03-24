import clsx from 'clsx';
import { FallingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectisLoading } from '../../redux/catalog/selector';

export const Header = () => {
  const isLoading = useSelector(selectisLoading);
  return (
    <>
      <header className="bg-[#E44848]">
        <div className="h-14 flex justify-center items-center container relative">
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
          {isLoading && (
            <div className="absolute right-[25%]">
              <FallingLines
                color="#fff"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
            </div>
          )}
        </div>
      </header>
    </>
  );
};
