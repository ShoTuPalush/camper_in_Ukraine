import { SvgItem } from '../SvgItem/SvgItem';

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
                <SvgItem item={item} h={20} w={20} className="mr-1" />
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
