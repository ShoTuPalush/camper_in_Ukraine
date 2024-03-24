import { SvgItem } from '../SvgItem/SvgItem';

export const CamperLocate = ({ location }) => {
  return (
    <>
      <div className="w-[16px] h-[16px]">
        <SvgItem item={'map-pin'} />
      </div>
      <p className="text-sm font-normal text-[#101828]">
        {location.split(', ')[1]}, {location.split(', ')[0]}
      </p>
    </>
  );
};
