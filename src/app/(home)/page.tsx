import Image from 'next/image';
import Categories from './components/catagories';
import { prismaClient } from '@/lib/prisma';
import ProductList from './components/product-list';

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  });

  return (
    <div>
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className='h-auto w-full px-5'
        sizes="100vw"
        alt="Até 55% Desconto só esse mÊs"
      />
      <div className='mt-8 px-5'>
        <Categories />
      </div>
      <div className='mt-8'>
        <p className='uppercase font-bold mb-3 pl-5'>Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/banner-home-02.png"
        height={0}
        width={0}
        className='h-auto w-full px-5'
        sizes="100vw"
        alt="Até 55% desconto em mouses"
      />
    </div>
  )
}
