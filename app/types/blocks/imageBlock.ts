import { ImageAsset } from "../objects/image";

export type ImageBlockType = {
  _key: string;
  _type: "imageBlock";
  image: {
    asset: ImageAsset;
    alt?: string;
  };
  caption?: string;
}