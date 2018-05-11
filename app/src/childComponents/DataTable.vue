<template>
    <div>
        <div class="datatable">
            <table class="table is-hoverable is-striped is-bordered">
                <thead>
                    <tr>
                        <th v-for="col in computedColumns" :key="col.$index" v-on:click="sortTable(col)">{{col}}
                            <div class="arrow" v-if="col == sortColumn" :class="[ascending ? 'arrow_up' : 'arrow_down']"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in get_rows()" :key="row.id">
                        <td v-for="col in computedColumns" :key="col.$index">{{row[col]}}</td>
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
    sortColumn: { default: "" },
    api: { default: "" },
    columns: {
      default: () => []
    }
  },
  data() {
    return {
      currentPage: 1,
      cleanColumns: [],
      rows: []
    };
  },
  created() {
    if (!this.api.length) {
      throw "DataTable: Api prop not provided type: String";
      return;
    }
    this.axios
      .post(this.api, {
        where: {},
        limit: 10,
        offset: 0
      })
      .then(res => {
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
    computedColumns: function columns() {
      if (!this.columns.length) {
        if (!this.rows.length) {
          return [];
        }
        return Object.keys(this.rows[0]);
      }
      /**
       * column config
       */
      let cleanColumns = [];
      for (column in this.columns) {
        console.log(column);
        if (typeof column !== "object") {
          throw "DataTable: column in column must be type: Object";
        }
        Object.key(column).forEach((key, pos) => {
          let cleanObject = {};
          switch (key) {
            case "column":
              if ("name" in object) {
                cleanObject[key] = column["name"];
                return;
              }
              cleanObject[key] = column["name"];
              break;
            case "name":
              break;
            case "visible":
              break;
            case "render":
              break;
            default:
              "";
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">

</style>