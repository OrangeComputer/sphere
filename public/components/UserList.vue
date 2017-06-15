<template>
<!-- <ul>
	<li v-for='user in list'>
		<h3>
			<a class='user-name' v-link="{ path: '/user/' + user.id }">{{user.first_name}}</a>
		</h3>
		<i>{{author.bio}}</i>
		<p>{{author.Receipt.length}} books</p> 
	</li>
</ul> -->
</template>


<script>
export default {
	name: 'UserList',
	props: ['list']
}
</script>

<style>
	.user-name { cursor: pointer; color: black; text-decoration: none; }
</style>
