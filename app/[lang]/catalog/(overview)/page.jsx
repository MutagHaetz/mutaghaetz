import { Grid } from '@chakra-ui/react';
import Contact from '@/app/ui/contact/Contact';
import SectionWrapper from '@/app/ui/sectionWrapper/SectionWrapper';
import ProductItem from '@/app/ui/productItem/ProductItem';
import { Suspense } from 'react';
import SkeletonProductsGrid from '@/app/ui/skeletons/SkeletonProducts';
import { fetchProducts } from '@/app/lib/api/instance';
import { getDictionary } from '@/app/lib/locales/dictionary';

const CatalogPage = async ({ params: { lang } }) => {
  const { data } = await fetchProducts(lang);
  const {
    header: { navItems },
  } = await getDictionary(lang);

  return (
    <>
      <Suspense fallback={<SkeletonProductsGrid />}>
        <SectionWrapper heading={navItems[1].title}>
          <Grid
            as={'ul'}
            maxW={'100%'}
            gridTemplateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}
            gridGap={10}
            m={'0 auto'}
            padding={0}
          >
            {data?.length > 0 &&
              data.map(({ attributes }) => {
                return (
                  <ProductItem
                    key={attributes.uid}
                    product={attributes}
                    lang={lang}
                  />
                );
              })}
          </Grid>
        </SectionWrapper>
      </Suspense>
      <Contact />
    </>
  );
};

export default CatalogPage;
