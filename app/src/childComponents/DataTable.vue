<template>
    <div>
        <div class="datatable">
            <table class="table is-hoverable is-striped is-bordered">
                <thead>
                    <tr>
                        <th v-for="col in computedColumns" :key="col.$index" v-on:click="sortTable(col)">
                            {{col.name}}
                            <div class="arrow" v-if="col == sortColumn" :class="[ascending ? 'arrow_up' : 'arrow_down']"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in getRows()" :key="row.id">
                        <td v-for="col in computedColumns" :key="col.$index">{{row[col["column"]]}}</td>
                    </tr>
                </tbody>
            </table>
            <nav class="pagination">
                <li class="pagination-link" v-for="i in numPages()" :key="i" :class="[i == currentPage ? 'is-current' : '']" v-on:click="changePage(i)">{{i}}</li>
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
    numPages: function numPages() {
      return Math.ceil(this.rows.length / this.elementsPerPage);
    },
    getRows: function getRows() {
      var start = (this.currentPage - 1) * this.elementsPerPage;
      var end = start + this.elementsPerPage;
      return this.rows.slice(start, end);
    },
    changePage: function changePage(page) {
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
      let cleanColumns = this.columns.map(config => {
        if (typeof config !== "object") {
          throw "DataTable: config must be type: Object";
        }
        let cleanObject = {};
        Object.keys(config).forEach((key, pos) => {
          switch (key) {
            case "column":
              cleanObject[key] = config[key];
              break;
            case "name":
              if (config.hasOwnProperty("name")) {
                cleanObject[key] = config["name"];
              } else {
                cleanObject[key] = config["column"];
              }
              break;
            case "visible":
              cleanObject[key] = config[key];
              break;
            case "render":
              cleanObject[key] = config[key];
              break;
            default:
              "";
          }
        });
        return cleanObject;
      });

      return cleanColumns;
    }
  }
};
</script>

<style lang="scss">

</style>