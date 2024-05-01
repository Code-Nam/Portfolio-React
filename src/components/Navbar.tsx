const Navbar = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = e.currentTarget.getAttribute('href')
    if (!target) return

    const element = document.getElementById(target)
    if (!element) return

    element.scrollIntoView({ behavior: 'smooth' })
  }

  handleScroll;

  return (
    <div className="fixed bottom-10 w-full flex justify-center">
      <ul className="flex bg-purple text-white font-light text-2xl gap-28 py-3 px-28 rounded-full">
          <li><a href="#about">About</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar