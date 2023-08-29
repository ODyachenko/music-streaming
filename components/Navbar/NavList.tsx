import { NavItem } from './NavItem';
import { INavLinks } from '@/@types';
import { FC } from 'react';

const navLinks: INavLinks[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M8.96509 22.9219V19.2441C8.96508 18.3122 9.72292 17.555 10.6616 17.5492H14.1083C15.0512 17.5492 15.8156 18.308 15.8156 19.2441V22.9113C15.8156 23.7196 16.4724 24.3765 17.2866 24.3824H19.6381C20.7363 24.3852 21.7906 23.9541 22.5682 23.1841C23.3457 22.4141 23.7827 21.3685 23.7827 20.2782V9.83114C23.7827 8.95037 23.3895 8.11492 22.709 7.54984L14.7204 1.20699C13.3239 0.0975544 11.3295 0.133393 9.97441 1.29227L2.15757 7.54984C1.44492 8.09826 1.01897 8.93619 0.997925 9.83114V20.2675C0.997925 22.5401 2.85355 24.3824 5.14257 24.3824H7.44038C7.83238 24.3852 8.2093 24.2326 8.4875 23.9584C8.7657 23.6842 8.92215 23.3111 8.92214 22.9219H8.96509Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
      </svg>
    ),
    value: 'Home',
    path: '/',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
      >
        <path
          d="M20.3864 6.47703H19.1872V4.69022C19.1872 3.69488 18.3717 2.87943 17.3764 2.87943H11.4044C10.409 2.87943 9.59357 3.69488 9.59357 4.69022V6.47703H8.39437C7.07525 6.47703 5.99597 7.55631 5.99597 8.87543V9.03133C6.37972 8.9234 6.77545 8.87543 7.19517 8.87543H21.5856C22.0053 8.87543 22.401 8.9234 22.7848 9.03133V8.87543C22.7848 7.55631 21.7055 6.47703 20.3864 6.47703Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M16.7049 21.0833C16.3212 21.0833 16.0214 21.3951 16.0214 21.7668C16.0214 22.1386 16.3332 22.4504 16.7049 22.4504C17.0767 22.4504 17.3885 22.1386 17.3885 21.7668C17.3885 21.3951 17.0767 21.0833 16.7049 21.0833Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M10.8767 22.1386C10.4929 22.1386 10.1931 22.4504 10.1931 22.8221C10.1931 23.1939 10.5049 23.5057 10.8767 23.5057C11.2484 23.5057 11.5602 23.1939 11.5602 22.8221C11.5602 22.4504 11.2604 22.1386 10.8767 22.1386Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M22.7849 10.8301C22.4011 10.7222 22.0054 10.6742 21.5857 10.6742H7.19524C6.77552 10.6742 6.37978 10.7222 5.99604 10.8301C3.93341 11.3698 2.39844 13.2525 2.39844 15.471V22.6662C2.39844 25.3045 4.557 27.4631 7.19524 27.4631H21.5857C24.2239 27.4631 26.3825 25.3045 26.3825 22.6662V15.471C26.3825 13.2525 24.8475 11.3698 22.7849 10.8301ZM19.1873 16.7062V21.7668C19.1873 23.1339 18.072 24.2492 16.7049 24.2492C15.3378 24.2492 14.2226 23.1339 14.2226 21.7668C14.2226 20.3998 15.3378 19.2845 16.7049 19.2845C16.9447 19.2845 17.1726 19.3325 17.3884 19.3924V17.8814L13.3711 18.9727V22.8221C13.3711 22.8341 13.3711 22.8461 13.3591 22.8581C13.3471 24.2132 12.2319 25.3165 10.8768 25.3165C9.5097 25.3165 8.39444 24.2012 8.39444 22.8221C8.39444 21.4431 9.5097 20.3398 10.8768 20.3398C11.1166 20.3398 11.3445 20.3878 11.5723 20.4477V18.2892V16.4304C11.5723 15.3991 12.2199 14.5597 13.2032 14.2958L16.3811 13.4204C17.4004 13.1446 18.048 13.4084 18.4078 13.6842C18.7675 13.9601 19.1873 14.4997 19.1873 15.567V16.7062Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
      </svg>
    ),
    value: 'My Collections',
    path: '/collections',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
      >
        <path
          d="M9.29367 2.96004V6.55764H8.39427C8.08248 6.55764 7.78268 6.56963 7.49487 6.6176V2.96004C7.49487 2.46837 7.9026 2.06064 8.39427 2.06064C8.88595 2.06064 9.29367 2.46837 9.29367 2.96004Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M20.3864 6.55765H8.39444C8.08265 6.55765 7.78285 6.56964 7.49504 6.61761C4.4011 6.97737 2.39844 9.26784 2.39844 12.5537V20.9481C2.39844 24.5457 4.79684 26.9441 8.39444 26.9441H20.3864C23.9841 26.9441 26.3825 24.5457 26.3825 20.9481V12.5537C26.3825 8.95605 23.9841 6.55765 20.3864 6.55765ZM9.44974 19.7489C7.79484 19.7489 6.45174 18.4058 6.45174 16.7509C6.45174 15.096 7.79484 13.7529 9.44974 13.7529C11.1046 13.7529 12.4477 15.096 12.4477 16.7509C12.4477 18.4058 11.1046 19.7489 9.44974 19.7489ZM17.2445 20.0487H16.6449C16.1533 20.0487 15.7455 19.6409 15.7455 19.1493C15.7455 18.6576 16.1533 18.2499 16.6449 18.2499H17.2445C17.7362 18.2499 18.1439 18.6576 18.1439 19.1493C18.1439 19.6409 17.7362 20.0487 17.2445 20.0487ZM21.4417 20.0487H20.8421C20.3505 20.0487 19.9427 19.6409 19.9427 19.1493C19.9427 18.6576 20.3505 18.2499 20.8421 18.2499H21.4417C21.9334 18.2499 22.3411 18.6576 22.3411 19.1493C22.3411 19.6409 21.9334 20.0487 21.4417 20.0487ZM21.4417 15.2519H16.6449C16.1533 15.2519 15.7455 14.8441 15.7455 14.3525C15.7455 13.8608 16.1533 13.4531 16.6449 13.4531H21.4417C21.9334 13.4531 22.3411 13.8608 22.3411 14.3525C22.3411 14.8441 21.9334 15.2519 21.4417 15.2519Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
      </svg>
    ),
    value: 'Playlists',
    path: '/playlists',
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
      >
        <path
          d="M13.491 9.76819H2.39844V19.7575C2.39844 19.8295 2.39844 19.9014 2.41043 19.9614H13.491V9.76819Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M9.2218 7.96939H13.491V2.74088H9.25778V7.82549C9.25778 7.87345 9.23379 7.92142 9.2218 7.96939Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M7.45905 7.82549V2.93275C4.79683 3.48438 3.05799 5.2592 2.55432 7.96939H7.48304C7.47104 7.92142 7.45905 7.87345 7.45905 7.82549Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M19.451 2.74088H15.2898V7.96939H19.451V2.74088Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M21.2378 7.96939H26.2265C25.7228 5.23521 23.96 3.4484 21.2498 2.92075V7.93341C21.2498 7.94541 21.2378 7.9574 21.2378 7.96939Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M21.2498 26.545C23.876 26.0293 25.6029 24.3505 26.1665 21.7602H21.2498V26.545Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M19.451 21.7602H15.2898V26.7249H19.451V21.7602Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M15.2898 19.9614H26.3704C26.3824 19.9014 26.3824 19.8295 26.3824 19.7575V9.76819H15.2898V19.9614Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M13.491 21.7602H9.25781V26.7249H13.491V21.7602Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
        <path
          d="M2.61414 21.7602C3.17776 24.3265 4.88063 26.0054 7.45891 26.533V21.7602H2.61414Z"
          fill="#EFEEE0"
          fillOpacity="0.25"
        />
      </svg>
    ),
    value: 'Music videos',
    path: '/music-videos',
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
      >
        <g opacity="0.25">
          <path
            d="M14.39 2.52162C11.2482 2.52162 8.69397 5.07585 8.69397 8.21767C8.69397 11.2995 11.1043 13.7938 14.2461 13.9017C14.342 13.8897 14.438 13.8897 14.5099 13.9017C14.5339 13.9017 14.5459 13.9017 14.5699 13.9017C14.5819 13.9017 14.5819 13.9017 14.5939 13.9017C17.6637 13.7938 20.0741 11.2995 20.0861 8.21767C20.0861 5.07585 17.5318 2.52162 14.39 2.52162Z"
            fill="#EFEEE0"
          />
          <path
            d="M20.4818 17.0915C17.1361 14.861 11.6799 14.861 8.31023 17.0915C6.78729 18.1108 5.94788 19.4898 5.94788 20.9648C5.94788 22.4398 6.78729 23.8068 8.29824 24.8141C9.97708 25.9413 12.1835 26.505 14.39 26.505C16.5965 26.505 18.8029 25.9413 20.4818 24.8141C21.9927 23.7948 22.8321 22.4278 22.8321 20.9408C22.8202 19.4658 21.9927 18.0988 20.4818 17.0915Z"
            fill="#EFEEE0"
          />
        </g>
      </svg>
    ),
    value: 'Profile',
    path: '/profile',
  },
];

type NavListProps = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

export const NavList: FC<NavListProps> = ({ showMenu, setShowMenu }) => {
  function onCLickHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <ul
      className={`nav__list ${showMenu ? 'active' : ''}`}
      onClick={onCLickHandler}
    >
      {navLinks.map((link) => {
        return <NavItem key={link.id} {...link} />;
      })}
    </ul>
  );
};
