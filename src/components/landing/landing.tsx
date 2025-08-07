import { Layout } from 'antd';
import Navbar from '../navbar';
import Promo from './promo';
import Footer from '../footer';
import NewArrivals from './new-arriavals';
import Offers from './offers';

const Landing = () => {
  return (
    <Layout className="overflow-hidden">
      <Layout.Header className="flex items-center border-b border-[#e9e9e9]">
        <Navbar className="w-full px-4 md:px-12" />
      </Layout.Header>
      <Layout.Content>
        <div className="flex flex-col gap-20">
          <Promo />
          <NewArrivals />
          <NewArrivals />
          <Offers />
          <NewArrivals />
        </div>
      </Layout.Content>
      <Layout.Footer className="bg-white" style={{ padding: 0 }}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default Landing;
