import image1 from "../../images/1.png";
import image2 from "../../images/2.png";

export function ControlledCarousel() {
  return (
    <div className="w-screen">
      <img
        className="min-w-full absolute z-20 top-20 "
        src={image1}
        alt="Tom and Frankie in 2010"
      />
      <img
        className="min-w-full absolute z-10 top-20 animate-fade"
        src={image2}
        alt="Tom and Frankie in 2021"
      />
    </div>
  );
}
