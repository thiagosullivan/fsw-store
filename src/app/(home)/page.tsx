import Image from 'next/image';
import Categories from './components/catagories';
import { prismaClient } from '@/lib/prisma';
import ProductList from './components/product-list';
import SectionTitle from './components/sectionTitle';
import PromoBanner from './components/promoBanner';

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      }
    }
  })

  return (
    <div>
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% Desconto só esse mÊs"
      />

      <div className='mt-8 px-5'>
        <Categories />
      </div>

      <div className='mt-8'>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% desconto em mouses"
      />

      <div className='mt-8'>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  )
}
