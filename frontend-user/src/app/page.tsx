import Footer from "@/components/layouts/Footer";
import LPHead from "@/components/layouts/LP/LPHead";
import Recruitments from "@/features/Recruitments";

export default function Home() {
  return (
    <div>
      <LPHead />
      <Recruitments />
      {/* <LPBody /> */}
      <Footer />
    </div>
  );
}
