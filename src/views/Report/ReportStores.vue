<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- stores Table -->
        <div class="container">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersStores"
                                    :items="rowsStores" :hide-default-footer="true" v-if="rowsStores.length > 0">
                                    <template v-slot:[`item.status`]="{ item }">
                                        <td v-if="item.status == '1'">
                                            <b-button type="button" class=" button-active">فعال
                                            </b-button>
                                        </td>
                                        <td v-else>
                                            <b-button type="button" class="button-unactive">غير فعال
                                            </b-button>
                                        </td>
                                    </template>
                                    <template v-slot:[`item.review`]="{ item }">
                                        <td v-if="item.review ==  0">
                                            لايوجد
                                        </td>
                                        <td v-else-if="item.review ==  1">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
                                        <td v-else-if="item.review == 2">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
                                        <td v-else-if="item.review == 3">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
                                        <td v-else-if="item.review == 4">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
                                        <td v-else-if="item.review == 5">
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                            <v-icon color="yellow" >mdi-star</v-icon>
                                        </td>
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
    name: "ReportStores",
    data() {
        return {
           //stores-table
            headersStores: [
                { text: 'الرقم', value: 'store_id', align: 'center', },
                { text: 'الاسم', value: 'shop_name', align: 'center', },
                { text: 'الوصف', value: 'discription', align: 'center', },
                { text: ' المنتجات', value: 'num_products', align: 'center', },
                { text: ' الطلبات المسلمة', value: 'orders_recieved', align: 'center', },
                { text: ' الطلبات المقبولة', value: 'orders_accepted', align: 'center', },
                { text: 'التقييم', value: 'review', align: 'center', },
                { text: 'الحالة', value: 'status', align: 'center', },
            ],
            rowsStores: [],

        };
    },


    methods: {
        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/all_stores")
            .then(res => {
                this.rowsStores = res.data.data
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
</style>
