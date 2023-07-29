import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromOthersCart } from "@/redux/reducers/cartSlice";
import { Button, Card } from "antd";
import Link from "next/link";

const OthersCart = () => {
  const { othersCart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Others"
      extra={
        othersCart.length ? (
          <Button
            type="primary"
            danger
            ghost
            onClick={() => dispatch(removeFromOthersCart())}
          >
            Remove
          </Button>
        ) : (
          <Button type="primary" ghost>
            <Link href="/others">Add</Link>
          </Button>
        )
      }
    >
      {othersCart.length ? (
        othersCart.map((product) => (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            key={product._id}
          >
            <div>
              {" "}
              <img src={product.image} alt={product.productName} width={50} />
              <p>
                <b>Name: </b>
                {product.productName}
              </p>
              <p>
                <b>Rating: </b>
                {product.individualRating} out of 5
              </p>
            </div>
            <b>{product.price}$</b>
          </div>
        ))
      ) : (
        <h3 style={{ textAlign: "center" }}>Select a Other Components</h3>
      )}
    </Card>
  );
};

export default OthersCart;
