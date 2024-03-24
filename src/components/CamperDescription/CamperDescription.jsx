import clsx from 'clsx';

export const CamperDescription = ({ description, truncate, widthText }) => {
  return (
    <>
      <p
        className={clsx(
          `w-[${widthText}px]`,
          'text-sm text-[#475467] mb-6',
          truncate && 'truncate'
        )}
      >
        {description}
      </p>
    </>
  );
};
