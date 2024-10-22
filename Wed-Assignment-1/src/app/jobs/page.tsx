import MainContent from "../components/MainContent";

export default function Jobs() {
  const jobsImg =
    "https://images.unsplash.com/photo-1729366790961-3c761ce63366?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <MainContent heading={"Jobs"} imageUrl={jobsImg} />
    </div>
  );
}
