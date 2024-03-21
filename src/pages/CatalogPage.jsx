import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featchAdver, featchAllAdver } from '../redux/catalog/operation';
import {
  selectAdvert,
  selectAdverts,
  selectIsMaxPage,
  selectisLoading,
} from '../redux/catalog/selector';
import icons from '../assets/img/icons.svg';
import { changePage } from '../redux/catalog/slice';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectisLoading);
  const isMaxPage = useSelector(selectIsMaxPage);

  const handleLoadMore = () => {
    dispatch(changePage(1));
    dispatch(featchAdver());
  };

  return (
    <>
      <div className="px-16 ml-auto mr-auto w-[1440px] mt-[50px]">
        <ul className="flex items-center flex-col">
          {adverts.map(advert => (
            <li className="border border-[rgba(16, 24, 40, 0.2)] rounded-[20px] p-6 w-[888px] h-[358px] flex gap-6 mb-[32px]">
              <div className="w-[290px] h-[310px] rounded-[10px] shrink-0 ">
                <img
                  src={advert?.gallery[0]}
                  alt={advert.name}
                  className="h-full object-cover rounded-[10px] "
                />
              </div>
              <div className="">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-2xl text-[#101828] inline-block">
                    {advert.name}
                  </h3>
                  <div className="flex ">
                    <p className="font-semibold text-2xl text-[#101828] inline-block pr-3">
                      €{advert.price}.00
                    </p>
                    <button>
                      <svg className="w-[24px] h-[24px] stroke-black fill-white">
                        <use href={`${icons}#icon-property`} />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <svg className="w-[16px] h-[16px] mr-1">
                    <use href={`${icons}#icon-rating`} />
                  </svg>
                  <p className="underline underline-offset-4 text-sm font-normal mr-4 text-[#101828]">
                    {advert.rating}({advert.reviews.length} Reviews)
                  </p>
                  <svg className="w-[16px] h-[16px] fill-white stroke-black mr-1">
                    <use href={`${icons}#icon-map-pin`} />
                  </svg>
                  <p className="text-sm font-normal text-[#101828]">
                    {advert.location.split(',')[1]},{' '}
                    {advert.location.split(',')[0]}
                  </p>
                </div>
                <p className="w-[525px] truncate text-sm text-[#475467] mb-6">
                  {advert.description}
                </p>
                {/* features */}
                <ul className="mb-6 flex gap-[8px] flex-wrap">
                  {Object.keys(advert.feature).map(
                    (item, index) =>
                      index < 7 && (
                        <li className="h-[44px] rounded-[100px] py-[12px] px-[18px] bg-[#f2f4f7] inline-flex items-center">
                          <svg className="w-[20px] h-[20px] mr-1 fill-[#F2F4F7] stroke-[#101828]">
                            <use href={`${icons}#icon-${item}`} />
                          </svg>
                          <span className="text-xsm font-medium text-[#101828] capitalize">
                            {advert.feature[item]}
                          </span>
                        </li>
                      )
                  )}
                </ul>

                <button className="w-[156px] h-[56px] rounded-[200px] bg-[#e44848] text-white font-medium text-sm tracking-[-0.01em]">
                  Show more
                </button>
              </div>
            </li>
          ))}
          {isMaxPage && (
            <button
              onClick={handleLoadMore}
              className="w-[146px] h-[56px] mt-[18px] mb-6 py-[16px] px-[32px] border border-[rgba(71, 84, 103, 0.2)] rounded-[200px] font-medium text-sm tracking-[-0.01em] text-[#101828]"
            >
              Load more
            </button>
          )}
        </ul>
      </div>
    </>
  );
}
