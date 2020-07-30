import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useGraphQL } from 'graphql-react';
import Utils from '../../utils';
import { Container, Box, SvgIcon } from '@material-ui/core';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import PriceCategories from '../../components/sidebars/PriceCategoriesMainT';
import PriceItem from '../../components/price/PriceItem';
import BlockHead from '../../templates/BlockHead';
import { grey } from '@material-ui/core/colors';
/*
export async function getServerSideProps() {
  const res = await fetch(`${process.browser ? '' : 'https://keystone-quickstart.cdrewriter.vercel.app'}/api/carcatapi`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
*/
function SparePartsIcon(props) {
  return (
    <SvgIcon {...props}>
      <g transform="translate(-121 -5635)">
        <path
          d="M78.794,26.355,73.33,23.319a36.571,36.571,0,0,0,.258-3.944,36.571,36.571,0,0,0-.258-3.943l5.464-3.037a3.8,3.8,0,0,0,1.851-4.436A39.608,39.608,0,0,0,71-8.1,4.137,4.137,0,0,0,66.072-8.8L60.616-5.763a39.482,39.482,0,0,0-7.094-3.948v-6.067a3.907,3.907,0,0,0-3.1-3.769,43.434,43.434,0,0,0-19.23,0,3.907,3.907,0,0,0-3.1,3.769v6.067A39.471,39.471,0,0,0,21-5.763L15.547-8.8a4.137,4.137,0,0,0-4.932.691A39.609,39.609,0,0,0,.974,7.959a3.8,3.8,0,0,0,1.851,4.436l5.464,3.037a36.571,36.571,0,0,0-.258,3.943,36.572,36.572,0,0,0,.258,3.944L2.825,26.355A3.8,3.8,0,0,0,.974,30.791a39.609,39.609,0,0,0,9.64,16.064,4.138,4.138,0,0,0,4.932.691L21,44.513A39.47,39.47,0,0,0,28.1,48.462v6.067a3.907,3.907,0,0,0,3.1,3.769,43.434,43.434,0,0,0,19.23,0,3.907,3.907,0,0,0,3.1-3.769V48.462a39.491,39.491,0,0,0,7.094-3.948l5.456,3.032A4.137,4.137,0,0,0,71,46.855a39.609,39.609,0,0,0,9.64-16.064A3.8,3.8,0,0,0,78.794,26.355Zm-10.972,16.2-7.759-4.313c-4.522,3.721-6.126,4.657-11.9,6.622v8.626a45.435,45.435,0,0,1-7.351.722,45.435,45.435,0,0,1-7.351-.722V44.868c-5.633-1.916-7.264-2.806-11.9-6.622L13.8,42.559A34.554,34.554,0,0,1,6.436,30.307L14.2,25.994c-1.095-5.712-1.1-7.523,0-13.239L6.436,8.443A34.577,34.577,0,0,1,13.8-3.81L21.556.506c4.587-3.78,6.21-4.688,11.9-6.624v-8.626a45.365,45.365,0,0,1,7.351-.723,45.365,45.365,0,0,1,7.351.723v8.626c5.693,1.936,7.316,2.845,11.9,6.624L67.823-3.81A34.574,34.574,0,0,1,75.184,8.443l-7.763,4.313c1.1,5.714,1.1,7.523,0,13.239l7.763,4.313A34.553,34.553,0,0,1,67.823,42.559ZM40.81,3.891c-8.87,0-16.086,6.946-16.086,15.484S31.94,34.859,40.81,34.859,56.9,27.913,56.9,19.375,49.679,3.891,40.81,3.891Zm0,25.807A10.541,10.541,0,0,1,30.086,19.375a10.731,10.731,0,0,1,21.447,0A10.541,10.541,0,0,1,40.81,29.7Z"
          transform="translate(140.19 5655.625)"
          fill="#ebebeb"
        />
        <path
          d="M78.794,26.355,73.33,23.319a36.571,36.571,0,0,0,.258-3.944,36.571,36.571,0,0,0-.258-3.943l5.464-3.037a3.8,3.8,0,0,0,1.851-4.436A39.608,39.608,0,0,0,71-8.1,4.137,4.137,0,0,0,66.072-8.8L60.616-5.763a39.482,39.482,0,0,0-7.094-3.948v-6.067a3.907,3.907,0,0,0-3.1-3.769,43.434,43.434,0,0,0-19.23,0,3.907,3.907,0,0,0-3.1,3.769v6.067A39.471,39.471,0,0,0,21-5.763L15.547-8.8a4.137,4.137,0,0,0-4.932.691A39.609,39.609,0,0,0,.974,7.959a3.8,3.8,0,0,0,1.851,4.436l5.464,3.037a36.571,36.571,0,0,0-.258,3.943,36.572,36.572,0,0,0,.258,3.944L2.825,26.355A3.8,3.8,0,0,0,.974,30.791a39.609,39.609,0,0,0,9.64,16.064,4.138,4.138,0,0,0,4.932.691L21,44.513A39.47,39.47,0,0,0,28.1,48.462v6.067a3.907,3.907,0,0,0,3.1,3.769,43.434,43.434,0,0,0,19.23,0,3.907,3.907,0,0,0,3.1-3.769V48.462a39.491,39.491,0,0,0,7.094-3.948l5.456,3.032A4.137,4.137,0,0,0,71,46.855a39.609,39.609,0,0,0,9.64-16.064A3.8,3.8,0,0,0,78.794,26.355Zm-10.972,16.2-7.759-4.313c-4.522,3.721-6.126,4.657-11.9,6.622v8.626a45.435,45.435,0,0,1-7.351.722,45.435,45.435,0,0,1-7.351-.722V44.868c-5.633-1.916-7.264-2.806-11.9-6.622L13.8,42.559A34.554,34.554,0,0,1,6.436,30.307L14.2,25.994c-1.095-5.712-1.1-7.523,0-13.239L6.436,8.443A34.577,34.577,0,0,1,13.8-3.81L21.556.506c4.587-3.78,6.21-4.688,11.9-6.624v-8.626a45.365,45.365,0,0,1,7.351-.723,45.365,45.365,0,0,1,7.351.723v8.626c5.693,1.936,7.316,2.845,11.9,6.624L67.823-3.81A34.574,34.574,0,0,1,75.184,8.443l-7.763,4.313c1.1,5.714,1.1,7.523,0,13.239l7.763,4.313A34.553,34.553,0,0,1,67.823,42.559ZM40.81,3.891c-8.87,0-16.086,6.946-16.086,15.484S31.94,34.859,40.81,34.859,56.9,27.913,56.9,19.375,49.679,3.891,40.81,3.891Zm0,25.807A10.541,10.541,0,0,1,30.086,19.375a10.731,10.731,0,0,1,21.447,0A10.541,10.541,0,0,1,40.81,29.7Z"
          transform="translate(120.19 5668.625)"
          fill="#c7c7c7"
        />
      </g>
    </SvgIcon>
  );
}
const CarsList = () => {
  const { query } = useRouter();
  const { page, limit, slug } = Utils.getPageInfoFromQuery(query);

  let priceQueryObj = {};
  if (slug) {
    priceQueryObj = { priceCategories_every: { slug } };
  }

  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.browser ? '' : 'http://localhost:3000'}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
        query CarCategoriesList {
          allItemCarCategories {
            name
            slug
            id
            description
          }
        }
      `,
      variables: {
        where: priceQueryObj,
        first: limit,
        skip: (page - 1) * limit,
      },
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
  const { cacheValue } = result;

  if (cacheValue && cacheValue.data) {
    const { allItemCarCategories } = cacheValue.data;
    const priceItems = [];
    if (allItemCarCategories && allItemCarCategories.length) {
      for (let i = 0; i < allItemCarCategories.length; ++i) {
        priceItems.push(
          <>
            <PriceItem key={i} post={allItemCarCategories[i]} />
          </>
        );
      }
    }
    return (
        <>
        <Container maxWidth="md">
          <Breadcrumbs
            pageTitle="Каталог Техники"
            pagePath="/cars"
            parts={[
              {
                title: 'Главная',
                href: '/',
              },
            ]}
          />
        </Container>
        <Container fixed>
          <Box my={8} style={{ display: 'flex', flexWrap: 'wrap' }}>
            <SparePartsIcon
              style={{  marginLeft: '2rem', marginRight: '2rem', transform: 'scale(2.5) translateY(0.5rem)', color: grey[300] }}
              viewBox="0 0 80 91.429"
            />
            <BlockHead heading="Техника в наличии" subheading="на стоянке в Миассе" justifyContent="center" />
          </Box>
          <PriceCategories priceCategories={allItemCarCategories} activeKey={slug} />
        </Container>
        </>
    );
  }
  return <>Loading...</>;
};

CarsList.propTypes = {};

export default CarsList;
