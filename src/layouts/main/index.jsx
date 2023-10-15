import { Outlet } from "react-router-dom";
import { useTheme } from "store/theme/hooks";
import { useEffect } from "react";

export default function MainLayout() {
  const theme = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.setProperty("--bg", "var(--hue) 15% 10%");
      document.documentElement.style.setProperty("--txt", "var(--hue) 30% 88%");
      document.documentElement.style.setProperty(
        "--accent",
        "var(--hue) 50% 50%",
      );
      document.documentElement.style.setProperty(
        "--accent-remove",
        "10 55% 50%",
      );
      document.documentElement.style.setProperty(
        "--muted",
        "var(--hue) 20% 4%",
      );
    } else if (theme === "light") {
      document.documentElement.style.setProperty("--bg", "var(--hue) 30% 94%");
      document.documentElement.style.setProperty("--txt", "var(--hue) 40% 5%");
      document.documentElement.style.setProperty(
        "--accent",
        "var(--hue) 55% 50%",
      );
      document.documentElement.style.setProperty(
        "--accent-remove",
        "10 80% 60%",
      );
      document.documentElement.style.setProperty(
        "--muted",
        "var(--hue) 30% 99%",
      );
    }
  }, [theme]);

  return (
    <div className="flex flex-col gap-5 items-center mt-20 w-full">
      <Outlet />
    </div>
  );
}
