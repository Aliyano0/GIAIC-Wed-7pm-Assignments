import MainContent from "./components/MainContent";

export default function Home() {
  const homeImg =
    "https://images.unsplash.com/photo-1729108656013-f6a31d89fb17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
      <div>
        <MainContent heading={"Home"} imageUrl={homeImg} />
      </div>
  );
}
