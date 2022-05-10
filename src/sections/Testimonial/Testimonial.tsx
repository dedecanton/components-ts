import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module


import {
  TestimonialsSlider,
  CustomerInfoAndControlsContainer,
  CustomerNameAndProfileContainer,
  CustomerImage,
  CustomerName,
  CustomerProfile,
  ControlsContainer,
  ControlButton,
  QuoteContainer,
  QuoteIcon,
  Quote,
  Testimonial,
  TestimonialSection,
} from "./Testimonial.style";

const testimonials = [
  {
    customerName: "David Hanson",
    customerProfile: "CEO, Koalify",
    imageSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.85&w=256&h=256&q=80",
    quote:
      "We have been using servana for about 2 years. And in that time we have had no problem at all. The user interface is really simple to use. Our services scale automatically and we never have to worry about downtimes. is as described.",
  },
  {
    customerName: "Serena Davis",
    customerProfile: "Founder, Travana",
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=256&h=256&q=80",
    quote:
      "We are delighted with the quality and performance of the servers that servana provides. The uptime is amazing and the internet connection is great for the price we are paying.",
  },
  {
    customerName: "Timothy Burr",
    customerProfile: "CTO, Coronax",
    imageSrc:
      "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=256&h=256&q=80",
    quote:
      "It has been 8 months since we have switched to servana and it has nothing but an amazing experience. The cost is affordable, support is great, uptime is as described.",
  },
];

const TestimonialComponent = () => {
  const [refCallback,  instanceRef] = useKeenSlider({loop:true, })
  
  const handleNextArrow = () => {
    instanceRef.current?.next()
  }
  
  const handlePrevArrow = () => {
    instanceRef.current?.prev()
  }

  return (
    <TestimonialSection id='testimonials' title="Depoimentos" >
          <TestimonialsSlider ref={refCallback} className='keen-slider'>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} className="keen-slider__slide">
            <QuoteContainer>
              <QuoteIcon />
              <Quote>{testimonial.quote}</Quote>
            </QuoteContainer>

            <CustomerInfoAndControlsContainer>
              <CustomerImage src={testimonial.imageSrc} />
              <CustomerNameAndProfileContainer>
                <CustomerName>{testimonial.customerName}</CustomerName>
                <CustomerProfile>{testimonial.customerProfile}</CustomerProfile>
              </CustomerNameAndProfileContainer>
              
              <ControlsContainer>
                <ControlButton onClick={handlePrevArrow}>
                  <ArrowLeftIcon className="icon" />
                </ControlButton>

                <ControlButton onClick={handleNextArrow}>
                  <ArrowRightIcon className="icon"/>
                </ControlButton>
              </ControlsContainer>
            </CustomerInfoAndControlsContainer>

          </Testimonial>
        ))}
      </TestimonialsSlider>
    </TestimonialSection>
  );
};

export default TestimonialComponent;
