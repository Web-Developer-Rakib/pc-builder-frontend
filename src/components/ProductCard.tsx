import { EyeOutlined } from "@ant-design/icons";
import { Button, Card, Typography } from "antd";

const ProductCard = () => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 400 }}
      cover={
        <img
          alt="example"
          src="https://c1.neweggimages.com/ProductImage/19-113-103-V07.jpg"
        />
      }
    >
      <Typography.Text>
        <b>Name:</b> Ryzen G-series
      </Typography.Text>
      <br />
      <Typography.Text>
        <b>Category:</b> CPU
      </Typography.Text>
      <br />
      <Typography.Text>
        <b>Price:</b> {500}
      </Typography.Text>
      <br />
      <Typography.Text>
        <b>Status :</b> In Stock
      </Typography.Text>
      <br />
      <Typography.Text>
        <b>Rating :</b> {4} Out of 5 Stars
      </Typography.Text>{" "}
      <br />
      <Button type="primary" style={{ marginTop: 5 }}>
        <EyeOutlined /> Details
      </Button>
    </Card>
  );
};

export default ProductCard;
