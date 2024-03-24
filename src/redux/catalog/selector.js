import { createSelector } from '@reduxjs/toolkit';
import { selectFilters, selectFiltersFavorite } from '../filter/selector';
import uniq from 'lodash.uniq';

export const selectBackAdverts = state => state.catalog.advert;
export const selectAllAdvert = state => state.catalog.allAdvert;
export const selectisLoading = state => state.catalog.isLoading;
export const selectPage = state => state.catalog.page;
export const selectFavorite = state => state.catalog.favorites;

export const selectIsMaxPage = createSelector(
  [selectAllAdvert, selectPage],
  (allAdverts, page) => {
    const MaxPage = Math.ceil(allAdverts.length / 4);
    const bool = page < MaxPage;
    return bool;
  }
);

export const selectAdverts = createSelector(
  [selectBackAdverts, selectFavorite],
  (adverts, favorite) => {
    let newAdvert = [];
    newAdvert.push(
      ...adverts.map(advert => {
        const isFavorite =
          favorite.filter(favorit => favorit._id === advert._id).length > 0;
        let feature = {};
        advert.adults && (feature.adults = advert.adults + ' adults');
        advert.transmission && (feature.transmission = advert.transmission);
        advert.engine && (feature.engine = advert.engine);
        advert.details.airConditioner && (feature.AC = 'AC');
        advert.details.kitchen && (feature.kitchen = 'kitchen');
        advert.details.beds && (feature.beds = advert.details.beds + ' beds');
        advert.details.TV && (feature.TV = 'TV');
        advert.details.CD && (feature.CD = 'CD');
        advert.details.radio && (feature.radio = 'radio');
        advert.details.hob && (feature.hob = advert.details.hob + ' hob');
        advert.details.toilet && (feature.toilet = 'toilet');
        advert.details.shower && (feature.shower = 'shower');
        advert.details.freezer && (feature.freezer = 'freezer');
        advert.details.gas && (feature.gas = 'gas');
        advert.details.water && (feature.water = 'water');
        advert.details.microwave && (feature.microwave = 'microware');
        return { ...advert, feature, favorite: isFavorite };
      })
    );

    return newAdvert;
  }
);

export const selectAdvertsEdit = createSelector(
  [selectAllAdvert, selectFavorite],
  (adverts, favorite) => {
    let newAdvert = [];
    newAdvert.push(
      ...adverts.map(advert => {
        const isFavorite =
          favorite.filter(favorit => favorit._id === advert._id).length > 0;
        let feature = {};
        advert.adults && (feature.adults = advert.adults + ' adults');
        advert.transmission && (feature.transmission = advert.transmission);
        advert.engine && (feature.engine = advert.engine);
        advert.details.airConditioner && (feature.AC = 'AC');
        advert.details.kitchen && (feature.kitchen = 'kitchen');
        advert.details.beds && (feature.beds = advert.details.beds + ' beds');
        advert.details.TV && (feature.TV = 'TV');
        advert.details.CD && (feature.CD = 'CD');
        advert.details.radio && (feature.radio = 'radio');
        advert.details.hob && (feature.hob = advert.details.hob + ' hob');
        advert.details.toilet && (feature.toilet = 'toilet');
        advert.details.shower && (feature.shower = 'shower');
        advert.details.freezer && (feature.freezer = 'freezer');
        advert.details.gas && (feature.gas = 'gas');
        advert.details.water && (feature.water = 'water');
        advert.details.microwave && (feature.microwave = 'microware');
        return { ...advert, feature, favorite: isFavorite };
      })
    );

    return newAdvert;
  }
);

export const selectFilterAdverts = createSelector(
  [selectAdvertsEdit, selectFilters],
  (adverts, filters) => {
    const newAdverts = adverts.filter(advert => {
      if (filters.location !== '') {
        const locationSplit = advert.location.toLowerCase().split(', ');
        const location = `${locationSplit[1]}, ${locationSplit[0]}`;
        if (!location.includes(filters.location.toLowerCase())) {
          return false;
        }
      }

      if (filters.vehicleType !== '') {
        let value = filters.vehicleType;
        value === 'van' && (value = 'panelTruck');
        value === 'fully integrated' && (value = 'fullyIntegrated');
        if (advert.form !== value) {
          return false;
        } else console.log(value);
      }

      if (filters.vehicleEquipment.length > 0) {
        for (const feature of filters.vehicleEquipment) {
          if (feature === 'automatic') {
            if (advert.transmission !== 'automatic') return false;
          } else {
            if (feature === 'shower/wc') {
              if (advert.feature.shower !== 'shower') return false;
            } else {
              if (advert.feature[feature] === undefined) {
                return false;
              }
            }
          }
        }
      }
      return true;
    });
    return newAdverts;
  }
);

export const selectFilterFavoriteAdverts = createSelector(
  [selectFavorite, selectFiltersFavorite],
  (adverts, filters) => {
    const newAdverts = adverts.filter(advert => {
      if (filters.location !== '') {
        const locationSplit = advert.location.toLowerCase().split(', ');
        const location = `${locationSplit[1]}, ${locationSplit[0]}`;
        if (!location.includes(filters.location.toLowerCase())) {
          return false;
        }
      }

      if (filters.vehicleType !== '') {
        let value = filters.vehicleType;
        value === 'van' && (value = 'panelTruck');
        value === 'fully integrated' && (value = 'fullyIntegrated');
        if (advert.form !== value) {
          return false;
        }
      }

      if (filters.vehicleEquipment.length > 0) {
        for (const feature of filters.vehicleEquipment) {
          if (feature === 'automatic') {
            if (advert.transmission !== 'automatic') return false;
          } else {
            if (feature === 'shower/wc') {
              if (advert.feature.shower !== 'shower') return false;
            } else {
              if (advert.feature[feature] === undefined) {
                return false;
              }
            }
          }
        }
      }
      return true;
    });
    return newAdverts;
  }
);

export const selectLocationSelect = createSelector(
  [selectAllAdvert],
  adverts => {
    const locationSelect = adverts.map(advert => {
      const locationSplit = advert.location.split(', ');
      return `${locationSplit[1]}, ${locationSplit[0]}`;
    });
    return uniq(locationSelect);
  }
);
