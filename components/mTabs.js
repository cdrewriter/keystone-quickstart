/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import { Link as RouterLink } from 'next/link';
import Link from '@material-ui/core/Link';

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = router.pathname === href ? 'active' : '';
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Link href={href} onClick={handleClick} className={`navmenuitem ${style}`}>
      {children}
    </Link>
  );
}
const FirebaseTabs = () => {
  return (
    <>
      <nav className="navmenus">
        <div className="navwrap">
          <ActiveLink rel="preconnect" component={RouterLink} className="tabb" href="/cars">
            Техника
          </ActiveLink>
          <ActiveLink component={RouterLink} className="tabb" href="/catalog">
            Запасные части
          </ActiveLink>

          <ActiveLink component={RouterLink} className="tabb" href="/services">
            Сервис
          </ActiveLink>

          <ActiveLink component={RouterLink} className="tabb" href="/about">
            Контакты
          </ActiveLink>
        </div>
      </nav>
    </>
  );
};

FirebaseTabs.getTheme = (muiBaseTheme) => ({
  MuiTabs: {
    root: {
      marginLeft: muiBaseTheme.spacing.unit,
    },
    indicator: {
      height: 3,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: muiBaseTheme.palette.common.white,
    },
  },
  MuiTab: {
    root: {
      textTransform: 'initial',
      margin: `0 ${muiBaseTheme.spacing.unit * 2}px`,
      minWidth: 0,
      [muiBaseTheme.breakpoints.up('md')]: {
        minWidth: 100,
      },
    },
    label: {
      fontWeight: 'normal',
      letterSpacing: 0.5,
    },
    labelContainer: {
      padding: 0,
      [muiBaseTheme.breakpoints.up('md')]: {
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
});
FirebaseTabs.metadata = {
  name: 'Firebase Tabs',
  description: 'implement firebase theme (primary-color: #039be5)',
};

export default FirebaseTabs;
