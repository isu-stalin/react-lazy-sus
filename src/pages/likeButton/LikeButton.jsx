import { useStateValue } from "../../context";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeButton = ({ product }) => {
  const [{ wishlist }, dispatch] = useStateValue();
  const isLiked = wishlist.some(item => item.id === product.id);

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch({ type: "LIKED", payload: product });
  };

  return (
    <button onClick={handleLike} className="text-xl text-red-500">
      {isLiked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default LikeButton;