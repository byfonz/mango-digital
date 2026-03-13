import { SlideItemType } from "../objects/slide-item";

export type SliderBlockType = {
  _key: string;
  _type: 'sliderBlock',
  title: string;
  slides: SlideItemType[];
};


