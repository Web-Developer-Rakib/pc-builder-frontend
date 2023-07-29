import { useAppSelector } from "@/redux/hooks";
import { Button } from "antd";
import { toast } from "react-toastify";

const BuildButton = () => {
  const { cpuCart, ramCart, psuCart, sdCart, monitorCart, othersCart } =
    useAppSelector((state) => state.cart);
  const handleBuild = () => {
    if (
      !cpuCart.length ||
      !ramCart.length ||
      !psuCart.length ||
      !sdCart.length ||
      !monitorCart.length ||
      !othersCart.length
    ) {
      toast.warn("Please select all items");
    } else {
      toast.success("Build successful");
    }
  };
  return (
    <Button type="primary" onClick={handleBuild}>
      Build
    </Button>
  );
};

export default BuildButton;
