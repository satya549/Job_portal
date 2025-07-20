import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  return (
    <div className="w-full max-w-md mx-auto my-20">
      <Carousel>
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outline" className="rounded-full">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
