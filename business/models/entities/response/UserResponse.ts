import * as superstruct from "superstruct";

export const UserPerfilResponse = superstruct.object({
  display_name : superstruct.string(),
  external_urls : superstruct.object({
    spotify : superstruct.string(),
  }),
  href: superstruct.string(),
  id : superstruct.string(),
  images : superstruct.array(),
  type : superstruct.string(),
  uri : superstruct.string(),
  followers : superstruct.object({
    href : superstruct.nullable(superstruct.string()),
    total : superstruct.number(),
  }),
  country : superstruct.string(),
  product : superstruct.string(),
  explicit_content : superstruct.object({
    filter_enabled : superstruct.boolean(),
    filter_locked : superstruct.boolean(),
  }),
  email : superstruct.string(),
});

export const UserArtistItem = superstruct.object({
  external_urls: superstruct.object({
    spotify: superstruct.string(),
  }),
  followers: superstruct.object({
    href: superstruct.nullable(superstruct.string()),
    total: superstruct.number(),
  }),
  genres: superstruct.array(superstruct.string()),
  href: superstruct.string(),
  id: superstruct.string(),
  images: superstruct.array(
    superstruct.object({
      height: superstruct.number(),
      url: superstruct.string(),
      width: superstruct.number(),
    })
  ),
  name: superstruct.string(),
  popularity: superstruct.number(),
  type: superstruct.string(),
  uri: superstruct.string(),
});

export const UserTopArtistsResponse = superstruct.object({
  items: superstruct.array(UserArtistItem),
  total: superstruct.number(),
  limit: superstruct.number(),
  offset: superstruct.number(),
  href: superstruct.string(),
  next: superstruct.nullable(superstruct.string()),
  previous: superstruct.nullable(superstruct.string()),
});

export type TUserPerfilSchemaResponse = superstruct.Infer<typeof UserPerfilResponse>;
export type TUserTopArtistsSchemaResponse = superstruct.Infer<typeof UserTopArtistsResponse>;
export type TUserArtistItemSchemaResponse = superstruct.Infer<typeof UserArtistItem>;
