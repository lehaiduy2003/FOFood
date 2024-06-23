
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen w-screen bg-slate-300">
            <header className="flex flex-col items-center bg-white w-screen h-40">
                <h1 className="text-black text-2xl">Register</h1>
            </header>
            <main className="bg-white mt-2 h-auto w-screen">
                {children}
            </main>
            <footer className="bg-white border-t-2 border-slate-500 h-20 border-solid flex items-center justify-center">
                <button className="btn btn-lg btn-outline btn-neutral bg-blue-400 text-black hover:bg-blue-700">Next</button>
            </footer>
        </div>
    )
}

export default Layout