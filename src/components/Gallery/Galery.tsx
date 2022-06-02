import React, { MutableRefObject } from "react";

import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import { MainSlider, Section, Slide, Thumbnail } from "./Galery.style";

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

const Gallery = () => {
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const photos = [
    "/infantil.jpg",
    "/maquina.jpg",
    "/platinado.jpg",
    "/risco.jpg",
    "/services.jpg",
    "/tesoura.jpg",
  ];

  return (
    <Section title="Galeria" id="gallery" image="/galleryBackground.jpg">
      <div ref={sliderRef} className="keen-slider">
        {photos.map((photo, index) => (
          <Slide key={index} className={`keen-slider__slide `} image={photo} />
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {photos.map((photo, index) => (
          <Thumbnail key={index} className={`keen-slider__slide `} image={photo} />
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
