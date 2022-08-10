<template>
    <div class="body-page view store" id="body-page">

        <div class="body">
            <div class="card" style="padding-bottom: 40px;">
                <div class="card-body">
                    <img :src="getCover()"  class="cover"/>
                    <div class="row" style="justify-content: space-between;">
                        <div class="info col-lg-4">
                            <div class="title row">
                                <h2>{{ store_name }}</h2>
                                <div v-if="rate == 1">
                                    <v-icon>mdi-star</v-icon>
                                </div>
                                <div v-else-if="rate == 2">
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                </div>
                                <div v-else-if="rate == 3">
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                </div>
                                <div v-else-if="rate == 4">
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                </div>
                                <div v-else-if="rate == 5">
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                </div>
                            </div>
                            <div class="row row-detail col-lg-10">
                                <p class="col-lg-7 left"> تاريخ الانضمام</p>
                                <p class="col-lg-5 right"> {{ created_at }}</p>
                            </div>
                            <div class="row row-detail col-lg-10">
                                <p class="col-lg-7 left"> حالة المتجر</p>
                                <p class="col-lg-5 right" v-if="status == 1"> فعال</p>
                                <p class="col-lg-5 right" v-else-if="status == 0"> غير فعال</p>
                            </div>
                            <div class="row row-detail col-lg-10">
                                <p class="col-lg-7 left"> التوصيل</p>
                                <p class="col-lg-5 right"> {{ delevary }}</p>
                            </div>
                        </div>
                        <div>
                            <img :src="getLogo()" class="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- sales chart -->
        <div class="body">
            <div class="card" id="chart">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المبيعات
                    </div>
                </div>
                <div class="card-body">
                    <apexchart ref="chart_sales" type="area" height="350" :options="chartOptions" :series="series">
                    </apexchart>
                    <div class="card-footer">
                        مخطط البيع السنوي لسنة 2021
                    </div>
                </div>
            </div>
        </div>


        <!-- groups -->
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المجموعات
                    </div>
                </div>
                <div class="card-body">
                    <v-app>
                        <div class="row">
                            <div class="col-lg-3" v-for="(group, i) in groups" :key="i">
                                <v-card class="mx-auto" max-width="344">
                                    <v-img :src="getImageGroup(group)" height="200px">
                                    </v-img>
                                    <div class="row" style="justify-content: space-between">
                                        <v-card-title style="margin-right: 20px">
                                            {{ group.title }}
                                        </v-card-title>

                                    </div>
                                    <div class="row" style="justify-content: space-between">
                                        <v-card-subtitle style="margin-right: 20px">
                                            عدد المنتجات: {{ group.number }}
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-btn color="var(--main-color)" text style="margin-left: 20px" @click="viewProduct(group)">
                                                عرض
                                            </v-btn>

                                            <v-spacer></v-spacer>

                                        </v-card-actions>
                                    </div>

                                </v-card>
                            </div>
                        </div>
                    </v-app>
                </div>
            </div>
        </div>


        <!-- rate table -->
        <div class="body rate">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        تقييمات المنتجات
                    </div>
                </div>
                <div class="card-body" style="padding: 0px">
                    <v-app>
                        <v-data-table class="col-lg-12 my-table" :headers="headers" :items="rowsRate"
                            :hide-default-footer="true">
                            <template v-slot:header.green>
                                <v-icon color="green">mdi-emoticon-excited-outline</v-icon>
                            </template>
                            <template v-slot:header.yellow>
                                <v-icon color="yellow">mdi-emoticon-neutral-outline</v-icon>
                            </template>
                            <template v-slot:header.red>
                                <v-icon color="red">mdi-emoticon-sad-outline</v-icon>
                            </template>
                        </v-data-table>

                    </v-app>
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
    name: "Store",
    data() {
        return {
            store_id: null,

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
                colors: ['#0a66c2', '#F5EFF3'],
                xaxis: {
                    categories: [
                        "كانون الثاني",
                        "شباط",
                        "اذار",
                        "نيسان",
                        "ايار",
                        "حزيران",
                        "تموز",
                        "اب",
                        "ايلول",
                        "تشرين الاول",
                        "تشرين الثاني",
                        "كانون الاول",
                    ],
                },
            },

            rows: [],
            store_name: '',
            created_at: '',
            status: null,
            delevary: '',
            rate: null,
            brand:'',
            image:'',

            // rate table
            rowsRate: [],
            headers: [
                { text: '#', value: 'time', align: 'center', },
                { text: 'عدد المنتجات المباعة', value: 'number', align: 'center' },
                { text: '', value: 'green', align: 'center' },
                { text: '', value: 'yellow', align: 'center' },
                { text: '', value: 'red', align: 'center' },
            ],
            rowsTemp:[
                {
                    number:0, green:0, yellow:0, red:0, time:'الشهر الحالي'
                },
                {
                    number:0, green:0, yellow:0, red:0, time:'الشهر السابق'
                },
            ],

            // groups
            groups: []

        };
    },
    components: {
        apexchart: VueApexCharts,
    },

    methods: {
        getCover() {
            return "http://"+this.$store.state.ip+"uploads/stores/"+this.image
        },
        getLogo(){
            return "http://"+this.$store.state.ip+"uploads/stores/"+this.brand
        },
        getData(){
            this.axios.get("http://" + this.$store.state.ip + "api/store/profile/rating/" + this.store_id)
                .then(res => {
                    this.store_name = res.data.data[0].store_name
                    this.rate = res.data.data[0].review
                    this.status = res.data.data[0].status
                    this.created_at = res.data.data[0].created_at
                    this.brand = res.data.data[0].brand
                    this.image = res.data.data[0].image
                    this.delevary = res.data.data[0].delivery_area
                    
                    this.rowsTemp[0].number = res.data.data[0].num_sales_last_month
                    this.rowsTemp[0].green = res.data.data[0].smile_last_month
                    this.rowsTemp[0].yellow = res.data.data[0].good_last_month
                    this.rowsTemp[0].red = res.data.data[0].bad_last_month

                    this.rowsTemp[1].number = res.data.data[0].num_sales_befor_2month
                    this.rowsTemp[1].green = res.data.data[0].smile_last_2month
                    this.rowsTemp[1].yellow = res.data.data[0].good_last_2month
                    this.rowsTemp[1].red = res.data.data[0].bad_last_2month

                    this.rowsRate = this.rowsTemp

                    this.$refs.chart_sales.updateSeries([{
                        data: res.data.data[0].salles
                    }])
                    // console.log(this.$refs.chart_sales)

                    console.log(res.data.data[0])
                });
        },
        getImageGroup(group) {
            return "http://" + this.$store.state.ip + "bayanImages/" + group.image
        },
        getGroup() {
            this.axios.get("http://" + this.$store.state.ip + "api/collection/collectionNane/" + this.store_id)
                .then(res => {
                    this.groups = res.data
                    // console.log(res.data)
                });
        },
        viewProduct(item){
            this.$router.replace({ name: 'product', params: {id: item.id, store_id: this.store_id} })
        },
    },
    mounted() {
        this.store_id = this.$route.params.id
        // console.log(this.store_id)
        this.getGroup()
        this.getData()
    },
    components: {
    },
};
</script>

<style lang="scss">
.store .cover {
    width: 1160px;
    border-radius: 20px;
    height: 300px;
}

.store .logo {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-left: 100px;
    box-shadow: 0px 0px 12px 5px #00000012;
}

.store .info {
    margin-right: 100px;
}

.store .title {
    margin-top: 30px;
    margin-right: 40px;
}

.store .row-detail {
    margin-right: 20px;
    margin-bottom: -65px;
    color: var(--gray-medium);
}

.store .left {
    text-align: right;
}

.store .right {
    text-align: right;
}

.store .card-footer {
    color: var(--main-color);
    background: none;
    border-top: none !important;
}

.store .mdi-star {
    color: rgb(248, 224, 11) !important;
    margin-top: 7px;
    margin-right: 5px;
}

.store .v-application {
    border-radius: 30px !important;
}
.store .v-card{
    border-radius: 20px !important;
}   

</style>
