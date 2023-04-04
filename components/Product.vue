<script setup>
	defineProps({
		product: Object
	})
</script>

<template>
	<NuxtLink :to="`/products/${product.id}`" class="product">
		<div class="product-img">
			<p>{{ product.price }}€</p>
			<img :src="product.image" />
		</div>
		<div class="product-title">
			<h4>{{ product.title }}</h4>
		</div>
	</NuxtLink>
</template>