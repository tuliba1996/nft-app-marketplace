import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNftMarket } from "../actions/marketAction";
import { NftType } from "../type/marketType";

interface MarketStateType {
  nfts: NftType[];
  loading: boolean;
}

const initialState: MarketStateType = {
  nfts: [],
  loading: false,
};

export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchNftMarket.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.nfts = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchNftMarket.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      });
  },
});

export default marketSlice.reducer;
