import clsx from 'clsx';

export const CamperDescription = ({ description, truncate }) => {
  return (
    <>
      <p
        className={clsx(
          'w-[525px] text-sm text-[#475467] mb-6',
          truncate && 'truncate'
        )}
      >
        {description}
      </p>
    </>
  );
};
