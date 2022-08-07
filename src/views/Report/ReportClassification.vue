<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- classification Table -->
        <div class="container" >
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersClassification"
                                    :items="rowsClassification" :hide-default-footer="true"
                                    v-if="rowsClassification.length > 0">
                                    <template v-slot:[`item.secondary_classiffication`]="{ item }">
                                        <div class="row" style="justify-content: center;">
                                            <div class="classification"
                                                v-for="(i, index) in item.secondary_classiffication" :key="index">
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
                            </v-app>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
export default {
    name: "ReportClassification",
    data() {
        return {
           //classification-table
            headersClassification: [
                { text: 'الرقم', value: 'classification_id', align: 'center', },
                { text: 'الصنف الرئيسي', value: 'classification_title', align: 'center', },
                { text: 'التصنيفات الثانوية', value: 'secondary_classiffication', align: 'center', },
                { text: 'عدد المنتجات', value: 'num_products', align: 'center', },
                { text: 'عدد المتاجر', value: 'num_stores', align: 'center', },
            ],
            rowsClassification: [],

        };
    },


    methods: {
        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/all_classiffications")
            .then(res => {
                this.rowsClassification = res.data.data
                console.log(res.data.data)
            })
            .finally(() => {
                window.print()
            })
        },
    },
    mounted() {
        this.getData()
    },

};
</script>

<style lang="scss">
@import '@/assets/css/Main/Dashboard.css';
.classification {
    padding: 5px 8px 5px 8px;
    background-color: var(--second-color);
    border-radius: 20px;
    margin: 2px;
}
</style>
