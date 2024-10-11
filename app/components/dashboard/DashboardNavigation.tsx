import Link from "next/link"

type linkType = {
    name: string,
    href: string
}
const links: linkType[] = [
    {
        name: 'Dashboard',
        href: '/dashboard'
    },
    {
        name: 'Orders',
        href: '/dashboard/orders'
    },
    {
        name: 'Products',
        href: '/dashboard/products'
    },
    {
        name: 'Categories',
        href: '/dashboard/categories'
    }
]
export function DashboardNavigation() {
    return (
        <>
            {links.map((item: linkType) => (
                <Link key={item.href} href={item.href}>{item.name}</Link>
            ))}   
        </>
    )
}