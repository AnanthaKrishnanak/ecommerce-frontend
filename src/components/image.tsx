import { Image as AntImage, type ImageProps } from "antd";

import fallbackImage from "../assets/image-fallback.png";

const Image = (props: ImageProps) => {
  return <AntImage preview={false} fallback={fallbackImage} {...props} />;
};

export default Image;
