<template>
  <section>
    <nav class="level">
      
      <!-- Left side -->
      <div class="level-left column is-6">
        <div class="level-item column is-12">
          <p class="subtitle">
            <b-field label="Search Customers:" class="">
              <b-autocomplete v-model="input" :keep-first=true :data="searchUsers" placeholder="Search Customers" field="first_name"
                :loading="isFetching" @select="handleSelect">
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
          </p>
        </div>
        <div class="level-item">
          <div class="field">

          </div>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item">
          <b-switch :value="true" type="is-green">
            Warning
          </b-switch>
        </p>
        <p class="level-item">
          <a>Published</a>
        </p>
        <p class="level-item">
          <a>Drafts</a>
        </p>
        <p class="level-item">
          <a>Deleted</a>
        </p>
        <p class="level-item">
          <a class="button is-success">New</a>
        </p>
      </div>
    </nav>
    <!-- end top bar -->


    <div v-if="selected">
      <b>Selected:</b> {{ selected }}
      <div class="card column is-6">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="../../assets/orange_slice.jpg" alt="orange">
              </figure>
            </div>
            <div class="columns">
            <div class="column is-10">
              <p class="title is-4">{{selected.first_name}} {{selected.last_name}} </p>
              <ul>
                 <p class="title is-6"> Contacts:</p>
                <li v-for="(obj,email) in selected.Emails" :key="email">
                  {{ obj.email }}
                </li>
              </ul>
              <ul>
                  <li v-for="(obj,number) in selected.Phones" :key="number">
                    {{ obj.number }}
                  </li>
              </ul>
            </div>
              <div class="column is-12">
                <p class="title is-6"> Address:</p>
                <ul>
                  <li v-for="(obj) in selected.Addresses" :key="obj.zip_code">
                    <div v-for="(value, key) in obj" :key="key">
                      {{ value }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>.
            <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br>
            Customer since: 
            {{selected.created_at | formatDate("T") }}

            <button class="button is-primary is-medium"
              @click="isComponentModalActive = true">
              Launch component modal
            </button>
          </div>
        </div>
      </div>
      <b-modal :active.sync="isComponentModalActive" has-modal-card>
        <user-modal v-bind="formProps"></user-modal>
      </b-modal>
    </div>


  </section>
</template>

<script>
import debounce from "lodash/debounce";
import "styles/app.scss";
import { mapGetters, mapState } from "vuex";
import UserModal from "childComponents/UserModal.vue";

export default {
  components: {
    UserModal
  },
  data() {
    return {
      data: null,
      input: "",
      isComponentModalActive: false,
      selected: null,
      formProps: {
        email: "",
        passoword: "yo"
      },
      isFetching: false
    };
  },
  created() {
    this.$store.dispatch("getAllUsers");
  },
  beforeUpdate() {
    this.$store.getters.allUsers;
  },
  computed: {
    ...mapGetters(["allUsers"]),
    searchUsers() {
      return this.allUsers.filter(option => {
        if (option.first_name) {
          let fullName = `${option.first_name}${option.last_name}`;
          return (
            fullName
              .toString()
              .toLowerCase()
              .indexOf(this.input.toLowerCase().replace(/ /g, "")) >= 0
          );
        }
      });
    }
  },
  methods: {
    handleSelect(selected) {
      this.selected = selected;
      this.formProps.email = this.selected.Emails[0].email;
    }
  }
};
</script>

<style lang='scss'>

</style>