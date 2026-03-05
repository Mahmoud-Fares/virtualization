import { Outlet, ScrollRestoration } from 'react-router-dom';

import { SolutionsNavigator } from '@/shared/components/solutions-navigator';

type Props = {
   children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
   return (
      <>
         <ScrollRestoration />

         <div className='flex h-screen flex-col'>
            <div className='flex justify-center gap-2 border-b p-2'>
               <SolutionsNavigator />
            </div>

            <main className='flex flex-1 flex-col'>
               {children ?? <Outlet />}
            </main>
         </div>
      </>
   );
}
