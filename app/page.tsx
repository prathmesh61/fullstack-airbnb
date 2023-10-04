import CategoryNavbar from "@/components/base/CategoryNavbar";
import HomeCards from "@/components/common/HomeCards";
async function getData(URL: string) {
  const res = await fetch(URL, { next: { revalidate: 20 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getData("http://localhost:3004/api/home");

  return (
    <main className="p-4 border-b-2 border-zinc-200">
      <CategoryNavbar />
      <HomeCards data={data} searchParams={searchParams} />
    </main>
  );
}
