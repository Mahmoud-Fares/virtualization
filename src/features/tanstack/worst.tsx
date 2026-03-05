import { useRef } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

import { WorstComponent } from '@/shared/components/worst-component';
import { useVirtualization } from '@/shared/providers/virtualization-provider';

export function TanstackWorst() {
   const parentRef = useRef(null);

   const { array } = useVirtualization();

   // eslint-disable-next-line react-hooks/incompatible-library
   const rowVirtualizer = useVirtualizer({
      count: array.length,
      getScrollElement: () => parentRef.current,
      estimateSize: () => 60,
      overscan: 5,
   });

   return (
      <div ref={parentRef} className='h-[85vh] overflow-auto rounded-md border'>
         <div
            style={{
               height: `${rowVirtualizer.getTotalSize()}px`,
            }}
            className='relative'
         >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => (
               <div
                  key={virtualRow.key}
                  style={{
                     height: `${virtualRow.size}px`,
                     transform: `translateY(${virtualRow.start}px)`,
                  }}
                  className='absolute top-0 left-0 w-full'
               >
                  <WorstComponent />
               </div>
            ))}
         </div>
      </div>
   );
}
