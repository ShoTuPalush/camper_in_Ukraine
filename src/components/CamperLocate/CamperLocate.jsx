import icons from '../../assets/img/icons.svg';

export const CamperLocate = ({ location }) => {
  return (
    <>
      <svg className="w-[16px] h-[16px] fill-white stroke-black mr-1">
        <use href={`${icons}#icon-map-pin`} />
      </svg>
      <p className="text-sm font-normal text-[#101828]">
        {location.split(',')[1]}, {location.split(',')[0]}
      </p>
    </>
  );
};
