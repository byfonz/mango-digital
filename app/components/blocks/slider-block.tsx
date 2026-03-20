"use client";

import type { SliderBlockType } from "@/types/blocks/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PortableText } from "next-sanity";

interface Props {
  block: SliderBlockType;
}

export function SliderBlock({ block }: Props) {
  return (
    <div className="flex w-full max-w-7xl items-center">
      <Swiper spaceBetween={24} slidesPerView={3}>
        {block.slides?.map((slide) => (
          <SwiperSlide
            key={slide._key}
            className="border p-6 rounded-lg"
            style={{
              backgroundImage: `${slide.image}`,
            }}
          >
            <div className="flex flex-col gap-2">
              {slide.title}
              <PortableText
                value={slide.description}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-xs leading-relaxed tracking-[-0.02em]">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
