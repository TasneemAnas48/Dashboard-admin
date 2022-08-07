<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- rate Table -->
        <div class="container">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersRate"
                                    :items="rowsRate" :hide-default-footer="true" v-if="rowsRate.length > 0">
                                    <template v-slot:[`item.review_value`]="{ item }">
                                        <td v-if="item.review_value ==  0">
                                            <v-icon color="red" >mdi-emoticon-sad-outline</v-icon>
                                        </td>
                                        <td v-else-if="item.review_value == 1">
                                            <v-icon color="yellow" >mdi-emoticon-neutral-outline</v-icon>
                                        </td>
                                        <td v-else-if="item.review_value == 2">
                                            <v-icon color="green" >mdi-emoticon-excited-outline</v-icon>
                                        </td>
                                        <td v-else-if="item.review_value == 3">لايوجد</td>
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
    name: "ReportRate",
    data() {
        return {
           //rate
            headersRate: [
                { text: 'رقم المتجر', value: 'store_id', align: 'center', },
                { text: 'اسم المتجر', value: 'store_name', align: 'center', },
                { text: 'رقم المنتج', value: 'product_id', align: 'center', },
                { text: 'اسم المنتج', value: 'product_name', align: 'center', },
                { text: 'التقييم', value: 'review_value', align: 'center', },
            ],
            rowsRate: [],

        };
    },


    methods: {
        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/review/prodcuts")
            .then(res => {
                this.rowsRate = res.data.data
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
