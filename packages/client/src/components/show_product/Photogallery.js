import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { PhotogalleryStyles } from './StyledComponent';
import 'keen-slider/keen-slider.min.css';
// eslint-disable-next-line no-unused-vars
import ohoto from './images/637627db8024e.jpeg';

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const Photogallery = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <PhotogalleryStyles>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide number-slide1'>1</div>
        <div className='keen-slider__slide number-slide2'>2</div>
        <div className='keen-slider__slide number-slide3'>3</div>
        <div className='keen-slider__slide number-slide4'>4</div>
        <div className='keen-slider__slide number-slide5'>5</div>
        <div className='keen-slider__slide number-slide6'>6</div>
      </div>

      <div ref={thumbnailRef} className='keen-slider thumbnail'>
        <div className='keen-slider__slide number-slide1'>1</div>
        <div className='keen-slider__slide number-slide2'>2</div>
        <div className='keen-slider__slide number-slide3'>3</div>
        <div className='keen-slider__slide number-slide4'>4</div>
        <div className='keen-slider__slide number-slide5'>5</div>
        <div className='keen-slider__slide number-slide6'>6</div>
      </div>
    </PhotogalleryStyles>
  );
};

export default Photogallery;
