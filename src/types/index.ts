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
export interface PublicSettingsResponse {
  data: {
    contestLink: string;
    contestHeader: string;
    contestFooter: string;
    contestButton: string;
  };
}
