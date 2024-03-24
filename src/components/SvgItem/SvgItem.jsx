import clsx from 'clsx';
import icons from '../../assets/img/icons.svg';
import { FaWind } from 'react-icons/fa';

export const SvgItem = ({ item, favorite }) => {
  if (item === 'property') {
    return (
      <>
        <svg
          className={clsx(
            'w-[24px] h-[24px] ',
            favorite
              ? 'stroke-[#e44848] fill-[#e44848]'
              : 'stroke-[#101828] fill-white'
          )}
        >
          <use href={`${icons}#icon-property`} />
        </svg>
        ;
      </>
    );
  }

  return (
    <>
      {item === 'AC' ? (
        <FaWind size={16} className="mr-[8px]" />
      ) : (
        <svg className={clsx(`w-full h-full mr-1 fill-none stroke-[#101828]`)}>
          <use href={`${icons}#icon-${item}`} />
        </svg>
      )}
    </>
  );
};
