import Link from 'next/link';

function Logo() {
  return (

    <div className={'logo'}
        ><Link key="mainpage" href="/">
          <a>Грузовой <span>URAL</span></a>
        </Link>

    </div>

  );
};

export default Logo;
