import React from 'react'
import SectionHeader from '../common/SectionHeader'
import { popularProducts } from '../../data/mock'
import ProductCard from '../common/cards/ProductCard'
import Container from '../common/Container'

const ProductsSection = () => {
  return (
    <section className="pt-8 sm:pt-10">
        <Container>
            <SectionHeader 
             title="Popular products near you"
                    subtitle="Available now for shops close to you"
                    href="/search?sort=popular"
                />

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {popularProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </Container>   
    </section>
  )
}

export default ProductsSection
