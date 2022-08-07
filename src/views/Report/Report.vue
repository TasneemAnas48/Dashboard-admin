<template>
    <div class="body-page view dashboard" id="body-page">

        <!-- header -->
        <div class="container">
            <div class="body row">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <button @click="stores">
                        <div class="card mini-card report" v-bind:class="{ activee: report == 'stores' }">
                            <div class="card-body">
                                <div class="row row-header">
                                    <font-awesome-icon  icon="fas fa-store" class="icon-report" />
                                </div>
                                <div class="row" style="justify-content: center; margin-top:23px">
                                    <h5 class="color">المتاجر</h5>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <button @click="classification">
                        <div class="card mini-card report" v-bind:class="{ activee: report == 'classification' }">
                            <div class="card-body">
                                <div class="row row-header">
                                    <font-awesome-icon  icon="fa fa-sitemap" class="icon-report" />
                                </div>
                                <div class="row" style="justify-content: center">
                                    <h5 class="color">التصنيفات</h5>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <button @click="customer">
                        <div class="card mini-card report" v-bind:class="{ activee: report == 'customer' }">
                            <div class="card-body">
                                <div class="row row-header">
                                    <font-awesome-icon  icon="fas fa-users" class="icon-report" />
                                </div>
                                <div class="row" style="justify-content: center">
                                    <h5 class="color">الزبائن </h5>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <button @click="rate">
                        <div class="card mini-card report" v-bind:class="{ activee: report == 'rate' }">
                            <div class="card-body">
                                <div class="row row-header">
                                    <font-awesome-icon  icon="fas fa-exclamation-circle" class="icon-report" />
                                </div>
                                <div class="row" style="justify-content: center">
                                    <h5 class="color">تقييمات المنتجات</h5>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

            </div>
        </div>

        <!-- stores Table -->
        <div class="container" v-if="report == 'stores'">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                المتاجر
                                <router-link to="/report-stores">
                                    <b-button class="button-view" style="margin-left:30px">طباعة التقرير</b-button>
                                </router-link>
                            </div>
                        </div>
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

        <!-- classification Table -->
        <div class="container" v-if="report == 'classification'">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                التصنيفات
                                <router-link to="/report-classification">
                                    <b-button class="button-view" style="margin-left:30px">طباعة التقرير</b-button>
                                </router-link>
                            </div>
                        </div>
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

        <!-- Customer Table -->
        <div class="container" v-if="report == 'customer'">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                الزبائن
                                <router-link to="/report-customer">
                                    <b-button class="button-view" style="margin-left:30px">طباعة التقرير</b-button>
                                </router-link>
                            </div>
                        </div>
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

        <!-- rate Table -->
        <div class="container" v-if="report == 'rate'">
            <div class="body row">
                <div class="col-lg-12">
                    <div class="card" style="margin: 0px">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center add">
                                تقييمات المنتجات
                                <router-link to="/report-rate">
                                    <b-button class="button-view" style="margin-left:30px">طباعة التقرير</b-button>
                                </router-link>
                            </div>
                        </div>
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
    name: "Report",
    data() {
        return {
            report: 'stores',

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

            //classification-table
            headersClassification: [
                { text: 'الرقم', value: 'classification_id', align: 'center', },
                { text: 'الصنف الرئيسي', value: 'classification_title', align: 'center', },
                { text: 'التصنيفات الثانوية', value: 'secondary_classiffication', align: 'center', },
                { text: 'عدد المنتجات', value: 'num_products', align: 'center', },
                { text: 'عدد المتاجر', value: 'num_stores', align: 'center', },
            ],
            rowsClassification: [],

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
        stores() {
            this.report = 'stores'
            // console.log(this.report)
        },
        classification() {
            this.report = 'classification'
            // console.log(this.report)
        },
        customer() {
            this.report = 'customer'
            // console.log(this.report)
        },
        rate() {
            this.report = 'rate'
            // console.log(this.report)
        },
        getStores() {
            this.axios.get("http://"+this.$store.state.ip+"api/all_stores")
            .then(res => {
                this.rowsStores = res.data.data
                console.log(res.data.data)
            });
        },
        getClassification() {
            this.axios.get("http://"+this.$store.state.ip+"api/all_classiffications")
            .then(res => {
                this.rowsClassification = res.data.data
                console.log(res.data.data)
            });
            
        },
        getCustomer() {
            this.axios.get("http://"+this.$store.state.ip+"api/allCustomer")
            .then(res => {
                this.rowsCustomer = res.data.data
                console.log(res.data.data)
            });
        },
        getRate() {
            this.axios.get("http://"+this.$store.state.ip+"api/review/prodcuts")
            .then(res => {
                this.rowsRate = res.data.data
                console.log(res.data.data)
            });
        },

    },
    watch: {
        report() {
            if (this.report == 'stores')
                this.getStores()
            if (this.report == 'classification')
                this.getClassification()
            if (this.report == 'customer')
                this.getCustomer()
            if (this.report == 'rate')
                this.getRate()
        }
    },
    mounted() {
        this.getStores()
    }
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
