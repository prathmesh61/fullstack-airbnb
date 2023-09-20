import HomeCards from "@/components/common/HomeCards";
async function getData(URL: string) {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData(process.env.NEXT_PUBLIC_URL! + "/api/home");

  return (
    <main className="p-4">
      <HomeCards data={data} />
    </main>
  );
}
