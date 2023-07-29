import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromRamCart } from "@/redux/reducers/cartSlice";
import { Button, Card } from "antd";
import Link from "next/link";

const RamCart = () => {
  const { ramCart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="RAM"
      extra={
        ramCart.length ? (
          <Button
            type="primary"
            danger
            ghost
            onClick={() => dispatch(removeFromRamCart())}
          >
            Remove
          </Button>
        ) : (
          <Button type="primary" ghost>
            <Link href="/ram">Add</Link>
          </Button>
        )
      }
    >
      {ramCart.length ? (
        ramCart.map((product) => (
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
        <h3 style={{ textAlign: "center" }}>Select a RAM</h3>
      )}
    </Card>
  );
};

export default RamCart;
