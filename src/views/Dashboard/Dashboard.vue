<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- header -->
        <div class="container">
            <div class="body row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">{{store}}</h3>
                                <font-awesome-icon  icon="fas fa-store" class="icon-report" />
                            </div>
                            <div class="row" style="justify-content: center">
                                <h5 class="color">المتاجر</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">{{customer}}</h3>
                                <font-awesome-icon  icon="fas fa-users" class="icon-report" />
                            </div>
                            <div class="row" style="justify-content: center">
                                <h5 class="color">الزبائن</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">{{objection}}</h3>
                                <font-awesome-icon  icon="fas fa-exclamation-circle" class="icon-report" />
                            </div>
                            <div class="row" style="justify-content: center">
                                <h5 class="color">الشكاوي</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div class="card mini-card">
                        <div class="card-body">
                            <div class="row row-header">
                                <h3 class="color">{{join_request}}</h3>
                                <font-awesome-icon  icon="fas fa-user-plus" class="icon-report" />
                            </div>
                            <div class="row" style="justify-content: center">
                                <h5 class="color">طلبات الانضمام</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- visit & classification chart -->
        <div class="container">
            <div class="body row">
                <!-- visit -->
                <div class="col-lg-12">
                <div class="card" id="chart" style="margin: 0px">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center add">
                            التصنيفات الاكثر مبيعا
                        </div>
                    </div>
                    <div class="card-body">
                        <apexchart ref="chart_sales" type="area" height="350" :options="chartOptions" :series="series"></apexchart>

                    </div>
                </div>
                </div>

                <!-- classification -->
                <!-- <div class="col-lg-6">
                    <div class="card" id="chart" style="margin: 0px">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center add">
                            التصنيفات الاكثر مبيعا 
                        </div>
                    </div>
                    <div class="card-body">
                        <apexchart type="donut" ref="chart_class" height="350"  :options="chartOptions" :labels="labels" :series="series" style="margin-bottom:14px"></apexchart>

                    </div>
                </div>
                </div> -->
            </div>
        </div>

        <!-- order table -->
        <div class="container">
            <div class="body">
                <div class="card" style="margin: 0px">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center add">
                            الطلبات
                        </div>
                    </div>
                    <div class="card-body" style="padding: 0px">
                        <v-app>
                            <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rowsOrder"
                                :hide-default-footer="true">
                            </v-data-table>
                        </v-app>
                    </div>
                </div>
            </div>
        </div>

        <!-- customer & store table -->
        <div class="container">
            <div class="body row">
                <!-- customer -->
                <div class="col-lg-6">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                افضل الزبائن
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table class="col-lg-12 my-table" :headers="headersCustomer"
                                    :items="rowsCustomer" :hide-default-footer="true">
                                    <template v-slot:[`item.index`]="{ item }">
                                        {{ rowsCustomer.indexOf(item)+1 }}
                                    </template>
                                </v-data-table>
                            </v-app>
                        </div>
                    </div>
                </div>

                <!-- store -->
                <div class="col-lg-6">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                افضل المتاجر
                            </div>
                        </div>
                        <div class="card-body" style="padding: 0px">
                            <v-app>
                                <v-data-table class="col-lg-12 my-table" :headers="headersStore"
                                    :items="rowsStore" :hide-default-footer="true">
                                    <template v-slot:[`item.index`]="{ item }">
                                        {{ rowsStore.indexOf(item)+1 }}
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
                            </v-app>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import chart
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
    name: "Dashboard",
    data() {
        return {


            //visit chart
            series2: [],
            chartOptions2: {
                chart: {
                    height: 350,
                    type: "line",
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: "smooth",
                },
                colors: ['#af3a88', '#F5EFF3'],
                xaxis: {
                    categories: [
                        "سبت",
                        "احد",
                        "اثنين",
                        "ثلاثاء",
                        "اربعاء",
                        "خميس",
                        "جمعة",
                        "سبت",
                    ],
                },
            },


            series: [],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "area",
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                },
                colors: ['#0a66c2', '#0a66c2'],
                xaxis: {
                    categories: [
                    ],
                },
            },


            //order-table
            headers: [
                { text: 'رقم الطلب', value: 'id', align: 'center',},
                { text: 'اسم الزبون', value: 'customer_name', align: 'center' },
                { text: 'اسم المتجر', value: 'store_name', align: 'center' },
                { text: 'تاريخ الطلب', value: 'created_at', align: 'center' },
                { text: 'تاريخ الحد الاقصى للتسليم', value: 'delivery_time', align: 'center' },
            ],
            rowsOrder: [],
            
            //customer-table
            headersCustomer: [
                {text: '#',  value: 'index', align: 'center'},
                { text: 'الاسم', value: 'customer_name', align: 'center' },
                { text: 'المبلغ', value: 'total_price', align: 'center' },
                { text: 'عدد الطلبات', value: 'num_orders' , align: 'center' },
            ],
            rowsCustomer: [],

            //store-table
            headersStore: [
                {text: '#',  value: 'index', align: 'center'},
                { text: 'الاسم', value: 'shop_name', align: 'center' },
                { text: 'عدد المنتجات', value: 'num_products' , align: 'center'},
                { text: 'التقييم', value: 'review' , align: 'center' },
                
            ],
            rowsStore: [],

            store:'',
            customer:'',
            objection:'',
            join_request:'',
            page: 1,
            pageCount: 0,
            data_class:[],
            label_class:[],
            classification:[],
        };
    },
    components: {
        apexchart: VueApexCharts,
    },
    methods: {
        getImage(item){
            // return "http://"+this.$store.state.ip+"uploads/books/"+item.image
        },
        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/dashboared/admin")
            .then(res => {
                // console.log(res.data.data);
                this.customer = res.data.data.num_customers
                this.store = res.data.data.num_stores
                this.objection = res.data.data.num_reports
                this.join_request = res.data.data.num_login
                this.rowsStore = res.data.data.best_store
                this.rowsCustomer = res.data.data.best_customer
            });

            this.axios.get("http://"+this.$store.state.ip+"api/all_classiffications")
            .then(res => {
                this.classification = res.data.data
                this.getClassification()
                // console.log(res.data.data)
            })
        },
        getClassification(){
            // console.log(this.classification)
            for (let i = 0; i < this.classification.length; i++){
                this.data_class[i] = this.classification[i].num_sales
                this.label_class[i] = this.classification[i].classification_title
            }
            console.log(this.data_class)
            console.log(this.label_class)

            this.$refs.chart_sales.updateSeries([{
                name: 'Sales',
                data: this.data_class
            }])
            this.$refs.chart_sales.updateOptions({
                xaxis: {
                    categories: this.label_class
                }
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
