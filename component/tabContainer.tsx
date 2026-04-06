import TabPage from "@/component/tabPage"
import TabSidebar from "./tabSidebar"

interface TabContainerProps {
    subPages:typeof TabPage[],
    sidebar:typeof TabSidebar
}

export default function TabContainer({subPages, sidebar}:any) {

    let tabPages = subPages
    let CurrentTab =  []
    let tabSidebar = sidebar

    // console.log(tabPages)
    // console.log(tabSidebar)

    return (
        <section>

        </section>
    )
}
