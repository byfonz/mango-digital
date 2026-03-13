import { ImageAssetType } from "../objects/image-item";

export type ImageBlockType = {
  _key: string;
  _type: "imageBlock";
  image: {
    asset: ImageAssetType;
    alt?: string;
  };
  caption?: string;
}