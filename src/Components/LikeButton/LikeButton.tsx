import { ReactNode, useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [like, updateLike] = useState(false);

    const toggle = () => {
      
    updateLike(!like);
    onClick();
  };

  if (like) return <div>{<FcLike size={50} onClick={toggle} />}</div>;
  return <div>{<FcLikePlaceholder size={50} onClick={toggle} />}</div>;
};

export default LikeButton;
