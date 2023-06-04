import Filters from "@/components/Filters";
import Location from "@/components/Location";
import { locations } from "@/lib/data";

export default function Home() {
  return (
    <div className="py-3 px-6 w-full h-full">
      <Filters />

      <div className="my-4 grid gap-8 grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <div key={location.id}>
            <Location data={location} />
          </div>
        ))}
      </div>
    </div>
  );
}
