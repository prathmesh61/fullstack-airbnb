import CategoryNavbar from "@/components/base/CategoryNavbar";
import HomeCards from "@/components/common/HomeCards";
async function getData(Uri: string) {
  try {
    const res = await fetch(Uri);
    return res.json();
  } catch (error: any) {
    console.log("Failed to fetch data", error);
  }
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
