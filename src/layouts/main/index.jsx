import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col gap-5 items-center mt-20 w-full">
      <Outlet />
    </div>
  );
}
