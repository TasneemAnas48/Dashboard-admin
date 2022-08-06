<template>
    <div class="body-page view store" id="body-page">
        <div class="body">
            <div class="card" style="padding-bottom: 20px;">
                <div class="card-body">
                    <!-- <img :src="getCover()"/> -->
                    <img src="../../assets/img/cover.jpg" class="cover" />
                    <div class="row" style="justify-content: space-between;">
                        <div class="info">
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
                            <div class="row row-detail col-lg-12">
                                <p class="col-lg-7 left"> تاريخ الانضمام</p>
                                <p class="col-lg-5 right"> {{ created_at }}</p>
                            </div>
                            <div class="row row-detail col-lg-12">
                                <p class="col-lg-7 left"> حالة المتجر</p>
                                <p class="col-lg-5 right"> {{ status }}</p>
                            </div>
                            <div class="row row-detail col-lg-12">
                                <p class="col-lg-7 left"> التوصيل</p>
                                <p class="col-lg-5 right"> {{ delevary }}</p>
                            </div>
                        </div>
                        <div>
                            <img src="../../assets/img/logo2.jpg" class="logo" />
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

        <!-- rate table -->
        <div class="body">
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
                            <!-- <template v-slot:header.green>
                                <v-icon color="green">mdi-emoticon-excited-outline</v-icon>
                            </template>
                            <template v-slot:header.yellow>
                                <v-icon color="yellow">mdi-emoticon-neutral-outline</v-icon>
                            </template>
                            <template v-slot:header.red>
                                <v-icon color="red">mdi-emoticon-sad-outline</v-icon>
                            </template> -->
                        </v-data-table>

                    </v-app>
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
            store_id:null,
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
                colors: ['#af3a88', '#F5EFF3'],
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
            store_name: 'خيط وسنارة',
            created_at: '4/4/2022',
            status: 'فعال',
            delevary: 'دمشق',
            rate: 4,

            // rate table
            rowsRate: [],
            headers: [
                { text: 'المدة', value: 'id', align: 'center', },
                { text: 'عدد المنتجات المباعة', value: 'number', align: 'center' },
                { text: '', value: 'green', align: 'center' },
                { text: '', value: 'yellow', align: 'center' },
                { text: '', value: 'red', align: 'center' },
            ],

            // groups
            groups: []



        };
    },
    components: {
        apexchart: VueApexCharts,
    },

    methods: {
        // getCover() {

        // },
        // getLogo(){

        // },
        getImageGroup(group) {
            return "http://" + this.$store.state.ip + "bayanImages/" + group.image
        },
        getGroup() {
            this.axios.get("http://" + this.$store.state.ip + "api/collection/collectionNane/" + this.store_id)
                .then(res => {
                    this.groups = res.data
                    console.log(res.data)
                });
        },
        viewProduct(item){
            this.$router.replace({ name: 'product', params: {id: item.id, store_id: this.store_id} })
        },
    },
    mounted() {
        this.store_id = this.$route.params.id
        console.log(this.store_id)
        this.getGroup()
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
    margin-right: 20px;
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
