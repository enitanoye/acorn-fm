import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback, useEffect, useState } from "react";
import cleaning from "../assets/cleaning.jpg";
import construction from "../assets/construction.jpg";
import compound from "../assets/compound.webp";
import cleaner from "../assets/cleaning-lady.jpg";

const slides = [
  compound,
  cleaning,
  cleaner,
  construction
]

export default function Carousel() {
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setsnaps] = useState([]);
  const snap = slides;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      // slidesToScroll:3,
      inViewThreshold: 1,
      skipSnaps: false,
      dragFree: false,
      containScroll: "keepSnaps",
      align: 'start',
      speed: 10,
      startIndex: 0,
      
      // Prevent dragging beyond edges
      watchDrag: (emblaApi) => {
        const engine = emblaApi.internalEngine();
        const location = engine.location;
        const target = engine.target;
        
        // If at the start, prevent dragging left
        if (location.get() === 0 && target.get() < 0) {
          return false;
        }
        
        // If at the end, prevent dragging right
        const maxScroll = emblaApi.scrollSnapList().length - 1;
        if (location.get() === maxScroll && target.get() > maxScroll) {
          return false;
        }
        
        return true;
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true, stopOnMouseLeave: false,playOnInit:true })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const generateRepeatedArray = (arr, times) => {
    return Array(times).fill(arr).flat();
  };

  const repeated = generateRepeatedArray(slides, 10);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());

    // if (emblaApi.selectedScrollSnap() === snap.length - 2 ) {
    //   snap.push(...repeated)
    //  }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // console.log(emblaApi.scrollSnapList());
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, selectedIndex, onSelect, setScrollSnaps]);

  //console.log(snap,snap.length);
  // console.log(repeated);
  return (
    <>
      <div className="embla h-full relative" ref={emblaRef}>
        <div className="embla__container h-full  ">
          {slides.map((slide, i) => (
            <div key={i} className="embla__slide w-full relative">
              <img
                src={slide}
                alt=""
                className="w-full h-full flex-shrink-0"
              />
            </div>
          ))}
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
            key={index}
              className={`embla__dot ${
                index === selectedIndex ? "is-selected" : ""
              }`}
              type="button"
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
