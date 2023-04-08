<script setup>
	import { useCartStore } from '~~/stores/cartStore';
	const cart =  useCartStore()
	defineProps({item: Object})
</script>

<template>
	<div class="cart-item">
		<div class="cart-item-img"><img :src="item.image" :alt="item.title"></div>
		<NuxtLink :to="`/products/${item.id}`" class="cart-item-title">{{ item.title }}</NuxtLink>
		<div class="cart-item-amount">
			<button class="plus" @click="cart.incAmout(item)"><i class="fa-solid fa-plus"></i></button>
			<span>{{ item.amount }}</span>
			<button class="minus" @click="cart.decAmout(item)"><i class="fa-solid fa-minus"></i></button>
		</div>
		<div class="cart-item-price">
			<p>{{ parseFloat(item.price).toFixed(2) }}€</p>
			<p>{{ parseFloat(item.price * item.amount).toFixed(2) }}€</p>
		</div>
		<div class="cart-item-delete" @click="cart.deleteItem(item)">
			<i class="fa-solid fa-trash-can"></i>
		</div>
	</div>
</template>