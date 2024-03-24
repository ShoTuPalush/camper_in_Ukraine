import { SvgItem } from '../SvgItem/SvgItem';

export const CamperLocate = ({ location }) => {
  return (
    <>
      <SvgItem item={'map-pin'} h={16} w={16} />
      <p className="text-sm font-normal text-[#101828]">
        {location.split(', ')[1]}, {location.split(', ')[0]}
      </p>
    </>
  );
};
