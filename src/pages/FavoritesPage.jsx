import { useSelector } from 'react-redux';
import {
  selectFavorite,
  selectFilterFavoriteAdverts,
} from '../redux/catalog/selector';
import { CamperList } from '../components/CamperList/CamperList';
import { Filters } from '../components/Filters/Filters';
import { selectFiltersFavorite } from '../redux/filter/selector';

export default function FavoritesPage() {
  const favorite = useSelector(selectFavorite);
  const filters = useSelector(selectFiltersFavorite);
  const filtersAdverts = useSelector(selectFilterFavoriteAdverts);

  const adverts = filters.btnClick ? filtersAdverts : favorite;
  return (
    <>
      <div className="px-16 ml-auto mr-auto w-[1440px] mt-[50px] flex gap-[64px]">
        <Filters page={'favorite'} />
        <CamperList adverts={adverts} bool={true} />
      </div>
    </>
  );
}
