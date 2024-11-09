import Customize from "./components/Customize";
import Extension from "./components/Extension";
import Hero from "./components/Hero";
import Sponsor from "./components/Sponsor";
import WorkManagement from "./components/WorkManagement";
import YourWork from "./components/YourWork";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkManagement />
      <Extension />
      <Customize />
      <YourWork />
      <Sponsor />
    </>
  );
}
