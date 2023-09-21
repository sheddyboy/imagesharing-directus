export interface AuthWithDirectusRes {
  data: {
    access_token: string;
    expires: number;
  };
}
export interface ItemsFromCollection {
  data: {
    id: string;
    date_created: Date;
    date_updated: Date;
    image: string;
    allowPublic: boolean;
  }[];
}
