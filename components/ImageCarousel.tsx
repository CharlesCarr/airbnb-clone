import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageCarousel({ src }: any) {
  return (
    // can customize the arrows so that don't have that background color on hover
    <Carousel infiniteLoop showStatus={false} showThumbs={false} dynamicHeight={true} className="rounded-2xl h-full min-h-full">
      {/* {src.map((el: any) => {
        <div key={el.id}><img src={src[(el.id - 1)]}/></div>
      }} */}

      <div className="rounded-2xl h-full max-h-44">
        <img src={src[0]} className="rounded-2xl h-full object-cover" />
      </div>
      <div className="rounded-2xl h-full max-h-44">
        <img src={src[1]} className="rounded-2xl h-full object-cover" />
      </div>
      <div className="rounded-2xl h-full max-h-44">
        <img src={src[2]} className="rounded-2xl h-full object-cover" />
      </div>
      <div className="rounded-2xl h-full max-h-44">
        <img src={src[3]} className="rounded-2xl h-full object-cover" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
