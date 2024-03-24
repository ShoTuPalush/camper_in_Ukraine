import { useSelector } from 'react-redux';
import { selectAdverts, selectFilterAdverts } from '../redux/catalog/selector';
import { CamperList } from '../components/CamperList/CamperList';
import { Filters } from '../components/Filters/Filters';
import { selectFilters } from '../redux/filter/selector';

export default function CatalogPage() {
  const filters = useSelector(selectFilters);
  const filtersAdverts = useSelector(selectFilterAdverts);
  const advertsNFilters = useSelector(selectAdverts);

  const adverts = filters.btnClick ? filtersAdverts : advertsNFilters;

  return (
    <>
      <div className="px-16 ml-auto mr-auto w-[1440px] mt-[50px] flex gap-[64px]">
        <Filters page={'catalog'} />
        <CamperList adverts={adverts} />
      </div>
    </>
  );
}
