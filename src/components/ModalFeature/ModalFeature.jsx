import { FeatureList } from '../FeatureList/FeatureList';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';

export const ModalFeature = ({ advert }) => {
  return (
    <>
      <FeatureList feature={advert.feature} maxFeature={99} />
      <div className="mt-[44px]">
        <h4 className="text-lg font-semibold ">Vehicle details</h4>
        <div className="my-[24px] w-full h-[1px] bg-[#e4e3e3]"></div>
        <VehicleDetails
          advert={advert}
          arr={['form', 'length', 'width', 'height', 'tank', 'consumption']}
        />
      </div>
    </>
  );
};
