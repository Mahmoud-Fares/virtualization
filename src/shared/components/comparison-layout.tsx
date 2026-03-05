type Props = React.ComponentProps<'div'>;

export const ComparisonLayout = ({ children, ...props }: Props) => (
   <div className='grid h-screen grid-cols-3 divide-x' {...props}>
      {children}
   </div>
);
