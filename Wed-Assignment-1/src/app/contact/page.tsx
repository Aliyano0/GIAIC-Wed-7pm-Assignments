import MainContent from "../components/MainContent";

export default async function Contact() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 4000);
  });

  const contactImg =
    "https://images.unsplash.com/photo-1729366790976-81844c8dd310?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <MainContent heading={"Contact"} imageUrl={contactImg} />
    </div>
  );
}
