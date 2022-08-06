<template>
    <div class="body-page view view-stores" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        التصنيفات
                        <router-link to="/add-classification">
                            <b-button class="button-view">إضافة تصنيف </b-button>
                        </router-link>
                    </div>

                </div>
                <div class="card-body">
                    <v-app>
                        <v-card-title class="search">
                            <b-form-input v-model="search" class="col-lg-3 input-field" label="Search"
                                placeholder="ابحث" append-icon="mdi-magnify" single-line hide-details>
                            </b-form-input>
                        </v-card-title>
                        <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rows" :search="search"
                            :page.sync="page" @page-count="pageCount = $event" :hide-default-footer="true"
                            v-if="status =='OK'">
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td>{{ props.item.classification }}</td>
                                <td>{{ props.item.product }}</td>
                            </template>
                            <template v-slot:[`item.secondrayClassification`]="{ item }">
                                <div class="row" style="justify-content: center;">
                                    <div class="classification" v-for="(i, index) in item.secondrayClassification"
                                        :key="index">
                                        <td>{{ i.title }} </td>
                                    </div>
                                </div>
                            </template>
                        
                        </v-data-table>
                        <div v-else>
                            <v-progress-circular :size="70" :width="7" color="var(--main-color)" indeterminate
                                style="margin-top: 100px; margin-bottom: 150px;">
                            </v-progress-circular>
                        </div>
                        <div class="text-center">
                            <v-pagination color=var(--main-color) v-model="page" :length="pageCount" circle>
                            </v-pagination>
                        </div>
                    </v-app>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ViewClassification",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            headers: [
                { text: 'الرقم', value: 'id', align: 'center', },
                { text: 'الصنف الرئيسي', value: 'classification', align: 'center', },
                { text: 'التصنيفات الثانوية', value: 'secondrayClassification', align: 'center', },
                { text: 'عدد المنتجات', value: 'product', align: 'center', },
            ],
            rows: [],
            status:''
        };
    },
    methods: {

        getData() {
            this.axios.get("http://" + this.$store.state.ip + "api/admin/classification/Show_Classification")
                .then(res => {
                    this.status = res.statusText
                    this.rows = res.data
                    console.log(res.data)
                });
        }
    },
    mounted() {
        this.getData()
    },
    components: {
    },
};
</script>

<style lang="scss">
@import '@/assets/css/Stores/ViewStores.css';

.view .my-table .fa-trash {
    color: #dc3545;
    background: #ff00003b;
    border-radius: 7px;
    padding: 7px;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 10px;
}

.view .my-table .fa-trash:hover {
    color: white;
    background-color: #dc3545;
    cursor: pointer;
}

.view .my-table .fa-edit {
    color: #1eb018;
    background: rgb(64 201 59 / 21%);
    border-radius: 7px;
    padding: 7px;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 5px;
}

.view .my-table .fa-edit:hover {
    color: white;
    background-color: #1eb018;
    cursor: pointer;
}

.view .my-table .classification {
    padding: 5px 8px 5px 8px;
    background-color: var(--second-color);
    border-radius: 20px;
    margin: 2px;
}
</style>
