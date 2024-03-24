import icons from '../../assets/img/icons.svg';

export const FeatureList = ({ feature, maxFeature }) => {
  return (
    <>
      <ul className="flex gap-[8px] flex-wrap">
        {Object.keys(feature).map(
          (item, index) =>
            index < maxFeature && (
              <li
                key={item}
                className="h-[44px] rounded-[100px] py-[12px] px-[18px] bg-[#f2f4f7] inline-flex items-center"
              >
                <svg className="w-[20px] h-[20px] mr-1 fill-[#F2F4F7] stroke-[#101828]">
                  <use href={`${icons}#icon-${item}`} />
                </svg>
                <span className="text-xsm font-medium text-[#101828] capitalize">
                  {feature[item]}
                </span>
              </li>
            )
        )}
      </ul>
    </>
  );
};
