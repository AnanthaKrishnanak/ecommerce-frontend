import React from 'react';
import { Button, Divider, Drawer, Flex } from 'antd';
import { Link } from 'react-router-dom';
import Icon, { CloseOutlined, MenuOutlined } from '@ant-design/icons';

import { paths } from '@/config/paths';

import Logo from './logo';

const links = ['About', 'Docs', 'Pricing', 'Blog', 'Contact'];

const MobileNavbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Icon
        component={MenuOutlined}
        className="cursor-pointer text-lg"
        onClick={() => setOpen(true)}
      />
      <Drawer
        open={open}
        placement="right"
        onClose={() => setOpen(false)}
        width="100%"
        closable={false}
        title={
          <Flex align="center" justify="space-between">
            <Logo height={28} width={28} />
            <Icon
              component={CloseOutlined}
              className="cursor-pointer bg-gray-100 p-2 rounded-lg"
              onClick={() => setOpen(false)}
            />
          </Flex>
        }
      >
        <div className="flex flex-col gap-2 h-full">
          {links.map((link) => (
            <Link to={paths.home.getHref()} key={link}>
              <Button type="text">{link}</Button>
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-auto">
            <Divider style={{ margin: 0 }} />
            <Button type="text">Register</Button>
            <Button type="primary">Login</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full flex justify-between items-center ${className}`}>
      <Link to={paths.home.getHref()}>
        <Logo className=" h-8 w-8  md:h-10 md:w-10" />
      </Link>
      <div className="hidden md:block">
        <Flex gap={0} align="center">
          {links.map((link) => (
            <Button type="text" key={link}>
              {link}
            </Button>
          ))}
          <Divider type="vertical" />
          <Button type="text" className="mr-2">
            Register
          </Button>
          <Button type="primary">Login</Button>
        </Flex>
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
