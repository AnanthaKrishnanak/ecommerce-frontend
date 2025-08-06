import promo from '../../assets/images/promo.jpg';
import { Button, Typography } from 'antd';

const promoItems = [
  {
    label: 'Exclusive Offer',
    message: "Save 5% with code 'NEW5'",
  },
  {
    label: 'Newsletter',
    message: 'Enjoy 15% Off Your Next Beauty Purchase',
  },
  {
    label: 'Hassle-Free Shopping',
    message: 'Enjoy 60 Days of Free Returns',
  },
];

const Promo = () => {
  return (
    <section className="w-full">
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center flex-col gap-8 opacity-95 text-center px-8"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5, 8, 39, 0.4), rgba(5, 8, 39, 0.4)), url(${promo})`,
        }}
      >
        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          Discover the Latest <br />
          in Luxury Cosmetics
        </h1>

        <p className="text-white text-xs  md:text-sm">
          Fresh picks. Bold shades. Luxe textures. Explore the latest drops
          curated to elevate your beauty game — because you deserve nothing
          less.
        </p>
        <Button type="primary" size="large">
          Shop Now
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-8 divide-y md:divide-y-0 md:divide-x divide-[#e9e9e9] px-8">
        {promoItems.map((item, index) => (
          <div key={index} className="text-center px-6 py-8">
            <Typography.Text type="secondary">{item.label}</Typography.Text>
            <h4 className="text-xl font-semibold mt-4">{item.message}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promo;
