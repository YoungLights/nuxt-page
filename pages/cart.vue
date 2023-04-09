<script setup>
	import { useCartStore } from '~~/stores/cartStore';

	const items =  useCartStore()
</script>

<template>
	<h1>Cart</h1>
	<div class="cart-list" v-if="items.cart.length">
		<CartItem v-for="item in items.cart" :key="item.id" :item="item" />
	</div>

	<div v-else>
		<h2 class="cart-empty">There are no items in your cart!</h2>
	</div>
</template>