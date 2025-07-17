import { NavLink, Outlet } from 'react-router-dom';

const WebDevelopment = () => {
  const navItems = [
    { to: 'html', label: 'HTML' },
    { to: 'css', label: 'CSS' },
    // { to: 'js', label: 'JavaScript' },
    // { to: 'react', label: 'React' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Sidebar / Top Nav */}
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200 shadow-md">
        <div className="p-4 md:pb-0">
          <h2 className="text-lg md:text-xl font-bold text-purple-600 mb-2 md:mb-4">
            Web Development
          </h2>
        </div>
        <nav className="overflow-x-auto md:overflow-visible">
          <ul className="flex md:flex-col gap-2 p-2 md:p-4 text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded transition hover:bg-purple-100 ${
                      isActive ? 'text-purple-600 font-semibold' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default WebDevelopment;
