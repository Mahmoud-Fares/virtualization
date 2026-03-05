import { TooltipProvider } from '@/shared/components/ui/tooltip';

import { ThemeProvider } from './theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
   return (
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
         <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
   );
}
