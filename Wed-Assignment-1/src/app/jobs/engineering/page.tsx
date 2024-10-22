import MainContent from "@/app/components/MainContent";

export default function Engineering() {
  const engImg =
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <MainContent
        heading={"Engineering"}
        imageUrl={engImg}
        softwareEngUrl="engineering/software-engineering"
      />
    </div>
  );
}
