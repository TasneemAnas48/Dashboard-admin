<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- Customer Table -->
        <div class="container" >
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table ref="myTable" class="col-lg-12 my-table" :headers="headersCustomer"
                                    :items="rowsCustomer" :hide-default-footer="true" v-if="rowsCustomer.length > 0">
                            <template v-slot:[`item.classifications`]="{ item }">
                                <div class="row" style="justify-content: center;">
                                    <div class="classification" v-for="(i, index) in item.classifications"
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
    name: "ReportCustomer",
    data() {
        return {
           //customer-table
            headersCustomer: [
                { text: 'الرقم', value: 'customer_id', align: 'center', },
                { text: 'الاسم', value: 'customer_name', align: 'center', },
                { text: 'الايميل', value: 'email', align: 'center', },
                { text: 'تاريخ الانضمام', value: 'created_at', align: 'center', },
                { text: 'عدد الطلبات', value: 'num_orders', align: 'center', },
                { text: 'التصنيفات', value: 'classifications', align: 'center', },
            ],
            rowsCustomer: [],

        };
    },


    methods: {
        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/allCustomer")
            .then(res => {
                this.rowsCustomer = res.data.data
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
