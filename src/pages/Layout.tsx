import { Link, Outlet } from "react-router-dom"
function MainMenu(){
    
    return <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4">
    <ul className="flex flex-row justify-center gap-4 list-none">
        <li>
            <Link to="/SobreMi" className="text-blue-500 hover:underline">Acerca de mi</Link>
        </li>
        <li>
            <Link to="/Trayectoria" className="text-blue-500 hover:underline">Trayectoria</Link>
        </li>

        <li>
            <Link to="/Superacion" className="text-blue-500 hover:underline">Superacion</Link>
        </li>
        <li>
            <Link to="/Form" className="text-blue-500 hover:underline">Formulario</Link>
        </li>
        
    </ul>
</nav>
}

const Footer = () => <footer>Pagina creada por Anxo</footer>

function Layout(){
    return (
    <main className="flex flex-col items-center pt-20">
        <img src="" alt=""/>
        <MainMenu/>
        <Outlet/>
        <Footer/>
    </main>
    )
}


export default Layout