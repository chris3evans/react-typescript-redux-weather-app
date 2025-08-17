import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReverseGeolocationResponse } from "../../type-interfaces/server-interfaces";

export interface ILocationState {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  streetAddress: {
    continent: string;
    country: string;
    countryCode: string;
    county: string;
    postcode: string;
    road: string;
    suburb: string;
    town: string;
    formatted: string;
  };
  lastUpdateTime: string;
}

const initialState: ILocationState = {
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
  streetAddress: {
    continent: "",
    country: "",
    countryCode: "",
    county: "",
    postcode: "",
    road: "",
    suburb: "",
    town: "Town Unknown",
    formatted: "",
  },
  lastUpdateTime: "",
};

export const locationSlice = createSlice({
  name: "locationSlice",
  initialState,
  reducers: {
    reverseGeoCode: (
      state,
      action: PayloadAction<IReverseGeolocationResponse>
    ) => {
      const streetData = action.payload.results[0].components;
      state.streetAddress.continent = streetData.continent;
      state.streetAddress.country = streetData.country;
      state.streetAddress.countryCode = streetData.country_code;
      state.streetAddress.county = streetData.county;
      state.streetAddress.postcode = streetData.postcode;
      state.streetAddress.road = streetData.road;
      state.streetAddress.suburb = streetData.suburb;
      state.streetAddress.town = streetData.town;
      state.streetAddress.formatted = action.payload.results[0].formatted;

      state.coordinates.latitude = action.payload.results[0].geometry.lat;
      state.coordinates.longitude = action.payload.results[0].geometry.lng;
    },
    locationUpdated: (state, action: PayloadAction<string>) => {
      state.lastUpdateTime = action.payload;
    },
  },
});

export const { reverseGeoCode, locationUpdated } = locationSlice.actions;

export default locationSlice.reducer;
