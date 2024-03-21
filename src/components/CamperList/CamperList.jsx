import { useDispatch, useSelector } from 'react-redux';
import { selectIsMaxPage } from '../../redux/catalog/selector';
import { changePage } from '../../redux/catalog/slice';
import { featchAdver } from '../../redux/catalog/operation';
import { CamperItem } from '../CamperItem/CamperItem';

export const CamperList = ({ adverts, bool }) => {
  const dispatch = useDispatch();

  const isMaxPage = useSelector(selectIsMaxPage);

  const handleLoadMore = () => {
    dispatch(changePage(1));
    dispatch(featchAdver());
  };

  return (
    <>
      <ul className="flex items-center flex-col">
        {adverts.map(advert => (
          <CamperItem advert={advert} key={advert._id} />
        ))}
        {isMaxPage && !bool && (
          <button
            onClick={handleLoadMore}
            className="w-[146px] h-[56px] mt-[18px] mb-6 py-[16px] px-[32px] border border-[rgba(71, 84, 103, 0.2)] rounded-[200px] font-medium text-sm tracking-[-0.01em] text-[#101828]"
          >
            Load more
          </button>
        )}
      </ul>
    </>
  );
};
