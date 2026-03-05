type Props = React.ComponentProps<'div'>;

export const ComparisonLayout = ({ children, ...props }: Props) => (
   <div className='grid flex-1 grid-cols-3 divide-x' {...props}>
      {children}
   </div>
);
