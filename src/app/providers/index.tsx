import { TooltipProvider } from '@/shared/components/ui/tooltip';
import { VirtualizationProvider } from '@/shared/providers/virtualization-provider';

import { ThemeProvider } from './theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
   return (
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
         <VirtualizationProvider array={Array.from({ length: 5000 })}>
            <TooltipProvider>{children}</TooltipProvider>
         </VirtualizationProvider>
      </ThemeProvider>
   );
}
