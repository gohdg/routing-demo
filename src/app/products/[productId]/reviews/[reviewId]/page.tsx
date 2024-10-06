"use client";
import { notFound } from "next/navigation";

// 	•	Math.random(): 0 이상 1 미만의 난수를 생성.
//	•	Math.floor(): 소수점 이하를 버리고 내림 처리.
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
