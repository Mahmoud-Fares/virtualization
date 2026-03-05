import { ContextMenu } from '@/shared/components/context-menu';
import { SensorComponent } from '@/shared/components/sensor-component';
import { Checkbox } from '@/shared/components/ui/checkbox';

export function WorstComponent() {
   return (
      <div className='text-muted-foreground/60 hover:bg-accent-blue flex items-center justify-between p-3 text-xs transition-colors duration-200'>
         <div className='flex grow items-center gap-2'>
            <Checkbox />

            <div className='flex flex-col'>
               <span className='text-foreground text-sm font-semibold'>
                  device.name
               </span>
               <span>device.lastUpdateTime</span>
            </div>
         </div>

         <div className='flex items-center gap-3 ps-2'>
            <SensorComponent />
            <SensorComponent />
            <SensorComponent />
            <SensorComponent />

            <ContextMenu />
         </div>
      </div>
   );
}
