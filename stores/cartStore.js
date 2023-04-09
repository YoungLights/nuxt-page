import {defineStore} from 'pinia'

export const useCartStore = defineStore('cart', {
	state: () => ({
		cart: [],
	}),
	getters: {
		cartTotal() {
			return this.cart.reduce((total, item) => {
				return total + (item.price * item.amount)
			}, 0)
		}, 

		amountTotal() {
			return this.cart.reduce((amount, item) => {
				return amount + item.amount
			}, 0)
		}
	},
	actions: {
		addItem(item) {
			const exist = this.cart.find(i => i.id === item.id)
			if(exist) {
				this.incAmout(item)
			} else {
				item.amount = 1
				this.cart.push(item) 
			}
		},

		deleteItem(item) {
			this.cart = this.cart.filter(i => {
				return i.id !== item.id
			})
		}, 

		incAmout(item) {
			this.cart = this.cart.map(i => {
				if(i.id === item.id) {
					i.amount++
				}
				return i
			})
		},

		decAmout(item) {
			this.cart = this.cart.map(i => {
				if(i.id === item.id) {
					if(i.amount > 1) i.amount--
				}
				return i
			})
		}
	}
})