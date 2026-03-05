import { NavLink } from 'react-router-dom';

const SOLUTIONS = [
   {
      title: 'Virtuoso',
      path: '/',
   },
   {
      title: 'Tanstack',
      path: '/tanstack',
   },
];

export function SolutionsNavigator() {
   return (
      <nav className='inline-flex items-center gap-1 rounded-xl bg-zinc-100 p-1'>
         {SOLUTIONS.map(({ title, path }) => (
            <NavLink
               key={path}
               to={path}
               end
               className={({ isActive }) =>
                  [
                     'rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-200',
                     isActive
                        ? 'bg-white text-zinc-900 shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-800',
                  ].join(' ')
               }
            >
               {title}
            </NavLink>
         ))}
      </nav>
   );
}
