import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromMonitorCart } from "@/redux/reducers/cartSlice";
import { Button, Card } from "antd";
import Link from "next/link";

const MonitorCart = () => {
  const { monitorCart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Monitor"
      extra={
        monitorCart.length ? (
          <Button
            type="primary"
            danger
            ghost
            onClick={() => dispatch(removeFromMonitorCart())}
          >
            Remove
          </Button>
        ) : (
          <Button type="primary" ghost>
            <Link href="/monitor">Add</Link>
          </Button>
        )
      }
    >
      {monitorCart.length ? (
        monitorCart.map((product) => (
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
        <h3 style={{ textAlign: "center" }}>Select a Monitor</h3>
      )}
    </Card>
  );
};

export default MonitorCart;
