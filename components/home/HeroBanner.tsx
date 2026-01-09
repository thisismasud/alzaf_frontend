"use client";

import type { Banner } from "@/lib/data/banners";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroBanner = ({ banners }: { banners: Banner[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay({ delay: 5000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <>
      <div aria-label="Hero Banner" ref={emblaRef} className="embla overflow-hidden relative">
        <div className="embla__container flex">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className="
                embla__slide
                flex-[0_0_100%]
                relative
                min-h-[300px] sm:min-h-[400px] md:min-h-[560px] lg:min-h-[600px]
              "
            >
              {/* Image */}
              <Image
                src={banner.image}
                alt={banner.buttonText ?? `Banner ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 100vw,
         1200px"
                className="object-cover object-[5%_5%]"
                placeholder="blur"
                blurDataURL={banner.image}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 container flex items-center h-full text-white px-10 sm:px-12 md:px-16 lg:px-26">
                {banner.link && (
                  <Link
                    href={banner.link}
                    className="
                      w-fit
                      bg-white text-black
                      font-semibold
                      px-6 py-2.5
                      rounded
                      hover:bg-gray-200
                      transition-colors
                      mt-40 sm:mt-44 md:mt-56 
                      text-sm sm:text-base lg:text-md
                    "
                  >
                    {banner.buttonText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
