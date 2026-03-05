import { Virtuoso } from 'react-virtuoso';

import { BestComponent } from '@/shared/components/best-component';
import { ColumnWrapper } from '@/shared/components/column-wrapper';
import { ComparisonLayout } from '@/shared/components/comparison-layout';
import { WorstComponent } from '@/shared/components/worst-component';
import { useVirtualization } from '@/shared/providers/virtualization-provider';

export default function Home() {
   const { array } = useVirtualization();

   return (
      <ComparisonLayout>
         <ColumnWrapper title='Demo'>
            <Virtuoso
               totalCount={array.length}
               itemContent={(index) => <div>Item {index}</div>}
               className='rounded-md border'
            />
         </ColumnWrapper>

         <ColumnWrapper title='Best Case'>
            <Virtuoso
               totalCount={array.length}
               itemContent={() => <BestComponent />}
               className='rounded-md border'
            />
         </ColumnWrapper>

         <ColumnWrapper title='Worst Case'>
            <Virtuoso
               totalCount={array.length}
               itemContent={() => <WorstComponent />}
               className='rounded-md border'
            />
         </ColumnWrapper>
      </ComparisonLayout>
   );
}
