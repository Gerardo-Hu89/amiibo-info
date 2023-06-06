import { useEffect, useState } from 'react';
import { AmiiboBox } from './amiibo-box';
import { Amiibo } from '../types/amiibo';

export const RowContainer = (): JSX.Element => {
  const [data, setData] = useState<Amiibo[]>([]);

  useEffect(() => {
    const getAllAmiibos = async () => {
      try {
        const response = await fetch('https://www.amiiboapi.com/api/amiibo/');
        const json = await response.json();

        const filteredFigures = json.amiibo.filter((item: Amiibo) => item.type === 'Figure');
        setData(filteredFigures);
      } catch (error) {
        console.error(error);
      }
    };
    getAllAmiibos();
  }, []);

  return (
    <div className='grid  gap-x-2 gap-y-2 border-t border-gray-200 sm:mt-16 sm:pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data?.map((item: Amiibo) => (
        <AmiiboBox data={item} />
      ))}
    </div>
  );
};
