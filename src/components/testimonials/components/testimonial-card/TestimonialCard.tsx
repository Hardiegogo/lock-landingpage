import "./TestimonialCard.scss";
import { IAuthor } from "../../Testimonials";

function TestimonialCard({ author }: { author: IAuthor }) {
  return (
    <div className="testimonialCard">
      <header>
        <h4>{author.name}</h4>
        <p>{author.tag}</p>
      </header>
      <p>{author.description}</p>
    </div>
  );
}

export default TestimonialCard;
