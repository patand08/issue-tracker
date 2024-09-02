import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      <Pagination pageSize={10} itemCount={102} currentPage={2} />
    </div>
  );
}
