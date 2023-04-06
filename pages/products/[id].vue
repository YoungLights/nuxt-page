<script setup>
	const route = useRoute()
	const id = route.params.id

	const {data: product} = await useFetch(`https://fakestoreapi.com/products/${id}`)
</script>

<template>
	<h1 class="product-details-headline">Details</h1>
	<h2 class="product-details-sub">{{ product.title }}</h2>
	<div class="product-details-grid">
		<div class="product-details">
			<div class="product-img">
				<p>{{ product.price }}</p>
				<span>{{ product.category }}</span>
				<img :src="product.image" :alt="product.title">
			</div>
		</div>
		<div class="product-details">
			<h3>Description</h3>
			<p>{{ product.description }}</p>
			<div class="btn">Buy Now</div>
		</div>
	</div>

</template>