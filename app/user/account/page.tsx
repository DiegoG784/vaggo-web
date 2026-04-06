// import Link from "next/link"
// import Image from "next/image";
import Header from "@/component/header"
import TabContainer from "@/component/tabContainer"
import TabPage from "@/component/tabPage"
import TabSidebar from "@/component/tabSidebar"

const TabPageTest = (
    <TabPage label="Tab 1" key={1}>
        <p>hello!</p>
    </TabPage>
)

const TabPageTest2 = (
    <TabPage label='Tab 2' key={2}>
        <p>hello there!</p>
    </TabPage>
)

export default function Page() {

    const subPages = {
        "Tab 1": TabPageTest,
        "Tab 2": TabPageTest2,
    }

    console.log(TabPageTest)
    
    // console.log(SideBar)

    return (
        <main>
            <Header/>
            
            <section className="m-10 bg-gray-200">
                <section className="w-1/4 flex flex-col items-center bg-gray-300">
                    <TabSidebar subPages={subPages} className={"flex flex-col"}/>
                </section>
                <section  className="w-1/2">
                    <TabContainer subPages={subPages}/>
                </section>
            </section>
        </main>
    )
}