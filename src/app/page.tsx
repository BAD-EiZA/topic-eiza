import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/nextauth";
import {redirect} from "next/navigation"

export default async function Home() {
  const session = await getAuthSession()
  if(session?.user){
    return redirect("/dashboard")
  }
  return (
    <div className="">
      <Hero imageHero="https://i.imgur.com/VBh8aeg.png"/>
      <Featured/>
    </div>
    )
}
