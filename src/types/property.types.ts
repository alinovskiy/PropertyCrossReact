import { PropertiesLocation } from '@app/types/locations.types';

export type PropertyItem = {
  id: string;
  bathroomNumber: number;
  bedroomNumber: number;
  carSpaces: number;
  comission: number;
  constructionYear: number;
  dataSourcesName: string;
  imgHeight: number;
  imgUrl: string;
  imgWidth: number;
  keywords: string;
  latitude: number;
  listerName: string;
  listerUrl: string;
  listingType: string;
  locationAccuracy: number;
  longitude: number;
  price: number;
  priceCurrency: string;
  priceFormatted: string;
  priceHigh: number;
  priceLow: number;
  priceType: string;
  propertyType: string;
  size: number;
  sizeType: string;
  summary: string;
  thumbHeight: number;
  thumbUrl: string;
  thumbWidth: number;
  title: string;
  updatedInDays: number;
  updatedInDaysFormatted: string;
  location: PropertiesLocation;
}