"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    // home page로 이동
    router.push("/");
    // router.replace("/");
    // router.back();
    // router.forward();
    // router.refresh();
    // router.prefetch("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
