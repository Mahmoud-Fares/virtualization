import { ColumnWrapper } from '@/shared/components/column-wrapper';
import { ComparisonLayout } from '@/shared/components/comparison-layout';

import { TanstackBest } from '@/features/tanstack/best';
import { TanstackDemo } from '@/features/tanstack/demo';
import { TanstackWorst } from '@/features/tanstack/worst';

export default function Tanstack() {
   return (
      <ComparisonLayout>
         <ColumnWrapper title='Demo'>
            <TanstackDemo />
         </ColumnWrapper>

         <ColumnWrapper title='Best Case'>
            <TanstackBest />
         </ColumnWrapper>

         <ColumnWrapper title='Worst Case'>
            <TanstackWorst />
         </ColumnWrapper>
      </ComparisonLayout>
   );
}
