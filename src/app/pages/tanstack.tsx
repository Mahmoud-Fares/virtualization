import { ColumnWrapper } from '@/shared/components/column-wrapper';
import { ComparisonLayout } from '@/shared/components/comparison-layout';
import { TanstackBest } from '@/shared/components/tanstack/best';
import { TanstackDemo } from '@/shared/components/tanstack/demo';
import { TanstackWorst } from '@/shared/components/tanstack/worst';

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
