import { useSelector } from 'react-redux';
import { selectAdverts } from '../redux/catalog/selector';
import { CamperList } from '../components/CamperList/CamperList';

export default function CatalogPage() {
  const adverts = useSelector(selectAdverts);

  return (
    <>
      <div className="px-16 ml-auto mr-auto w-[1440px] mt-[50px]">
        <CamperList adverts={adverts} />
      </div>
    </>
  );
}
