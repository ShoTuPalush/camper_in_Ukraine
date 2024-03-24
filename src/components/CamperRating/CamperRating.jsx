import { SvgItem } from '../SvgItem/SvgItem';

export const CamperRating = ({ rating, reviews }) => {
  return (
    <>
      <SvgItem item={'rating'} w={16} h={16} />
      <p className="underline underline-offset-4 text-sm font-normal mr-4 text-[#101828]">
        {rating}({reviews.length} Reviews)
      </p>
    </>
  );
};
