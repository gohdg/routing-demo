// export default function ProductDetails({ params }) {
//   return <h1>Details about product {params.productId}</h1>;
//}

// export default function ProductDetails({
//   params,
// }: {
//   params: { productId: string };
// }) {
//   return <h1>Details about product {params.productId}</h1>;
// }

// import { Metadata } from "next";

// type Props = {
//   params: { productId: string };
// };

// export const generateMetadata = ({ params }: Props) => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

// export default function ProductDetails({ params }: Props) {
//   return <h1>Details about product {params.productId}</h1>;
// }

import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}

// new Promise는 인자로 함수를 받고, 이 함수는 executor함수라고 불리며, resolve, reject를 인자로 받는다.
// resolve, reject 또한 함수 이다.

// 기본적인 사용법

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("작업 성공!");
//   } else {
//     reject("작업 실패...");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);  // "작업 성공!" 출력
//   })
//   .catch((error) => {
//     console.log(error);  // "작업 실패..." 출력
//   });
