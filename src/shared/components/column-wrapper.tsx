type Props = React.ComponentProps<'div'> & {
   title: string;
};

export const ColumnWrapper = ({ children, title, ...props }: Props) => (
   <div className='flex flex-col gap-4 p-4' {...props}>
      <h2 className='mx-auto text-2xl font-bold'>{title}</h2>
      {children}
   </div>
);
