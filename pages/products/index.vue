<script setup>
	const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
	<h1>Products</h1>

	<div class="product-list">
		<Product v-for="product in products" :product="product" :key="product.id"/>
	</div>
</template>