<template>
  <section>
    <div>
        
        <data-table elementsPerPage="10">

        </data-table>

    </div>

  </section>
</template>

<script>
import "styles/main.scss";
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      data: null
    };
  },
  created() {},
  beforeUpdate() {
    this.$store.getters.allUsers;
  },
  computed: {
    ...mapGetters(["allUsers"])
  },
  methods: {}
};
</script>

<style lang='scss'>

</style>