import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../../../../sanity/lib/query"
import type { ProjectType } from "@/app/(portfolio-website)/types/index";
import panversedao from "../../../../public/screencapture-panaverse-dao-staging-vercel-app-2024-01-23-00_27_48.png";


export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 ">
      <section className=" mb-16 flex ">
        <div className="flex-1">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
        It is a clone of Panaverse Dao . And we make this website using Next.js | Tailwind.css | Framer motion | Params | Props | It is a Fully Responsive | we can use it in Laptop | Mobile | Ipad | Computer..
  
        </p>
        
        </div>
        <div className="flex flex-1 justify-center">
            <Image src={panversedao} alt="panaversedao" className=" object-cover "/>
        </div>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="flex items-center gap-x-4  border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src={project.logo}
              width={60}
              height={60}
              alt={project.name}
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">{project.name}</h2>
              <div className="text-sm text-zinc-400">{project.tagline}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}