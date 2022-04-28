import MeaningList from "../components/MeaningList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <h1 className="text-center max-w-7xl mx-auto">
      <SearchBar />
      <MeaningList />
    </h1>
  );
}
