import Typography from "@/components/ui/Typography";
import { MultiList } from "./MultiList";
import { locationData } from "./constant";

export function WhereWeOperate() {
  return (<>
  <section className="p-6">
    <Typography variant="h2" className="flex justify-center font-bold text-gray-900 m-4 mb-10">
      <span>Where We Operate</span>
    </Typography>
    <div className="2xl:m-10 xl:m-2 m-2">
      <MultiList data={locationData} />
    </div>
  </section>
  </>)
}