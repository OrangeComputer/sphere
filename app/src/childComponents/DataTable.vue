<template>
    <div>
        <div id="sixthTable">
            <table class="table is-hoverable is-striped is-bordered">
                <thead>
                    <tr>
                        <th v-for="col in columns" :key="col.$index" v-on:click="sortTable(col)">{{col}}
                            <div class="arrow" v-if="col == sortColumn" :class="[ascending ? 'arrow_up' : 'arrow_down']"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in get_rows()" :key="row.id">
                        <td v-for="col in columns" :key="col.$index">{{row[col]}}</td>
                    </tr>
                </tbody>
            </table>
            <nav class="pagination">
                <li class="pagination-link" v-for="i in num_pages()" :key="i" :class="[i == currentPage ? 'is-current' : '']" v-on:click="change_page(i)">{{i}}</li>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    elementsPerPage: { default: 10 },
    ascending: { default: false },
    sortColumn: { default: "" }
  },
  data() {
    return {
      currentPage: 1,
      rows: []
    };
  },
  created() {
    this.axios
      .post("api/users/search", {
        where: {},
        limit: 10,
        offset: 0
      })
      .then(res => {
        console.log(res.data);
        res.data.rows.map(u => {
          this.rows.push(u);
        });
      });
  },
  methods: {
    sortTable: function sortTable(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }

      var ascending = this.ascending;

      this.rows.sort(function(a, b) {
        if (a[col] > b[col]) {
          return ascending ? 1 : -1;
        } else if (a[col] < b[col]) {
          return ascending ? -1 : 1;
        }
        return 0;
      });
    },
    num_pages: function num_pages() {
      return Math.ceil(this.rows.length / this.elementsPerPage);
    },
    get_rows: function get_rows() {
      var start = (this.currentPage - 1) * this.elementsPerPage;
      var end = start + this.elementsPerPage;
      return this.rows.slice(start, end);
    },
    change_page: function change_page(page) {
      this.currentPage = page;
    }
  },
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0]);
    }
  }
};
</script>

<style lang="scss">

</style>