
import "./Testimonials.scss";
import Vector from "../../assets/Vector.png";
import Carousel from "../infinite-auto-carousel/Carousel";

export interface IAuthor {
  name: string;
  tag: string;
  description: string;
}

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="heading">
        <h2>Testimonials</h2>
        <hr />
      </div>
      <div className="testimonialsSection">
        <div className="vectorImg">
          <img src={Vector} alt="" className="vectorImg" />
        </div>
        <div className="testimonialCarousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
