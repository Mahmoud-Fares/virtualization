import { Virtuoso } from 'react-virtuoso';

import { WorstComponent } from '@/shared/components/worst-component';
import { useVirtualization } from '@/shared/providers/virtualization-provider';

export function VirtuosoWorst() {
   const { array } = useVirtualization();

   return (
      <Virtuoso
         totalCount={array.length}
         itemContent={() => <WorstComponent />}
         className='rounded-md border'
      />
   );
}
