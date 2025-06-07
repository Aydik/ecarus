// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Product } from 'entities/Product';
// import { FiltersState } from 'features/ProductsFilters/types';
// import { RootState } from 'widgets/Catalog/store';
// import { useProducts } from './useProducts';
// import { SortState } from 'features/ProductsSort/types';
//
// function hasActiveFlags(flags: Record<string, boolean>): boolean {
//   return Object.values(flags).some(Boolean);
// }
//
// export function useFilteredProducts() {
//   const filters: FiltersState = useSelector<RootState, FiltersState>(
//     (state: RootState) => state.filters,
//   );
//   const sort: SortState = useSelector<RootState, SortState>((state: RootState) => state.sort);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const { products, loading, error } = useProducts([filters, sort]);
//
//   useEffect(() => {
//     if (!products.length) {
//       setFilteredProducts([]);
//       return;
//     }
//
//     const hasGenderFilter = hasActiveFlags(filters.genders);
//     const hasCategoryFilter = hasActiveFlags(filters.categories);
//     const hasBrandFilter = hasActiveFlags(filters.brands);
//
//     const filtered: Product[] = products.filter((product) => {
//       if (hasGenderFilter && !filters.genders[product.gender]) {
//         return false;
//       }
//
//       if (hasCategoryFilter && !filters.categories[product.category]) {
//         return false;
//       }
//
//       return !(hasBrandFilter && !filters.brands[product.brand]);
//     });
//
//     const sorted: Product[] = filtered.sort((productA, productB) => {
//       switch (sort.sortBy) {
//         case 'По цене':
//           return productA.price - productB.price;
//         case 'По популярности':
//           return productB.rating - productA.rating;
//         case 'По новизне':
//           return productA.date.getTime() - productB.date.getTime();
//         default:
//           return 0;
//       }
//     });
//
//     setFilteredProducts(sorted);
//   }, [products, filters, sort]);
//
//   return { products: filteredProducts, loading, error };
// }
