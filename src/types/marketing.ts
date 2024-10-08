export type Icon = {
  imageUrl: string;
};

export type Items = {
  name: string;
  icons: Icon[];
};

export type MarketingContents = {
  title: string;
  subTitle: string;
  btnText: string;
  items: Items[];
};
