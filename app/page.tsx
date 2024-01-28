import DesktopIntro from "@/components/desktop-intro/DesktopIntro";
import MobileIntro from "@/components/mobile-intro/MobileIntro";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MobileIntro />
      <DesktopIntro />
    </div>
  );
}
