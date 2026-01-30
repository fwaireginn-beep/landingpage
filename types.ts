
export enum ViewState {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD'
}

export interface Subdomain {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: string;
}
