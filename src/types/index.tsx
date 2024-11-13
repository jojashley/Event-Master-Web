export interface Supplier {
  name: string;
  email: string;
  password: string;
  description: string;
  type: string;
  url_image: string;
}

export interface EventsSuppliers {
  id: number;
  email_user: string;
  type: string;
  date: string;
  description: string;
  start_time: string,
  end_time: string,
  ubication: string;
  state: boolean;
}

