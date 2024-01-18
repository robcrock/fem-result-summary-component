import { Card } from "@/components/Card";
import { Attribution } from "@/components/Attribution";

export default function Home() {
  return (
    <div className="h-[100dvh] w-[100dvw] lg:h-[512px] lg:w-[736px]">
      <Card />
      <Attribution />
    </div>
  );
}
