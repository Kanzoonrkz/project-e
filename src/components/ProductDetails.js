import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <>
      <nav>Navbar</nav>
      <Link to="/" className="underline">
        Back to List
      </Link>
      <div>
        This is the <b>{productId}</b> details
      </div>
      <div>Even more product Details</div>
    </>
  );
};

export default ProductDetails;
