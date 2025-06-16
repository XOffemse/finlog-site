export default function HeaderSidebar({ sidebarOpen, setSidebarOpen, links, headBG }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-52 z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      aria-hidden={!sidebarOpen}
      role="menu"
      style={{
        backgroundImage: `url(${headBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-90px center',
        color: 'white',
      }}
    >
      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Sidebar content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-600">
          <button
            className="text-2xl font-medium"
            style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.05em', color: 'white' }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setSidebarOpen(false);
            }}
            aria-label="Scroll to top"
          >
            FinLog
          </button>

          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="text-white text-3xl font-extrabold leading-none"
            style={{
              marginTop: '-2px',     // Slight downward nudge
              lineHeight: '1',        // Prevent vertical stretching
              height: '32px',         // Set a fixed height for predictability
              display: 'flex',
              alignItems: 'center',   // Center icon vertically
              justifyContent: 'center',
            }}
          >
            &times;
          </button>

        </div>

        {/* Sidebar navigation links */}
        <nav
          className="flex flex-col mt-8 px-2"
          role="menu"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              role="menuitem"
              tabIndex={0}
              className="
                relative
                text-lg font-medium
                text-white
                py-3
                pl-3
                rounded-md
                transition-colors duration-300
                hover:text-gray-300
                cursor-pointer
                select-none
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
              "
              style={{ letterSpacing: '0.05em' }}
            >
              {link.name}
              <span
                className="
                  absolute left-0 bottom-0 h-[2px] bg-white
                  w-0
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
