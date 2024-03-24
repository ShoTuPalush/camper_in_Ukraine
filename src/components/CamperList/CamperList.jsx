import { useDispatch, useSelector } from 'react-redux';
import { selectIsMaxPage, selectisLoading } from '../../redux/catalog/selector';
import { changePage } from '../../redux/catalog/slice';
import { featchAdver } from '../../redux/catalog/operation';
import { CamperItem } from '../CamperItem/CamperItem';
import { selectFilters } from '../../redux/filter/selector';
import { FallingLines } from 'react-loader-spinner';

export const CamperList = ({ adverts, bool }) => {
  const dispatch = useDispatch();

  const isMaxPage = useSelector(selectIsMaxPage);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectisLoading);

  const handleLoadMore = () => {
    dispatch(changePage(1));
    dispatch(featchAdver());
  };

  return (
    <>
      {adverts.length > 0 ? (
        <ul className="flex items-center flex-col">
          {adverts.map(advert => (
            <CamperItem advert={advert} key={advert._id} />
          ))}
          {isMaxPage && !bool && !filters.btnClick && (
            <button
              onClick={handleLoadMore}
              className="w-[146px] h-[56px] mt-[18px] mb-6 py-[16px] px-[32px] border border-[rgba(71, 84, 103, 0.2)] rounded-[200px] font-medium text-sm tracking-[-0.01em] text-[#101828]"
            >
              Load more
            </button>
          )}
          {isLoading && (
            <FallingLines
              color="#e44848"
              width="100"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          )}
        </ul>
      ) : (
        <div>
          <b className="text-2xl font-semibold">Sorry, camper not found</b>
        </div>
      )}
    </>
  );
};
