import { AppstoreAddOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";
import { IProductPageProps } from "../../constants";

export default function ProductCard({ product }: IProductPageProps) {
  return (
    <Card
      hoverable
      style={{ width: 400 }}
      cover={<img alt={product.productName} src={product.image} />}
    >
      <Typography.Text>
        <b>Name:</b> {product.productName}
      </Typography.Text>
      <br />
      <Typography.Text>
        <b>Category:</b> {product.category}
      </Typography.Text>
      <br />
      <Typography.Text>
        <b>Price:</b> {`${product.price}$`}
      </Typography.Text>
      <br />
      <Typography.Text>
        <b>Status :</b> {product.status}
      </Typography.Text>
      <br />
      <Typography.Text>
        <b>Rating :</b> {`${product.individualRating} out of 5 Stars`}
      </Typography.Text>{" "}
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="primary"
          style={{ marginTop: 5, backgroundColor: "#0cb376" }}
        >
          <EyeOutlined /> Details
        </Button>
        <Button type="primary" style={{ marginTop: 5 }}>
          <AppstoreAddOutlined /> Add to builder
        </Button>
      </div>
    </Card>
  );
}
