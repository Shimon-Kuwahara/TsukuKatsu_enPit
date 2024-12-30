import Footer from "@/components/layouts/Footer";
import LPHead from "@/components/layouts/LP/LPHead";
import IndexInterns from "@/features/pages/IndexInterns";

export default function Home() {
  return (
    <div>
      <LPHead />
      <IndexInterns />
      {/* <LPBody /> */}
      <Footer />
    </div>
  );
}
