const navItems = [
    'home',
    'services',
    'doctors',
    'about',
    'contact'
]

function Header() {
    return (
        <header className="bg-transparent flex items-center justify-between">
            <div className="font-medium text-3xl">Yourpet<span className="text-blue-600">.</span></div>
            <ul className="flex space-x-10">
                {
                    navItems.map((x, index) => (
                        <li key={index} className="capitalize text-xl cursor-pointer hover:text-blue-600 hover:font-medium text-gray-600">{x}</li>
                    ))
                }
            </ul>
        </header>
    )
}

export default Header
