import { Amiibo } from '../types/amiibo';
import { Prettify } from '../types/prettify';

interface Data {
  data: Prettify<Amiibo>;
}

export const AmiiboBox = ({ data }: Data): JSX.Element => {
  return (
    <article className='flex max-w-xl flex-col items-start justify-between px-4 py-4 border border-gray-500'>
      <img src={data.image} alt={data.name} className='mx-auto w-20' />
      <div className='group relative'>
        <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
          <div>
            <span className='absolute inset-0'></span>
            {data.name}
          </div>
        </h3>
        <div className='line-clamp-3 text-sm leading-6 text-gray-600'>{data.gameSeries} series</div>
        <div className='line-clamp-3 text-sm leading-6 text-gray-600'>
          Available: {data.release?.au}
        </div>
      </div>
    </article>
  );
};
