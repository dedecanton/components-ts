import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  TestimonialContainer,
  TestimonialsSlider,
  TestimonialTitle,
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
  const navigationPrevRef = React.useRef<HTMLButtonElement>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <TestimonialContainer>
      <TestimonialTitle>Depoimentos</TestimonialTitle>

      <TestimonialsSlider>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}>
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
                <ControlButton>
                  <ArrowLeftIcon/>
                </ControlButton>
                <ControlButton>
                  <ArrowRightIcon/>
                </ControlButton>
              </ControlsContainer>
            </CustomerInfoAndControlsContainer>
          </Testimonial>
        ))}
      </TestimonialsSlider>
    </TestimonialContainer>
  );
};

export default TestimonialComponent;
