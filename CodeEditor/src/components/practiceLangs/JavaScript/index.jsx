import { Outlet, NavLink } from 'react-router-dom';

function JSMain() {
  const navItems = [
    { to: 'basics/intro', label: 'Introduction' },
    { to: 'basics/variables', label: 'Variables' },
    { to: 'basics/datatypes', label: 'Data Types' },
    { to: 'basics/functions', label: 'Functions' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100">
      {/* Sidebar / TopNav */}
      <aside className="w-full md:w-64 bg-white dark:bg-zinc-800 border-b md:border-b-0 md:border-r border-gray-200 dark:border-zinc-700 shadow-md">
        <div className="p-4 md:pb-0">
          <h2 className="text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400 mb-2 md:mb-4">
            JavaScript Tutorial
          </h2>
        </div>
        <nav className="overflow-x-auto md:overflow-visible">
          <ul className="flex md:flex-col gap-2 p-2 md:p-4 text-sm md:text-base font-medium whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition ${
                      isActive
                        ? 'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-white font-semibold'
                        : 'hover:bg-purple-50 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300'
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

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 bg-gray-50 dark:bg-zinc-900 transition">
        <Outlet />
      </main>
    </div>
  );
}

export default JSMain;
