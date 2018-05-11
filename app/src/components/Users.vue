<template>
  <section>
    <div>
        
        <data-table api="api/users/search" elementsPerPage="10">

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
      data: null,
      columns: [
        { name: "ID", column: "id" },
        { name: "First Name", column: "first_name" },
        { name: "Last Name", column: "last_name" },
        { name: "Tickets", column: "Receipts" },
        { name: "Email" },
        { name: "Phone" },
        { name: "Addresses" }
      ]
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