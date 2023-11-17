import SearchBar from "@/components/search/SearchBar";
import HomeIntros from "@/components/home-intros/HomeIntros";

export const metadata = {
  title: "All About Cricket | LiveCricket",
  description: "We talk about only cricket and cricketers. live matches, predictions, ICC ranking, schedules, etc.",
  alternates: {
    canonical: `https://livecricket.watch`
  }
}

export default function Home() {
  return (
    <>
      <SearchBar place="/search" isSingleWordSearch={false} />
      <HomeIntros />
    </>
  )
}
