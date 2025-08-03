export interface IReverseGeolocationResponse {
  documentation: string;
  licenses: { name: string; url: string }[];
  rate: {
    limit: number;
    remaining: number;
    reset: number;
  };
  results: {
    annotations: {};
    bounds: {
      northwest: ILatLngCoords;
      southwest: ILatLngCoords;
    };
    components: IGeolocationComponents;
    confidence: number;
    distance_from_q: { meters: number };
    formatted: string;
    geometry: ILatLngCoords;
  }[];
  status: {
    code: number;
    message: string;
  };
  stay_informed: { blog: string; mastodon: string };
  thanks: string;
  timestamp: IGeolocationTimestamp;
  total_results: number;
}

export interface IGeolocationComponents {
  "ISO_3166-1_alpha-2": string;
  "ISO_3166-1_alpha-3": string;
  "ISO_3166-1": string[];
  continent: string;
  country: string;
  country_code: string;
  county: string;
  postcode: string;
  road: string;
  school: string;
  state: string;
  state_code: string;
  suburb: string;
  town: string;
}

export interface ILatLngCoords {
  lat: number;
  lng: number;
}

export interface IGeolocationTimestamp {
  created_http: string;
  created_unix: number;
}
