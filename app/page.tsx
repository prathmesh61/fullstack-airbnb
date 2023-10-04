import CategoryNavbar from "@/components/base/CategoryNavbar";
import HomeCards from "@/components/common/HomeCards";
async function getData(URL: string) {
  const res = await fetch(URL, { next: { revalidate: 60 } });

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
  const data = await getData(process.env.NEXT_PUBLIC_URL! + "/api/home");

  return (
    <main className="p-4">
      <CategoryNavbar />
      <HomeCards data={data} searchParams={searchParams} />
    </main>
  );
}
