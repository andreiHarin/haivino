/**
 * Typed re-export of utils/contacts.json (the canonical source of HAiViNO contact info).
 * Never duplicate these values elsewhere — import from here.
 */
import raw from "../../utils/contacts.json" with { type: "json" };

export interface Address {
  street: string;
  streetAscii: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  countryCode: string;
  formatted: string;
}

export interface Phone {
  raw: string;
  national: string;
  international: string;
  tel: string;
}

export interface Contacts {
  name: string;
  shortName: string;
  type: string;
  googleMapsName: string;
  address: Address;
  phone: Phone;
  links: {
    website: string;
    googleMapsSearch: string;
  };
  tbd: {
    email: string | null;
    openingHours: unknown;
    social: {
      instagram: string | null;
      facebook: string | null;
      tripadvisor: string | null;
      google: string | null;
    };
    reservationProvider: string | null;
    geo: { lat: number | null; lng: number | null };
  };
}

export const contacts = raw as unknown as Contacts;
export default contacts;
