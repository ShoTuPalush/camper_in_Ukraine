import { useSelector } from 'react-redux';
import { selectFavorite } from '../redux/catalog/selector';
import { CamperList } from '../components/CamperList/CamperList';

export default function FavoritesPage() {
  const favorite = useSelector(selectFavorite);
  return (
    <>
      <div className="px-16 ml-auto mr-auto w-[1440px] mt-[50px]">
        <CamperList adverts={favorite} bool={true} />
      </div>
    </>
  );
}
