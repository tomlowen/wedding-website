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
  "It's happening!",
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
      <div className="App font-sans">
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
                    <p className="text-xl pb-5 font-sans">
                      After 12 years together, we have decided to get married!
                    </p>
                    <p className="text-xl font-sans">
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
                  )} md:flex justify-between`}
                >
                  <div className="md:w-2/3">
                    <h3 className={`text-5xl pb-10`}>{title}</h3>
                    <table className="text-xl pb-5">
                      <tr className="pb-3">
                        <td
                          className="pr-3 pb-3 table-cell font-semibold"
                          valign="top"
                        >
                          3pm
                        </td>
                        <td className="pr-3 pb-3">
                          Kick off! Doors open with drinks on arrival
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="pr-3 pb-3 table-cell font-semibold pb-3"
                          valign="top"
                        >
                          4pm
                        </td>
                        <td className="pr-3 pb-3">Ceremony</td>
                      </tr>
                      <tr>
                        <td
                          className="pr-3 pb-3 table-cell font-semibold"
                          valign="top"
                        >
                          6pm
                        </td>
                        <td className="pr-3 pb-3">We eat!</td>
                      </tr>
                      <tr>
                        <td
                          className="pr-3 pb-3 table-cell font-semibold"
                          valign="top"
                        >
                          9pm
                        </td>
                        <td className="pr-3 pb-3">We dance!</td>
                      </tr>
                      <tr>
                        <td
                          className="pr-3 pb-3 table-cell font-semibold"
                          valign="top"
                        >
                          1am
                        </td>
                        <td className="pr-3 pb-3">Music stops</td>
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
                  <div className="md:w-1/2 text-xl md:pr-10">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <p className="pb-2 font-sans">The address is:</p>
                    <p className="font-sans">Fazeley Studios</p>
                    <p className="font-sans">Digbeth</p>
                    <p className="font-sans">Birmingham</p>
                    <p className="pb-4 font-sans">B5 5SE</p>
                    <p className="pb-2 font-sans">
                      Entry is at 'The Social at Fazeley' on Floodgate Street.
                    </p>
                    <p className="pb-4 font-sans">
                      The venue is within Birmingham's{" "}
                      <a
                        class="no-underline hover:underline text-blue-600"
                        href="https://www.birmingham.gov.uk/info/20076/pollution/1763/a_clean_air_zone_for_birmingham/2"
                      >
                        Clean Air Zone
                      </a>{" "}
                      so you might be charged if you're arriving by car. Please{" "}
                      <a
                        class="no-underline hover:underline text-blue-600"
                        href="https://www.gov.uk/clean-air-zones"
                      >
                        check
                      </a>{" "}
                      to see if you will be charged and see coverage of the
                      Clean Air Zone.
                    </p>
                    <h2 className="text-2xl pt-10 pb-2">Parking</h2>
                    <p className="font-sans">
                      If you do choose to drive here, there are two options.
                      Limited on street parking near the venue (free after 6pm),
                      or some car parks a short walk away:
                      <br></br>
                      <br></br>Trinity Street Car Park, Heathmill Lane, B9 4AL
                      <br></br>
                      <br></br>Green Parking Ltd. Digbeth Public Car Park,
                      Oxford St, B5 6DY <br></br>
                      <br></br>Gallan Parking Ltd, Bordesley Street, B5 5BL
                    </p>
                    <h2 className="text-2xl pt-10 pb-2">Taxis</h2>
                    <p className="pb-2 font-sans">
                      Uber and Ola operate in Birmingham, although it will be
                      busy late evening. Here are some local taxi services if
                      you'd prefer to pre-book:
                      <br></br>
                      <p className="pt-2">
                        <a
                          className="no-underline hover:underline text-blue-600 font-sans"
                          href="https://toataxis.co.uk/"
                        >
                          TOA Taxis
                        </a>
                        :{" "}
                        <a className="font-sans" href="tel:+44121 427 8888">
                          0121 427 8888
                        </a>
                      </p>
                      <p className="pt-2">
                        <a
                          className="no-underline hover:underline text-blue-600 font-sans"
                          href="https://www.a2bradiocars.com/"
                        >
                          A2B RadioCars
                        </a>
                        :{" "}
                        <a className="font-sans" href="tel:+44121 744 1111">
                          0121 744 1111
                        </a>
                      </p>
                      <p className="pt-2">
                        <a
                          className="no-underline hover:underline text-blue-600 font-sans"
                          href="https://starcarsbirmingham.com/"
                        >
                          Star Cars
                        </a>
                        :{" "}
                        <a className="font-sans" href="tel:+44121 373 1111">
                          0121 373 1111
                        </a>
                      </p>
                    </p>
                  </div>
                  <iframe
                    title="fazeleyStudios"
                    className="w-full md:w-1/2 mt-10 pt-10"
                    style={{ height: "75vh" }}
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOX7hx4G8cEgRBU7Ph5E3ssU&key=AIzaSyChytbiNTqO0S6j1K5-VBMB3fYEAvHgA_M"
                  ></iframe>
                </div>
              )}
              {index === 3 && (
                <div
                  className={`${alternateSectionStyling(
                    index
                  )} md:flex justify-between`}
                >
                  <div className="md:w-2/3 text-xl font-sans">
                    <h3 className={`text-5xl pb-20`}>{title}</h3>
                    <h2 className="text-2xl">Accomodation</h2>
                    <p className="pt-2 pb-2 font-sans">
                      There is plenty of accomodation in and around the city,
                      but we would advise that you book a place to stay ASAP as
                      the wedding is shortly before the Commonwealth Games,
                      which is taking place in Birmingham.
                    </p>
                    <h2 className="text-2xl pt-10">Gifts</h2>
                    <p className="pt-2 pb-2 font-sans">
                      We don't ask for any gifts, but if you do feel that you
                      would like to give something then please donate to one of
                      our chosen charities below.
                    </p>
                    <a
                      className="no-underline hover:underline text-blue-600 pt-2 pb-2"
                      href="https://www.refugee-action.org.uk/"
                    >
                      Refugee Action
                    </a>
                    <br></br>
                    <a
                      className="no-underline hover:underline text-blue-600 pt-2 pb-2"
                      href="https://sifafireside.co.uk/"
                    >
                      SIFA Fireside
                    </a>
                    <br></br>
                    <a
                      className="no-underline hover:underline text-blue-600 pt-2 pb-2"
                      href="https://www.bwh.org.uk/pages/category/woodland-house"
                    >
                      Woodland House
                    </a>{" "}
                    <h2 className="text-2xl pt-10">Dress code</h2>
                    <p className="pt-2 font-sans">
                      Please wear whatever feels comfortable. After the
                      ceremony, there will be the option to explore the
                      immediate area on foot if the weather is kind. Please
                      bring footwear you'll be comfortable in!
                    </p>
                    <h2 className="text-2xl pt-10">Children</h2>
                    <p className="pt-2  font-sans">
                      No children please (as much as we love them all!)The only
                      children attending are our nieces and nephews, and
                      newborns.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-center font-sans">
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
