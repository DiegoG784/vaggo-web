'use client'
import { useEffect, useState } from "react"
import TabPage from "./tabPage"

export default function TabSidebar({ children, subPages, className }: any) {

    // let [tabPages, setTabPages] = useState<string[] | null>(null)
    let [tabPages, setTabPages] = useState<string[] | null>(null)
    // let sidebarLabels = []

    useEffect(() => {
        const map = []
        for (const [key, value] of Object.entries(subPages)) {
            map.push(key)
            // sidebarLabels.push(key)
            // setTabPages(map)
        }
        console.log(map)
        setTabPages(map)
        // console.log(map)
    }, [])

    //when user clicks on page, displays tabbedPage on selected section (maybe part is done here)

    return (
        <section className={className}>
            {tabPages?.map(section => <a key={section}>{section}</a>)}
        </section>
    )
}
