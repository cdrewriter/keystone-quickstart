import React from 'react';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import theme from './theme';
import HeaderEx from '../components/HeaderEx';
import NavFooterEx from '../components/FooterEx';
import { useGraphQL } from 'graphql-react';
import { useRouter } from 'next/router';

import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  getMuiTreasuryScheme,
} from '@mui-treasury/layout';
import NestedMenu from '../components/NestedMenu';
const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);
const muiTreasuryScheme = getMuiTreasuryScheme();

muiTreasuryScheme.enableAutoCollapse('primarySidebar', 'md');

muiTreasuryScheme.configureHeader((builder) => {
  builder
    .create('headermui')
    .registerConfig('xs', {
      position: 'sticky',
      initialHeight: 64,
    })
    .registerConfig('md', {
      position: 'relative', // won't stick to top when scroll down
      clipped: true,
      initialHeight: 64,
    });
});
const Layoutnx = ({ children }) => {
  const router = useRouter();
  muiTreasuryScheme.configureEdgeSidebar((builder) => {
    builder.create('primarySidebar', { anchor: 'left' }).registerPermanentConfig('xl', {
      width: '20%', // recommended width
      collapsible: true,
      collapsedWidth: 64,
      headerMagnetEnabled: true,
      autoExpanded: true,
    });
    builder.create('primarySidebar', { anchor: 'left' }).registerPermanentConfig('lg', {
      width: '22.5%', // recommended width
      collapsible: true,
      collapsedWidth: 64,
      headerMagnetEnabled: true,
      autoExpanded: true,
    });
    builder.create('primarySidebar', { anchor: 'left' }).registerPermanentConfig('md', {
      width: '22.5%', // recommended width
      collapsible: true,
      collapsedWidth: 64,
      headerMagnetEnabled: true,
      autoExpanded: true,
    });
    if (router.pathname === '/') {
      builder.hide('primarySidebar', true);
    }
    if (router.pathname === '/cars') {
      builder.hide('primarySidebar', true);
    }
    if (router.pathname === '/catalog') {
      builder.hide('primarySidebar', true);
    }
  });
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Root theme={theme} scheme={muiTreasuryScheme}>
        {({ state: { sidebar } }) => (
          <>
            <Header>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />

                <HeaderEx />
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId="primarySidebar">
              <SidebarContent className="sidebar_cont">
                <NestedMenu />
              </SidebarContent>
              <CollapseBtn />
            </DrawerSidebar>
            <Content>{children}</Content>
            <Footer>
              <NavFooterEx />
            </Footer>
          </>
        )}
      </Root>
    </StylesProvider>
  );
};
export default Layoutnx;

Layoutnx.propTypes = {
  children: PropTypes.any,
};
