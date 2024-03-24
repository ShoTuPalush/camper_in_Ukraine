import { useDispatch } from 'react-redux';
import { changeFavorite } from '../../redux/catalog/slice';
import clsx from 'clsx';
import icons from '../../assets/img/icons.svg';
import { FeatureList } from '../FeatureList/FeatureList';
import { CamperImg } from '../CamperImg/CamperImg';
import { CamperTitle } from '../CamperTitle/CamperTitle';
import { CamperPrice } from '../CamperPrice/CamperPrice';
import { CamperRating } from '../CamperRating/CamperRating';
import { CamperLocate } from '../CamperLocate/CamperLocate';
import { CamperDescription } from '../CamperDescription/CamperDescription';
import { useState } from 'react';
import { CamperModal } from '../CamperModal/CamperModal';

export const CamperItem = ({ advert }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpen = () => {
    setIsModalOpen(true);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };

  const handleFavorite = advert => {
    dispatch(changeFavorite(advert));
  };

  return (
    <>
      <li className="border border-[rgba(16, 24, 40, 0.2)] rounded-[20px] p-6 w-[888px] h-[358px] flex gap-6 mb-[32px]">
        <CamperImg img={advert?.gallery[0]} name={advert.name} />
        <div className="w-[526px]">
          <div className="flex justify-between mb-2">
            <CamperTitle name={advert.name} />
            <div className="flex ">
              <CamperPrice price={advert.price} modal={false} />
              <button onClick={() => handleFavorite(advert)}>
                <svg
                  className={clsx(
                    'w-[24px] h-[24px] ',
                    advert.favorite
                      ? 'stroke-[#e44848] fill-[#e44848]'
                      : 'stroke-[#101828] fill-white'
                  )}
                >
                  <use href={`${icons}#icon-property`} />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <CamperRating rating={advert.rating} reviews={advert.reviews} />
            <CamperLocate location={advert.location} />
          </div>
          <CamperDescription
            widthText={525}
            description={advert.description}
            truncate={true}
          />
          <FeatureList feature={advert.feature} maxFeature={7} />
          <button
            className="mt-6 w-[156px] h-[56px] rounded-[200px] bg-[#e44848] text-white font-medium text-sm tracking-[-0.01em]"
            onClick={() => modalOpen()}
          >
            Show more
          </button>
        </div>
        <CamperModal
          isModalOpen={isModalOpen}
          modalClose={modalClose}
          advert={advert}
        />
      </li>
    </>
  );
};
