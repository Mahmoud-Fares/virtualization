import { Virtuoso } from 'react-virtuoso';

import { useVirtualization } from '@/shared/providers/virtualization-provider';

export function VirtuosoDemo() {
   const { array } = useVirtualization();

   return (
      <Virtuoso
         totalCount={array.length}
         itemContent={(index) => <div>Item {index}</div>}
         className='rounded-md border'
      />
   );
}
