import { Virtuoso } from 'react-virtuoso';

import { BestComponent } from '@/shared/components/best-component';
import { useVirtualization } from '@/shared/providers/virtualization-provider';

export function VirtuosoBest() {
   const { array } = useVirtualization();

   return (
      <Virtuoso
         totalCount={array.length}
         itemContent={() => <BestComponent />}
         className='rounded-md border'
      />
   );
}
