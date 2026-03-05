import { ContextMenu } from '@/shared/components/context-menu';
import { SensorComponent } from '@/shared/components/sensor-component';

export function BestComponent() {
   return (
      <div>
         <div>
            <input type='checkbox' />

            <div>
               <span>device.name</span>
               <span>device.lastUpdateTime</span>
            </div>
         </div>

         <div>
            <SensorComponent />
            <SensorComponent />
            <SensorComponent />
            <SensorComponent />

            <ContextMenu />
         </div>
      </div>
   );
}
