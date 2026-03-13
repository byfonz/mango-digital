'use client'

import type { SliderBlockType } from "@/types/blocks/sliderBlock";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Props {
    block: SliderBlockType
}

export function SliderBlock({ block }: Props) {
    return (
        <Swiper
            spaceBetween={24}
            slidesPerView={3}
        >
            {block.slides?.map((slide) => (
                <SwiperSlide 
                    key={slide._key}
                    className="border p-6 rounded-lg"
                    style={{
                        backgroundImage: `${slide.image?.asset.url}`
                    }}
                >
                    {slide.title}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}