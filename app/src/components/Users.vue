<template>
  <section>
    <div>
        <vuetable ref="vuetable"
          api-url="https://vuetable.ratiw.net/api/users"
          :fields="fields"
        ></vuetable>

    </div>

  </section>
</template>

<script>
import "styles/app.scss";
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      data: null,
      fields: [
        {
          name: "name",
          title: "Full Name",
          sortField: "name"
        },
        {
          name: "email",
          title: "Email",
          sortField: "email"
        },
        "birthdate",
        "nickname",
        {
          name: "gender",
          title: "Gender",
          sortField: "gender"
        },
        "__slot:actions"
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