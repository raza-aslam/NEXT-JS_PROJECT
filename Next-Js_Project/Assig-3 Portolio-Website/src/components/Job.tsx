import Image from "next/image";
import { getJob } from "../../sanity/lib/query";
import type { JobType } from "@/app/(portfolio-website)/types/index";
import Link from "next/link";

export default async function Job() {
  const job: JobType[] = await getJob();

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
      </div>

      <div className="grid grid-cols-3 gap-y-12">
        {job.map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
          >
            <Link
              href={data.url}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.name} logo`}
                fill
              />
            </Link>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
           
              <p className="text-base text-zinc-400 my-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );  
}