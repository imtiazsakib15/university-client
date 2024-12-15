export type TAuthState = {
  user: null | TUser;
  token: null | string;
};

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};