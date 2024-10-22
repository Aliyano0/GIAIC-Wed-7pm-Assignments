import MainContent from "../components/MainContent";

export default function About() {
  const aboutImg =
    "https://images.unsplash.com/photo-1729457046438-73b8f7aa001d?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <MainContent heading={"About"} imageUrl={aboutImg} />
    </div>
  );
}

// flex justify-center items-center text-4xl text-rose-600
