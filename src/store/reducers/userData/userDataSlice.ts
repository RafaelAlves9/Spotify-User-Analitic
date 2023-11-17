import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUserArtistItemSchemaResponse, TUserPerfilSchemaResponse, TUserTopArtistsSchemaResponse } from "@response/UserResponse";

type InitialState = {
  perfil: TUserPerfilSchemaResponse;
  artists: TUserTopArtistsSchemaResponse;
  musics: TUserTopArtistsSchemaResponse;
};

const initialState: InitialState = {
  perfil: {
    display_name: '',
    external_urls: {
      spotify: '',
    },
    href: '',
    id: '',
    images: [],
    type: '',
    uri: '',
    followers: {
      href: null,
      total: 0,
    },
    country: '',
    product: '',
    explicit_content: {
      filter_enabled: false,
      filter_locked: false,
    },
    email: "",
  },
  artists: {
    items: [],
    total: 1,
    limit: 20,
    offset: 0,
    href: '',
    next: null,
    previous: null,
  },
  musics: {
    items: [],
    total: 1,
    limit: 20,
    offset: 0,
    href: '',
    next: null,
    previous: null,
  },
};

const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    setPerfilUser(state, { payload }: PayloadAction<TUserPerfilSchemaResponse>) {
      state.perfil = payload;
    },
    setArtistsUser(state, { payload }: PayloadAction<TUserTopArtistsSchemaResponse>) {
      state.artists = payload;
    },
    setMusicsUser(state, { payload }: PayloadAction<TUserTopArtistsSchemaResponse>) {
      state.musics = payload;
    },
  },
});

export const {
  setPerfilUser,
  setArtistsUser,
  setMusicsUser
} = userDataSlice.actions;
export default userDataSlice.reducer;
