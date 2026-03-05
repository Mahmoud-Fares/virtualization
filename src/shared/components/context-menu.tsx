import {
   Calendar,
   Clock,
   ClockFadingIcon,
   Edit,
   EyeOff,
   MoreVertical,
   Motorbike,
   Route,
   Send,
   Share,
} from 'lucide-react';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';

export function ContextMenu() {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <MoreVertical className='size-4 cursor-pointer' />
         </DropdownMenuTrigger>
         <DropdownMenuContent align='start' className='text-sm font-semibold'>
            <DropdownMenuItem>
               <ClockFadingIcon className='text-muted-foreground/60' />
               <span> Show history (Last hour)</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <Clock className='text-muted-foreground/60' />
               <span>Show history (Today)</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <Calendar className='text-muted-foreground/60' />
               <span>Show history (Yesterday)</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
               <Route className='text-muted-foreground/60' />
               <span>Follow</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <Send className='text-muted-foreground/60' />
               <span>Send command</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
               <Edit className='text-muted-foreground/60' />
               <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <Share className='text-muted-foreground/60' />
               <span>Sharing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <Motorbike className='text-muted-foreground/60' />
               <span>Checklist QR Code</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <EyeOff className='text-muted-foreground/60' />
               <span>Alerts</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <EyeOff className='text-muted-foreground/60' />
               <span>Hide</span>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
