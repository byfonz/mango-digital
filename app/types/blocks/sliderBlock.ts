import { Slide } from "../objects/slide";

export type SliderBlockType = {
  _key: string;
  _type: 'sliderBlock',
  title: string;
  slides: Slide[];
};


