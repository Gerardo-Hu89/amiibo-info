import amiiboLogo from '../assets/images/logo-amiibo-glow.avif';
import amiiboCharacters from '../assets/images/amiibo-lineup-img.jpeg';

export const Header = (): JSX.Element => {
  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        <img className='w-56' alt='amiibo-logo' src={amiiboLogo} />
      </h2>
      <div>
        <img className='pt-10' alt='characters' src={amiiboCharacters} />
      </div>

      <div className='mt-2 mx-auto leading-8 text-lg text-gray-600'>amiibo Character Lineup</div>
      <div className='mt-2 leading-8 text-gray-600'>
        Score additional characters, bonuses, or other perks in compatible games.
      </div>
    </>
  );
};
