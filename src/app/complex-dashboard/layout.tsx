/************************************************ 
 Parallel Routes 방식
*************************************************/

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div> {/* Content from page.tsx */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}

/************************************************ 
 Traditional 방식
*************************************************/

// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <div>{children}</div> {/* Content from page.tsx */}
//       <UserAnalytics /> {/* Component for user analytics*/}
//       <RevenueMetrics /> {/* Component for revenue metrics*/}
//       <Notifications /> {/* Component for notifications*/}
//     </>
//   );
// }
