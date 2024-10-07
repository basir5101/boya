export type Client = {
  name: string;
  role: string;
  restaurant: string;
  testimonial: string;
  imageUrl: string;
};

export type Clients = {
  title: string;
  subTitle: string;
  clients: Client[];
};
