import MainContent from "@/app/components/MainContent";

export default function SoftwareEngineering() {
  const softwareEngImg =
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <MainContent heading={"Software Engineering"} imageUrl={softwareEngImg} />
    </div>
  );
}
