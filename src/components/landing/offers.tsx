import { Button, Carousel } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import offers1 from '../../assets/images/offers-1.jpg';
import offers2 from '../../assets/images/offers-2.jpg';
import offers3 from '../../assets/images/offers-3.jpg';
import offer4 from '../../assets/images/promo.jpg';

const slides = [
  {
    image: offers1,
    title: 'Mega Tech Sale',
    description:
      'Enjoy massive discounts of up to 70% on the latest gadgets, smartphones, laptops, and accessories. Don’t miss out — deals valid only while supplies last!',
  },
  {
    image: offers2,
    title: 'Fashion Fiesta',
    description:
      'Discover the latest trends in fashion with up to 50% off on curated styles. From casual to formal, upgrade your wardrobe with stunning outfits at unbeatable prices.',
  },
  {
    image: offers3,
    title: 'Back to School Essentials',
    description:
      'Get your kids ready for the new school year with top deals on backpacks, stationery, lunch boxes, and more. Special bundles and discounts just for students!',
  },
  {
    image: offer4,
    title: 'Home Essentials Bonanza',
    description:
      'Upgrade your home with our Buy 1 Get 1 Free offer on select home and kitchen products. Redefine comfort and convenience — shop now!',
  },
];

const Offers = () => {
  return (
    <Carousel dotPosition="top" autoplay>
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full object-cover h-[300px] sm:h-[400px] md:h-[550px] xl:h-[700px] brightness-65"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-center px-4 sm:px-8">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold  lg:font-extrabold mb-4 drop-shadow-md">
              {slide.title}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl drop-shadow">
              {slide.description}
            </p>
            <Button type="primary" size="large">
              Shop Now
              <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Offers;
