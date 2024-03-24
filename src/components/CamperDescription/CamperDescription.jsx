import clsx from 'clsx';

export const CamperDescription = ({ description, truncate, widthText }) => {
  return (
    <>
      <p
        className={clsx(
          'text-sm text-[#475467] mb-6',
          `w-[${widthText}px]`,
          truncate && 'truncate'
        )}
      >
        {description}
      </p>
    </>
  );
};
