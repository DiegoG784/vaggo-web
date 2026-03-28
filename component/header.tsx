
export default function Header() {
    
    return (
        <main>
            <header className="flex flex-row px-3 bg-white h-[52px]">

                <div className="flex flex-row items-center w-1/2">
                <a href="/">
                    <img src={"/icons/globe.ico"} width={32} height={32}/>
                </a>

                </div>
                <div className="flex flex-row-reverse items-center w-1/2">
                <a href="/login" className="h-fit">
                    {/* <img src={"/globe.svg"}/> */}
                    <img src={"/icons/user-silhouette.ico"} width={32} height={32}/>
                </a>
                    {/* insert user window with buttons here */}
                </div>

            </header>

        </main>
    )
}