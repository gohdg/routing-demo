// Metadata를 handling 하기 위해서는 metadata라는 object를 생성하고, key: value를 작성하면 된다.
// metadata의 key는 title, description, keywords, openGraph, twitter, viewport, robots, alternates, icons, themeColor

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

// import { Metadata } from "next";

export const metadata = {
  title: {
    default: "Next.js Tutorial - Codevolution", // segment page에 title이 정의되어 있지 않으면 default 값이 보여진다.
    template: "%s | Codevolution", // segment page에서 title metadata가 정의되어 있으면 %s 자리에 segment page에서 정의한 title이 보여진다.
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <p>Header</p>
        </header>

        {children}

        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
