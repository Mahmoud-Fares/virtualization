import { Wifi } from 'lucide-react';

import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from '@/shared/components/ui/tooltip';
import { cn } from '@/shared/lib/utils';

export function SensorComponent() {
   return (
      <Tooltip>
         <TooltipTrigger className='cursor-pointer'>
            <Wifi className={cn('size-4')} />
         </TooltipTrigger>
         <TooltipContent>
            <p className='uppercase'>Toolbar Content</p>
         </TooltipContent>
      </Tooltip>
   );
}
