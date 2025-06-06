/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CitiesEntity } from './CitiesEntity';
import type { ProductGender } from './ProductGender';
import type { ProductType } from './ProductType';
import type { SpendingEntity } from './SpendingEntity';
export type ProductsEntity = {
	id: number;
	name: string;
	brand: string;
	description: string;
	gender: ProductGender;
	price: number;
	type: ProductType;
	image: string;
	city: CitiesEntity;
	spending: SpendingEntity;
};

