import { FormProvider } from "../../hooks/useFormContext";
import { Form } from "../Form";
import "./App.css";
import React from "react";

import Section from "../Section";
import NavBar from "../NavBar";
import { ControlledCarousel } from "../Carousel";

import curtainFall from "../../images/curtain-fall.png";
import fazeley from "../../images/Fazeley-Studios.png";
import bristol from "../../images/Bristol.png";

const sections = [
  "Finally...",
  "Plan for the day",
  "Getting here",
  "Bits & bobs",
];

const alternateSectionStyling = (index) => {
  return index % 2 === 0 ? "" : "md:flex-row-reverse";
};

function App() {
  return (
    <>
      <div className="App">
        <NavBar paraTitles={sections} />
        <ControlledCarousel />
        <div className="content">
          {sections.map((title, index) => (
            <Section index={index} title={title}>
              {index === 0 && (
                <div
                  className={`${alternateSectionStyling(
                    index
                  )} md:flex justify-between`}
                >
                  <div className="w-2/3">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <p className="text-xl pb-5">
                      After 12 years together, we have decided to get married!
                    </p>
                    <p className="text-xl">
                      We'll be having a ceremony and celebration in Birmingham
                      on Saturday 9th July and we would love for you to be
                      there.
                    </p>
                  </div>
                  <img
                    src={curtainFall}
                    alt="Another one of Franks and Tom"
                    className="m-10 mt-20 max-h-56 rounded-full"
                  />
                </div>
              )}
              {index === 1 && (
                <div
                  className={`${alternateSectionStyling(
                    index
                  )} md:flex justify-between`}
                >
                  <div className="w-2/3">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <p className="text-xl pb-5">
                      3pm: Everyone arrives, drinks, ceremony, and a chance to
                      explore Digbeth
                    </p>
                    <p className="text-xl pb-5">6pm: We eat!</p>
                    <p className="text-xl pb-5">9pm: We dance!</p>
                    <p className="text-xl">1am: End of the night</p>
                  </div>
                  <img
                    src={fazeley}
                    alt="Front view of Fazeley Studios"
                    className="m-10 mt-20 max-h-56 rounded-3xl"
                  />
                </div>
              )}
              {index === 2 && (
                <div
                  className={`${alternateSectionStyling(
                    index
                  )} md:flex justify-between`}
                >
                  <div className="w-1/2">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <p className="text-xl">The address of the venue is:</p>
                    <p>191 Fazeley Street, Digbeth, Birmingham, B5 5SE</p>
                    <p>
                      The venue is within Birmingham's Clean Air Zone so you may
                      be charged if you are arriving by car. Please check here
                      to see if you will be charged and see coverage of the
                      Clean Air Zone.
                    </p>
                    <p>
                      parking: if you do want to drive here, there is plenty of
                      parking.
                    </p>
                    <p>Taxis: Uber, Lyft</p>
                    <p></p>
                  </div>
                  <div className="max-w-screen">
                    <iframe
                      title="fazeleyStudios"
                      className="max-w-screen"
                      loading="lazy"
                      allowfullscreen
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOX7hx4G8cEgRBU7Ph5E3ssU&key=AIzaSyBC2L0Pk9uND-SiJHLnR3O-i5YNGOb74cY"
                    ></iframe>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div
                  className={`${alternateSectionStyling(
                    index
                  )} md:flex justify-between`}
                >
                  <div className="w-2/3">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <p className="text-xl">
                      Presents: We don't ask for any gifts, but if you do feel
                      that you would like to give something then please donate
                      to one of our chosen charities below. Dress code: Wear
                      whatever you feel comfortable in on the day! What will I
                      need to explore Digbeth: After the ceremony there will be
                      the option to explore Digbeth and see the sights of the
                      immediate area surrounding the venue; hence, you will be
                      on your feet. Please wear footwear you'll be comfortable
                      in, and a phone to snap the sights you see!
                    </p>
                  </div>
                  <img
                    src={bristol}
                    alt="Tom and Frankie aged 20 in Norwich"
                    className="m-10 mt-20 max-h-56 rounded-full"
                  />
                </div>
              )}
            </Section>
          ))}
        </div>
        <FormProvider>
          <Form />
        </FormProvider>
      </div>
    </>
  );
}

export default App;
