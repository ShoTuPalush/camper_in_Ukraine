import { useDispatch, useSelector } from 'react-redux';
import {
  setBtnClick,
  setFilters,
  setVehicleEquipment,
} from '../../redux/filter/slice';
import {
  selectFilters,
  selectFiltersFavorite,
} from '../../redux/filter/selector';
import { selectLocationSelect } from '../../redux/catalog/selector';
import clsx from 'clsx';
import { FaWind } from 'react-icons/fa';
import { SvgItem } from '../SvgItem/SvgItem';

export const Filters = ({ page }) => {
  const dispatch = useDispatch();
  const locationSelect = useSelector(selectLocationSelect);

  const filtersCatalog = useSelector(selectFilters);
  const filtersFavorite = useSelector(selectFiltersFavorite);
  const filters = page === 'catalog' ? filtersCatalog : filtersFavorite;
  console.log(page);
  const handleSetFilters = value => {
    if (filters.vehicleEquipment.includes(value)) {
      dispatch(setVehicleEquipment({ page, data: value }));
      return;
    }
    dispatch(setVehicleEquipment({ page, data: value }));
  };

  const handleSetTypeFilters = (evt, value) => {
    if (filters.vehicleType === value) {
      dispatch(setFilters({ page, data: { vehicleType: '' } }));
      evt.target.checked = false;
      return;
    }
    dispatch(setFilters({ page, data: { vehicleType: value } }));
  };
  return (
    <>
      <div className="w-[360px]">
        <label className="font-medium text-sm text-[#10182899] capitalize relative">
          <span className="absolute top-[47px] left-[16px]">
            <SvgItem item={'map-pin'} w={22} h={22} />
          </span>
          location
          <input
            className="w-[360px] mt-[8px] h-[56px] rounded-[10px] placeholder:text-[#101828] bg-[#f7f7f7] font-normal text-xsm text-[#101828] pl-[44px]  mb-[32px]"
            type="text"
            list="browsers"
            placeholder="Ukraine"
            value={filters.location}
            onChange={evt =>
              dispatch(
                setFilters({ page, data: { location: evt.target.value } })
              )
            }
          />
          <datalist id="browsers">
            {locationSelect.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
        </label>
        <p className="text-sm font-medium text-[#475467] mb-[14px]">Filters</p>
        <p className="text-lg font-semibold text-[#101828] mb-[24px]">
          Vehicle equipment
        </p>
        <div className="mb-[24px] w-full h-[1px] bg-[#e4e3e3]"></div>
        <ul className="flex flex-wrap mt-[24px] gap-[10px] relative mb-[32px]">
          {['AC', 'automatic', 'kitchen', 'TV', 'shower/wc'].map(
            (equipment, index) => (
              <li key={index}>
                <label className="w-[112px] h-[95px] justify-center items-center text-xsm font-medium flex flex-col capitalize">
                  <input
                    className={clsx(
                      'appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border',
                      filters.vehicleEquipment.includes(equipment)
                        ? 'border-red-500'
                        : 'border-gray-300'
                    )}
                    type="checkbox"
                    value={equipment}
                    name="equipment"
                    onClick={evt => handleSetFilters(evt.target.value)}
                  />
                  {equipment === 'AC' ? (
                    <FaWind size={28} />
                  ) : (
                    <SvgItem item={equipment} w={32} h={32} />
                  )}
                  {equipment}
                </label>
              </li>
            )
          )}
        </ul>
        <p className="text-lg font-semibold text-[#101828] mb-[24px]">
          Vehicle type
        </p>
        <div className="mb-[24px] w-full h-[1px] bg-[#e4e3e3]"></div>
        <ul className="flex flex-wrap mt-[24px] gap-[10px] relative mb-[64px]">
          {['van', 'fully integrated', 'alcove'].map((item, index) => (
            <li key={index}>
              <label className="w-[112px] h-[95px] justify-center items-center text-xsm text-center font-medium flex flex-col capitalize">
                <input
                  type="radio"
                  name="form"
                  className={clsx(
                    'appearance-none absolute w-[112px] h-[95px] items-center rounded-[10px] border',
                    filters.vehicleType == item
                      ? 'border-red-500'
                      : 'border-gray-300'
                  )}
                  onClick={evt => handleSetTypeFilters(evt, item)}
                />
                <SvgItem item={item} w={40} h={28} />
                {item}
              </label>
            </li>
          ))}
        </ul>
        <button
          className="w-[173px] h-[56px] rounded-[200px] bg-[#e44848] text-white font-medium text-sm tracking-[-0.01em]"
          type="button"
          onClick={() => dispatch(setBtnClick({ page }))}
        >
          Search
        </button>
      </div>
    </>
  );
};
