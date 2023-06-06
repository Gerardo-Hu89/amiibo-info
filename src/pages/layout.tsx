interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props): JSX.Element => (
  <div className='bg-white py-24'>
    <div className='mx-auto max-w-7xl px-6 lg:px-8'>{children}</div>
  </div>
);
