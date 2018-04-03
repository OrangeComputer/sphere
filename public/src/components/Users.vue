<template>
  <section>
    <p class="content">
      <b>Selected:</b> {{ selected }}</p>
    <b-field label="Search Customers">
      <b-autocomplete v-model="name" :keep-first=true :data="filteredDataObj" placeholder="Search Customers" field="first_name" :loading="isFetching"
        @select="option => selected = option">

        <template class="select" slot-scope="props">
          <div class="media">
            <div class="media-content">
              {{ props.option.first_name }} {{ props.option.last_name }}
              <br>
              <small>
                <p v-if="props.option.Emails.length">
                  Email:
                  <b>{{ props.option.Emails[0].email}}</b>
                </p>
                Customer ID:
                <b>{{ props.option.id }}</b>
              </small>
            </div>
          </div>
        </template>
      </b-autocomplete>
    </b-field>
  </section>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  data() {
    return {
      data: [],
      name: "",
      selected: null,
      isFetching: false
    };
  },
  created() {
    this.getUserData();
  },
  computed: {
    filteredDataObj() {
      return this.data.filter(option => {
        let val = "";
        if (option.first_name) {
          let fullName = `${option.first_name}${option.last_name}`;
          return (
            fullName
              .toString()
              .toLowerCase()
              .indexOf(this.name.toLowerCase().replace(/ /g, "")) >= 0
          );
        }
      });
    }
  },
  methods: {
    getUserData: debounce(function() {
      this.data = [];
      this.isFetching = true;
      this.axios
        .get(`/api/users`)
        .then(({ data }) => {
          data.forEach((item, pos) => {
            this.data.push(item);
          });
          this.isFetching = false;
        })
        .catch(error => {
          this.isFetching = false;
          throw error;
        });
    }, 500)
  }
};
</script>