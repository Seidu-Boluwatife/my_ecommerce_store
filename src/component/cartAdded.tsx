import { X } from "lucide-react";
import Button from "./button";
import { useAppSelector } from "../redux/hooks";
import CartProduct from "./CartProducts";
import Footer from "./footer";

type CartAddedProps = {
  onClose?: () => void;
  setOpenCart?: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartAdded: React.FC<CartAddedProps> = ({ setOpenCart }) => {
  const products = useAppSelector((state) => state.CartAdded);

  const getTotal = () => {
    let Total = 0;
    products.forEach((item) => {
      Total += Math.ceil(item.price) * item.quantity;
    });
    return Total;
  };

  return (
    <div className="min-h-screen w-full bg-white p-4   pt-16  ">
      <div className="mt-10 md:mt-16 mb-10 sm:p-8">


        <div className="flex justify-between items-center ">
          <h3 className="text-2xl font-bold">Your Cart</h3>
          <X className="cursor-pointer" onClick={() => setOpenCart && setOpenCart(false)} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {products?.map((item: any) => (
              <CartProduct
                key={item.id}
                id={item.id}
                image={item.image}
                text={item.text}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="border rounded p-4 shadow-md">
            <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₦{getTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount (-20%)</span>
              <span className="text-red-500">-₦{(getTotal() * 0.2).toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Delivery Fee</span>
              <span>₦1500</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₦{(getTotal() * 0.8 + 1500).toLocaleString()}</span>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <Button className="w-full bg-black text-white">Go to Checkout</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
     
    </div>
  );
};

export default CartAdded;
