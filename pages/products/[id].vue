<script setup>
	import { useCartStore } from '~~/stores/cartStore';
	const cart =  useCartStore()
	const route = useRoute()
	const id = route.params.id
	const flashActive = ref(false)
	const {data: product} = await useFetch(`https://fakestoreapi.com/products/${id}`)
	const flash = () => {
		flashActive.value = true
		setTimeout(() => {flashActive.value = false}, 2500)
	}
</script>

<template>
	<div class="product-details-header">
		<h1 class="product-details-headline">{{ product.title }}</h1>
		<NuxtLink class="product-details-back" to="/products"><i class="fa-solid fa-list"></i></NuxtLink>
	</div>
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
			<div class="btn" @click="flash(), cart.addItem(product)">Add to cart</div>
		</div>
	</div>
	<Flash :class="{active: flashActive}" message="Item was added to your cart" />
</template>