import NavBar from "@/components/navbar";
import { ChevronDownIcon, EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/solid'

export default async function myMemories() {

    async function searchMemories() {
        const uri = "http://localhost:8080/note"
        const memories = await fetch(uri, {next: {revalidate: 0}})

        if(memories.status != 200) {
            console.log("Error loading data")
            return
        }

        return await memories.json()
    }

    const memories = await searchMemories()

    function displayingMemories(memorie) {
        return(
            <div className="flex bg-black mt-5 w-1/2 mx-auto rounded-3xl items-center justify-center py-2 px-2 text-center relative">
                <p className="text-gray-500 absolute left-3 top-3">{memorie.date}</p>
                <p className="text-xl text-orange-400">{memorie.title}</p>
                <div className="flex gap-2 absolute right-3 top-2">
                    <button type="checkbox" id="displayButton "><ChevronDownIcon className='h-6 w-6 text-orange-400'/></button>
                    <button type="checkbox" id="displayButton "><EllipsisHorizontalIcon className='h-7 w-7 text-orange-400'/></button>
                </div>
            </div>
        )
    }

    return(
        <>
            <NavBar/>
            {memories.map(memorie => displayingMemories(memorie))}
            <button className="flex bg-black mt-5 w-1/4 mx-auto rounded-3xl items-center justify-center py-2 px-2 text-lg text-orange-400">Register memory<PlusIcon className="w-6 h-6 ml-4"/></button>
        </>
    )
}