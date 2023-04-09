<script setup>
	import { useCartStore } from '~~/stores/cartStore';
	const items = useCartStore()
</script>

<template>
	<nav class="nav">
		<div class="frame">
			<NuxtLink to="/" class="nav-logo">
				<h4>nuxi<span>shop</span></h4>
			</NuxtLink>
			<div class="nav-links">
				<NuxtLink to="/">Welcome</NuxtLink>
				<NuxtLink to="/about">About</NuxtLink>
				<NuxtLink to="/services">Services</NuxtLink>
				<NuxtLink to="/products">Products</NuxtLink>
				<NuxtLink to="/cart" class="nav-cart">
					<i class="fa-solid fa-bag-shopping"></i>
					<span>{{ items.amountTotal }} Items</span>
				</NuxtLink>
			</div>
		</div>
	</nav>
</template>