import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import image4 from "../../images/4.png";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import image7 from "../../images/7.png";
import image8 from "../../images/8.png";

export function ControlledCarousel() {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={image4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={image5} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={image6} alt="Sixth slide" />
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={image7} alt="Seventh slide" />
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img className="d-block w-100" src={image8} alt="Eighth slide" />
      </Carousel.Item>
    </Carousel>
  );
}
