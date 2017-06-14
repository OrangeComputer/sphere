<template>
	<a v-link="{ path: '/users' }" class='btn btn-default pull-left'>Back</a>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>{{name}}</h1>

		<p>{{user.first_name}} {{user.last_name}} </p>
<!--
		<h2 v-if='user.Receipt'>Receipt ({{user.Recepits.length}})</h2> -->
		<!-- <ul>
			<li v-for='receipit in user.Receipt'>
				<h3>{{receipt.tax}}</h3>
				<i>{{book.isbn}}</i>
			</li>
		</ul> -->
	</div>
</template>

<script>
import routes from 'vue-router'
export default {
	name: 'user',
	components: {
		routes
	},
	data(){
		return {
			user: {}
		}
	},
	ready(){
		this.getUser()
	},
	methods: {
		getUser(){
			this.$http.get('/api/users/' + this.$route.params.id)
				.then(res => this.user = res.body)
		}
	}
}
</script>
