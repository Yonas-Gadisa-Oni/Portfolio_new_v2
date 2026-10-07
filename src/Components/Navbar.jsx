const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className='navbar'>
      <a className='navbar-brand' href='#home'>Yonas G.</a>

      <nav className='navbar-menu' aria-label='Primary navigation'>
        <ul className='navbar-links'>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a className='navbar-button' href='#contact'>Hire me</a>
      </nav>
    </header>
  );
}

export default Navbar;
