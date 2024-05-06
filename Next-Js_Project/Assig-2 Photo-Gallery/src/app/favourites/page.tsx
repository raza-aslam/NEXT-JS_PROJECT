import Favourite from "@/components/widgets/favourite";
import { Loader2 } from "lucide-react";
import { Metadata } from "next" 
import { Suspense } from "react"
export const metadata:Metadata = {
  title: "Favourites"
}

export default function Favourites () {
    return(
        <main>
            <Suspense fallback={<div className="flex justify-center items-center mt-48"><Loader2 className='animate-spin w-8 h-8' /></div>}>
            <Favourite/>
            </Suspense>
        </main>
    )
}