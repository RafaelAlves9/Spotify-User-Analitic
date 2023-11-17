import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUserPerfilSchemaResponse } from "@response/UserResponse";

type InitialState = {
  perfil: TUserPerfilSchemaResponse;
};

const initialState: InitialState = {
  perfil: {
    display_name: 'Nome do Usuário',
    external_urls: {
      spotify: 'https://www.spotify.com',
    },
    href: 'https://www.example.com',
    id: '123456',
    images: [],
    type: 'user',
    uri: 'spotify:user:123456',
    followers: {
      href: null,
      total: 100,
    },
    country: 'BR',
    product: 'premium',
    explicit_content: {
      filter_enabled: true,
      filter_locked: false,
    },
    email: "",
  },
};

const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    setPerfilUser(state, { payload }: PayloadAction<TUserPerfilSchemaResponse>) {
      state.perfil = payload;
    },
  },
});

export const {
  setPerfilUser
} = userDataSlice.actions;
export default userDataSlice.reducer;
