import Link from 'next/link'

const navItems = [
    'home',
    'services',
    'doctors',
    'about',
    'contact'
]

function Header() {
    return (
        <header class="bg-transparent flex items-center justify-between">
            <div className="font-medium text-3xl">Yourpet<span className="text-blue-600">.</span></div>
            <div className="flex">
                {
                    navItems.map((x, index) => (
                        <div key={index} className="capitalize text-xl text-gray-600 mr-10">{x}</div>
                    ))
                }
            </div>
        </header>
    )
}

export default Header
