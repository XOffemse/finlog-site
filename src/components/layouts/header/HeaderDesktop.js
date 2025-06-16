export default function HeaderDesktop({
  headerRef,
  links,
  sidebarOpen,
  setSidebarOpen,
  indicatorStyle,
  handleContainerMouseEnter,
  handleContainerMouseLeave,
  headBG,
}) {
  return (
    <>
      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      <header
        ref={headerRef}
        className="sticky top-0 z-30 flex items-center min-h-[64px] px-4 md:px-12 border-b border-transparent backdrop-blur-sm"
        style={{
          backgroundImage: `url(${headBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-30 pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 flex items-center w-full">
          {/* Hamburger menu (mobile) */}
          <button
            className="md:hidden absolute left-2.5 top-1/2 -translate-y-1/2 p-2 text-white"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
          >
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <rect y="1" width="28" height="3" rx="1.5" fill="white" />
              <rect y="9" width="28" height="3" rx="1.5" fill="white" />
              <rect y="17" width="28" height="3" rx="1.5" fill="white" />
            </svg>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:ml-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-medium leading-none flex items-center"
              style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.05em', color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              FinLog
            </button>
          </div>

          {/* Navigation links (desktop) */}
          <nav
            className="hidden md:flex relative items-center space-x-6 ml-auto"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1rem', letterSpacing: '0.08em', fontWeight: 500, color: 'white' }}
            onMouseLeave={handleContainerMouseLeave}
            aria-label="Primary navigation"
          >
            {links.map((link, idx) => (
              <div key={link.name} className="cursor-pointer px-3 py-5" onMouseEnter={(e) => handleContainerMouseEnter(idx, e)}>
                <a href={link.href} className="block hover:opacity-80 transition-opacity" style={{ color: 'white' }}>
                  {link.name}
                </a>
              </div>
            ))}

            {/* Search icon (desktop) */}
            <button
              className="cursor-pointer px-3 py-2 flex items-center hover:opacity-80 transition-opacity"
              title="Search"
              onClick={() => alert('Search clicked!')}
              style={{ color: 'white' }}
              aria-label="Search"
              type="button"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                style={{ filter: 'brightness(150%)' }}
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M21.7686 20.6539L14.9361 13.8211C16.19 12.3092 16.8774 10.407 16.8774 8.43913C16.8785 3.78604 13.0927 0 8.43869 0C3.78469 0 0 3.78604 0 8.43913C0 13.0922 3.78584 16.8783 8.43869 16.8783C10.4064 16.8783 12.3097 16.1897 13.8215 14.9357L20.654 21.7686C20.8025 21.9171 21.0006 22 21.2113 22C21.422 22 21.62 21.9182 21.7686 21.7686C21.9171 21.62 22 21.422 22 21.2112C22 21.0005 21.9182 20.8025 21.7686 20.6539ZM8.43869 15.371C4.61716 15.371 1.50835 12.262 1.50835 8.44028C1.50835 4.61855 4.61716 1.50843 8.43869 1.50843C12.2602 1.50843 15.369 4.6174 15.369 8.43913C15.369 12.2609 12.2602 15.3698 8.43869 15.3698V15.371Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.75"
                />
              </svg>
            </button>
          </nav>

          {/* Search icon (mobile) */}
          <button
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-2"
            title="Search"
            onClick={() => alert('Search clicked!')}
            style={{ filter: 'brightness(500%)', color: 'white' }}
            aria-label="Search"
            type="button"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" focusable="false">
              <path
                d="M21.7686 20.6539L14.9361 13.8211C16.19 12.3092 16.8774 10.407 16.8774 8.43913C16.8785 3.78604 13.0927 0 8.43869 0C3.78469 0 0 3.78604 0 8.43913C0 13.0922 3.78584 16.8783 8.43869 16.8783C10.4064 16.8783 12.3097 16.1897 13.8215 14.9357L20.654 21.7686C20.8025 21.9171 21.0006 22 21.2113 22C21.422 22 21.62 21.9182 21.7686 21.7686C21.9171 21.62 22 21.422 22 21.2112C22 21.0005 21.9182 20.8025 21.7686 20.6539ZM8.43869 15.371C4.61716 15.371 1.50835 12.262 1.50835 8.44028C1.50835 4.61855 4.61716 1.50843 8.43869 1.50843C12.2602 1.50843 15.369 4.6174 15.369 8.43913C15.369 12.2609 12.2602 15.3698 8.43869 15.3698V15.371Z"
                fill="white"
                stroke="white"
                strokeWidth="0.75"
              />
            </svg>
          </button>
        </div>

        <span
          className={`hidden md:block absolute bottom-0 h-[2px] bg-white transition-opacity duration-150 ease-out pointer-events-none ${
            indicatorStyle.visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            willChange: 'left, width, opacity',
          }}
        />
      </header>
    </>
  );
}
