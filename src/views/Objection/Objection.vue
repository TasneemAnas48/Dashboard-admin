<template>
    <div class="body-page view-stores" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        الشكاوي
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
                            :page.sync="page" @page-count="pageCount = $event" :hide-default-footer="true" v-if="status == 'OK'">

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
    name: "Objection",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            headers: [
                { text: 'رقم الشكوى', value: 'report_id', align: 'center', },
                { text: 'رقم الزبون', value: 'customer_id', align: 'center', },
                { text: 'اسم الزبون', value: 'customer_name', align: 'center', },
                { text: 'رقم المتجر', value: 'store_id', align: 'center', },
                { text: 'اسم المتجر', value: 'store_name', align: 'center', },
                { text: 'التاريخ', value: 'created_at', align: 'center', },
                { text: 'نص الشكوى', value: 'content_report', align: 'center', },
            ],
            rows: [],
            status:''
        };
    },

    methods: {
        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/all_reports")
            .then(res => {
                this.status = res.statusText
                this.rows = res.data.data
                console.log(res.data.data)
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
</style>
