
const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <header>
            <h1>Business Register</h1>
            {children}
        </header>
    )
}

export default Header