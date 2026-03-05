import { type ReactNode, createContext, use } from 'react';

type VirtualizationContextType = {
   array: number[];
};

const VirtualizationContext = createContext<VirtualizationContextType | null>(
   null
);

type Props = VirtualizationContextType & {
   children: ReactNode;
};

export function VirtualizationProvider({ children, ...value }: Props) {
   return (
      <VirtualizationContext value={value}>{children}</VirtualizationContext>
   );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useVirtualization() {
   const context = use(VirtualizationContext);

   if (!context)
      throw new Error(
         'Virtualization must be used within a VirtualizationProvider'
      );

   return context;
}
