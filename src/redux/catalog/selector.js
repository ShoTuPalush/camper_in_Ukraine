import { createSelector } from '@reduxjs/toolkit';

export const selectBackAdverts = state => state.catalog.advert;
export const selectAllAdvert = state => state.catalog.allAdvert;
export const selectisLoading = state => state.catalog.isLoading;
export const selectPage = state => state.catalog.page;

export const selectIsMaxPage = createSelector(
  [selectAllAdvert, selectPage],
  (allAdverts, page) => {
    const MaxPage = Math.ceil(allAdverts.length / 4);
    const bool = page < MaxPage;
    return bool;
  }
);

export const selectAdverts = createSelector([selectBackAdverts], adverts => {
  let newAdvert = [];
  newAdvert.push(
    ...adverts.map(advert => {
      let feature = {};
      advert.adults && (feature.adults = advert.adults + ' adults');
      advert.transmission && (feature.transmission = advert.transmission);
      advert.engine && (feature.engine = advert.engine);
      advert.details.airConditioner && (feature.AC = 'AC');
      advert.details.kitchen && (feature.kitchen = 'kitchen');
      advert.details.beds && (feature.beds = advert.details.beds + ' beds');
      advert.details.CD && (feature.CD = 'CD');
      advert.details.radio && (feature.radio = 'Radio');
      advert.details.hob && (feature.hob = advert.details.hob + ' hob');
      advert.details.toilet && (feature.toilet = 'Toilet');
      advert.details.shower && (feature.shower = 'Shower');
      advert.details.freezer && (feature.freezer = 'Freezer');
      advert.details.gas && (feature.gas = 'Gas');
      advert.details.water && (feature.water = 'Water');
      advert.details.microwave && (feature.microwave = 'Microware');
      return { ...advert, feature };
    })
  );
  return newAdvert;
});
