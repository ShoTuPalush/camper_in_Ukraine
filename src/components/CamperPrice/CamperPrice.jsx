import clsx from 'clsx';

export const CamperPrice = ({ price, modal }) => {
  return (
    <>
      <p
        className={clsx(
          'font-semibold text-2xl text-[#101828] inline-block pr-3',
          modal && 'mb-[24px]'
        )}
      >
        €{price}.00
      </p>
    </>
  );
};
