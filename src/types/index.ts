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
    type: string;
  };
}
export interface PublicSettingsResponse {
  data: {
    contestLink: string;
    contestHeader: string;
    contestFooter: string;
    contestButton: string;
  };
}

export interface ShareInfoResponse {
  data: {
    id: string;
    collection: string;
    item: string;
    password: null;
    max_uses: null;
    times_used: number;
    date_start: null;
    date_end: null;
  };
}
