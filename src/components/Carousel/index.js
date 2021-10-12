import image1 from "../../images/1.png";
import image2 from "../../images/2.png";

export function ControlledCarousel() {
  return (
    <div className="absolute top-20">
      <div className="absolute w-screen min-h-screen pb-2/3">
        <img
          className="w-full h-full absolute z-20 object-cover"
          src={image1}
          alt="Tom and Frankie in 2010"
        />
        <img
          className="w-full h-full absolute z-10 object-cover"
          src={image2}
          alt="Tom and Frankie in 2021"
        />
      </div>
      <div>
        <p>After 12 years</p>
        <p>We're getting married!</p>
      </div>
    </div>
  );
}
