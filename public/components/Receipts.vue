<template>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>List of Receipts</h1>
		<spinner v-ref:spinner size="xl" fixed text="Loading Receipts"></spinner>
		<ul>
			<li v-for='receipt in receipts'>
				<h3>{{receipt.id}}</h3>
				<!-- creates a link to the relevant user -->
				<a v-link="{ path: '/user/' + receipt.User.id }">{{ receipt.User.first_name }} {{ receipt.User.last_name }}</a>

			</li>
		</ul>
	</div>

	<pre>{{receipts| json}}</pre>
</template>

<script>
import { spinner } from 'vue-strap'
export default {
	name: 'receipt',
	components: {
			spinner
	},
	data(){
		return {
			receipts: {},
			users: []
		}
	},
	ready(){
		this.$refs.spinner.show()
		this.getReceipts()
		this.getUsers()
	},
  // filters:{
  //   userIdToName: function(id, users) {
  //     console.log(users);
  //     let user = (users.length > 0) ? users.find(u => id === u.id) : ''
	//
  //     if (user.hasOwnProperty('first_name'))
  //       return user.first_name + ' ' + user.last_name
  //     else
  //       return ''
  //   } // this works but is painfully slow and may crash the computer
  // },
	methods: {
		getUsers(){
			this.$http.get('/api/users')
				.then(users => this.$set('users', users.body))
		},
		getReceipts(){
			this.$http.get('/api/receipts')
				.then(res => this.receipts = res.body).then(() => this.$refs.spinner.hide())
		}
	}
}
</script>
