export interface IMedia {
  url: string | null;
  href?: string;
  clickAction?: Function;
  caption?: string;
  title?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}


export interface IStockOfAllOptions {
  homeDeliveryQty: number,
  clickAndCollectQty: number,
  maxAvailableQty: number
}

export interface IProduct {
  productId: number,
  name: string,
  description: string,
  price: number,
  minPrice: number,
  color: string,
  availableColors: string[],
  media: IMedia[],
  image: string,
  smallImage: string,
  thumbnail: string,
  isInStock: boolean,
  stockOfAllOptions: IStockOfAllOptions
}
