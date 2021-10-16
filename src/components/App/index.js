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
                  <div className="md:w-2/3">
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
                  <div className="md:w-1/3 flex justify-center">
                    <img
                      src={curtainFall}
                      alt="Another one of Franks and Tom"
                      className="mt-10 max-h-56 rounded-full"
                    />
                  </div>
                </div>
              )}
              {index === 1 && (
                <div
                  className={`${alternateSectionStyling(
                    index
                  )} md:flex justify-between content-align`}
                >
                  <div className="md:w-2/3">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <table className="text-xl pb-5">
                      <tr>
                        <td
                          className="pr-3 table-cell font-semibold"
                          valign="top"
                        >
                          3pm
                        </td>
                        <td>
                          Everyone arrives, drinks, ceremony, and a chance to
                          explore Digbeth
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="pr-3 table-cell font-semibold"
                          valign="top"
                        >
                          6pm
                        </td>
                        <td>We eat!</td>
                      </tr>
                      <tr>
                        <td
                          className="pr-3 table-cell font-semibold"
                          valign="top"
                        >
                          9pm
                        </td>
                        <td>We dance!</td>
                      </tr>
                      <tr>
                        <td
                          className="pr-3 table-cell font-semibold"
                          valign="top"
                        >
                          1am
                        </td>
                        <td>End of the night</td>
                      </tr>
                    </table>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <img
                      src={fazeley}
                      alt="Front view of Fazeley Studios"
                      className="mt-10 max-h-56 rounded-3xl"
                    />
                  </div>
                </div>
              )}
              {index === 2 && (
                <div
                  className={`${alternateSectionStyling(
                    index
                  )} md:flex justify-between`}
                >
                  <div className="md:w-1/2 text-xl">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <p className="pb-2">The address of the venue is:</p>
                    <p>191 Fazeley Street</p>
                    <p>Digbeth</p>
                    <p>Birmingham</p>
                    <p className="pb-4">B5 5SE</p>
                    <p className="pb-4">
                      The venue is within Birmingham's{" "}
                      <a
                        class="no-underline hover:underline text-blue-600"
                        href="https://www.birmingham.gov.uk/info/20076/pollution/1763/a_clean_air_zone_for_birmingham/2"
                      >
                        Clean Air Zone
                      </a>{" "}
                      so you may be charged if you are arriving by car. Please{" "}
                      <a
                        class="no-underline hover:underline text-blue-600"
                        href="https://www.gov.uk/clean-air-zones"
                      >
                        check
                      </a>{" "}
                      to see if you will be charged and see coverage of the
                      Clean Air Zone.
                    </p>
                    <p>
                      If you do choose to drive here, there is plenty of parking
                      on street on the roads at and around the venue.
                    </p>
                  </div>
                  <iframe
                    title="fazeleyStudios"
                    className="w-full md:w-1/2 mt-10"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOX7hx4G8cEgRBU7Ph5E3ssU&key=AIzaSyBC2L0Pk9uND-SiJHLnR3O-i5YNGOb74cY"
                  ></iframe>
                </div>
              )}
              {index === 3 && (
                <div
                  className={`${alternateSectionStyling(
                    index
                  )} md:flex justify-between`}
                >
                  <div className="md:w-2/3 text-xl">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <h2 className="text-2xl">Gifts</h2>
                    <p className="pt-2 pb-2">
                      We don't ask for any gifts, but if you do feel that you
                      would like to give something then please donate to one of
                      our chosen charities below.
                    </p>
                    <a
                      class="no-underline hover:underline text-blue-600"
                      href="https://www.refugee-action.org.uk/"
                    >
                      Refugee Action
                    </a>{" "}
                    <h2 className="text-2xl pt-10">Dress code</h2>
                    <p className="">
                      Wear whatever you feel comfortable in on the day! After
                      the ceremony, there will be the option to explore Digbeth
                      and see the sights of the immediate area surrounding the
                      venue; hence, you will be on your feet. Please wear
                      footwear you'll be comfortable in, and also bring a phone
                      to snap the sights you see!
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <img
                      src={bristol}
                      alt="Tom and Frankie aged 20 in Norwich"
                      className="mt-10 max-h-56 rounded-full"
                    />
                  </div>
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
