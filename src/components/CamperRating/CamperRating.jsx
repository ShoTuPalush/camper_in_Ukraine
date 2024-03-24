import { SvgItem } from '../SvgItem/SvgItem';

export const CamperRating = ({ rating, reviews }) => {
  return (
    <>
      <div className="w-[16px] h-[16px]">
        <SvgItem item={'rating'} />
      </div>
      <p className="underline underline-offset-4 text-sm font-normal mr-4 text-[#101828]">
        {rating}({reviews.length} Reviews)
      </p>
    </>
  );
};
