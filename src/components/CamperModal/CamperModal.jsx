import Modal from 'react-modal';
import icons from '../../assets/img/icons.svg';
import { CamperTitle } from '../CamperTitle/CamperTitle';
import { CamperRating } from '../CamperRating/CamperRating';
import { CamperLocate } from '../CamperLocate/CamperLocate';
import { CamperPrice } from '../CamperPrice/CamperPrice';
import { CamperImg } from '../CamperImg/CamperImg';
import { CamperDescription } from '../CamperDescription/CamperDescription';
import { useState } from 'react';
import clsx from 'clsx';
import { ModalFeature } from '../ModalFeature/ModalFeature';
import { ModalReviews } from '../ModalReviews/ModalReviews';
import { ModalForm } from '../ModalForm/ModalForm';

const customStyles = {
  overlay: {
    zIndex: 100,
    backgroundColor: 'rgba(17, 18, 19, 0.4)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    borderRadius: '18px',
    background: '#FFF',
  },
};

export const CamperModal = ({ isModalOpen, modalClose, advert }) => {
  const [navi, setNavi] = useState('features');
  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          htmlOpenClassName={'no-scroll'}
          onAfterClose={() => (document.documentElement.className = '')}
          onRequestClose={modalClose}
          style={customStyles}
          contentLabel="Book Modal"
        >
          <div className="p-[40px] w-[982px] max-h-screen overflow-y-auto bg-white rounded-[20px]">
            <div className="flex justify-between">
              <CamperTitle name={advert.name} />
              <button
                className="flex items-center justify-center
                  "
                type="button"
                onClick={() => modalClose()}
              >
                <svg className="stroke-black w-[32px] h-[32px]">
                  <use href={`${icons}#icon-close`} />
                </svg>
              </button>
            </div>
            <div className="flex items-center mb-6 mt-[10px]">
              <CamperRating rating={advert.rating} reviews={advert.reviews} />
              <CamperLocate location={advert.location} />
            </div>
            <CamperPrice price={advert.price} />

            <div className="flex gap-[16px] my-[24px]">
              {advert.gallery.map((photo, index) => (
                <CamperImg key={index} img={photo} name={advert.name} />
              ))}
            </div>
            <CamperDescription
              widthText={902}
              description={advert.description}
              truncate={false}
            />
            <div className="my-[44px]  h-[48px] border-b border=[rgba(16, 24, 40, 0.2)]">
              <button
                className={clsx(
                  'mr-[40px] font-semibold text-lg relative',
                  navi === 'features' &&
                    'after:absolute after:bottom-[-26px] after:left-0 after:content-[""] after:h-[5px] after:w-full after:bg-[#E44848]'
                )}
                type="button"
                onClick={() => setNavi('features')}
              >
                Features
              </button>
              <button
                className={clsx(
                  'font-semibold text-lg relative',
                  navi === 'reviews' &&
                    'after:absolute after:bottom-[-24px] after:left-0 after:content-[""] after:h-[4px] after:w-full after:bg-[#E44848]'
                )}
                type="button"
                onClick={() => setNavi('reviews')}
              >
                Reviews
              </button>
            </div>
            <div className="flex gap-[24px]">
              <div className="w-[430px]">
                {navi === 'features' ? (
                  <ModalFeature advert={advert} />
                ) : (
                  <ModalReviews reviews={advert.reviews} />
                )}
              </div>
              <ModalForm />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
