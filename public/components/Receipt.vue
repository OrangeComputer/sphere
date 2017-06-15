<template>
	<a v-link="{ path: '/receipts' }" class='btn btn-default pull-left'>< Back</a>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>{{receipt.tax}}</h1>
	</div>
</template>

<script>
import routes from 'vue-router'
export default {
	name: 'receipt',
	components: {
		routes
	},
	data(){
		return {
			receipt: {}
		}
	},
	ready(){
		this.getReceipt()
	},
	methods: {
		getReceipt(){
			this.$http.get('/api/receipts/' + this.$route.params.id)
				.then(res => this.book = res.body)
		}
	}
}
</script>
