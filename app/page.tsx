import CategoryNavbar from "@/components/base/CategoryNavbar";
import HomeCards from "@/components/common/HomeCards";
async function getData(Uri: string) {
  try {
    const res = await fetch(Uri);
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.log("Failed to fetch data", error);
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getData(process.env.NEXT_PUBLIC_URL + "/api/home");

  return (
    <main className="p-4 border-b-2 border-zinc-200">
      <CategoryNavbar />
      <HomeCards searchParams={searchParams} />
    </main>
  );
}
