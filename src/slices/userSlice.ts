import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMyNft, fetchNftListed } from "../actions/userAction";
import { NftType } from "../type/marketType";

interface UserState {
  user_address: string | null;
  chainId: number | null;
  nftsListed: NftType[];
  nftsUser: NftType[];
  loading: boolean;
}

const initialState: UserState = {
  user_address: null,
  chainId: null,
  nftsListed: [],
  nftsUser: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      // state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNftListed.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(
        fetchNftListed.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.nftsListed = action.payload;
        }
      )
      .addCase(fetchMyNft.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(fetchMyNft.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.nftsUser = action.payload;
      });
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
