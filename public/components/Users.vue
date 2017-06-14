<template>
	<div class='col-sm-6 col-sm-offset-3'>
		<h1>Costumers</h1>

		<spinner v-ref:spinner size="xl" fixed text="Loading Costumers"></spinner>
		<typeahead :data="userNames" :on-hit="goToUserPage" placeholder="Search Costumers">
			</typeahead>

		<User-List :list.sync="users"></User-List>

	</div>
</template>

<script>
// get the component and make the template avail as <user-list>
import UserList from './UserList.vue'
import { spinner, typeahead } from 'vue-strap'
export default {
	name: 'users',
	components: {
		UserList,
		spinner,
		typeahead
	},
	data(){
		return {
			users: [],
			userNames: []
		}
	},
	ready(){
		this.$refs.spinner.show()
		this.getUsers()
	},
	methods: {
		getUsers: function(){
			this.$http.get('/api/users').then(function(users){
				// set the data after ajax request
                this.$set('users', users.body)
                // create an array of user names
                this.userNames = users.body.map(user => user.first_name)
            }, function(err){
            	console.error('Error requesting users: ')
            	console.error(err)
            }).then(() => this.$refs.spinner.hide())
		},
		goToUserPage(first_name){
			let user = this.users.find(a => first_name === a.first_name)
			this.$router.go('/user/' + user.id)
		}
	}
}
</script>
