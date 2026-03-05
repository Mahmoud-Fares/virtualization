import { ColumnWrapper } from '@/shared/components/column-wrapper';
import { ComparisonLayout } from '@/shared/components/comparison-layout';

import { VirtuosoBest } from '@/features/virtuoso/best';
import { VirtuosoDemo } from '@/features/virtuoso/demo';
import { VirtuosoWorst } from '@/features/virtuoso/worst';

export default function Home() {
   return (
      <ComparisonLayout>
         <ColumnWrapper title='Demo'>
            <VirtuosoDemo />
         </ColumnWrapper>

         <ColumnWrapper title='Best Case'>
            <VirtuosoBest />
         </ColumnWrapper>

         <ColumnWrapper title='Worst Case'>
            <VirtuosoWorst />
         </ColumnWrapper>
      </ComparisonLayout>
   );
}
