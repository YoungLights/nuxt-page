<script setup>
	definePageMeta({
		layout: 'landing'
	})
</script>


<template>
	<div class="welcome-flex">
		<div class="welcome-header">
			<h1>nuxi<span>shop</span></h1>
			<p>A new era of online shopping</p>
			<NuxtLink class="btn" to="/products">Our Shop</NuxtLink>
		</div>
		<img src="/img/header.jpg" alt="Welcome Image - NuxiShop">
	</div>
</template>