import Link from 'next/link'
import Image from 'next/image'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },

]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          {/* Logo */}
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="Logo"
          />
          <p className="nav-logo">
            Price<span className="text-primary">Wise</span>
          </p>
        </Link>
        {/* Icons */}
        <div className="flex items-center gap-5">
          {navIcons.map((icon, index) => (
            <Image 
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar