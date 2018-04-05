<template>
    <div>
        User: 
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      name: "",
      userId: "",
      selected: null,
      isFetching: false
    };
  },
  created() {
    this.userId = this.$route.params.id;
    this.getUserData(this.userId);
  },
  computed: {},
  methods: {
    getUserData(id) {}
  }
};
</script>

<style scoped>

</style>