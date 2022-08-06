<template>
    <div class="body-page view-join" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        طلبات انضمام المتاجر
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
                            <template v-slot:[`item.store.image`]="{ item }">
                                <img class="table-img" :src="getImage(item)">
                            </template>
                            <template v-slot:[`item.store.Brand`]="{ item }">
                                <img class="table-img" :src="getBrand(item)">
                            </template>
                            <template v-slot:[`item.store.facebook`]="{ item }">
                                <td v-if="item.store.facebook == undefined"> </td>
                            </template>
                            <template v-slot:top>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك تريد رفض المتجر؟
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeDelete">لا تراجع
                                            </v-btn>
                                            <v-btn color="red" text @click="deleteItemConfirm">نعم تأكيد
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogAccept" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت
                                            متأكد من انك تريد قبول المتجر؟
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeAccept">لا تراجع
                                            </v-btn>
                                            <v-btn color="green" text @click="acceptItemConfirm">نعم تأكيد
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>

                            <template v-slot:[`item.managment`]="{ item }">
                                <font-awesome-icon icon="fa fa-close" class="fa-close" @click="deleteItem(item)" />
                                <font-awesome-icon icon="fa fa-check" class="fa-check" @click="acceptItem(item)" />
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
    name: "JoinRequestes",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            dialogDelete: false,
            dialogAccept: false,
            headers: [
                { text: 'الاسم', value: 'person_name', align: 'center', width:'140'},
                { text: 'الايميل', value: 'person_email', align: 'center', width:'140'},
                { text: 'اسم المتجر', value: 'store.name', align: 'center', width:'140'},
                { text: 'وصف المتجر', value: 'store.discription', align: 'center', width:'140'},
                { text: 'تاريخ الطلب', value: 'store.created_at', align: 'center', width:'140'},
                { text: ' فيسبوك', value: 'store.facebook', align: 'center', width:'140'},
                { text: ' اماكن التوصيل', value: 'store.delivery_area', align: 'center', width:'140'},
                { text: 'العلامة التجارية', value: 'store.Brand', align: 'center', width:'150'},
                { text: 'صورة الغلاف', value: 'store.image', align: 'center', width:'140'},
                { text: 'إدارة', value: 'managment', align: 'center', sortable: false, width:'120'},
            ],
            rows: [],
            checkedIndex: -1,
            delete: '',
            accept: '',
            status: '',
        };
    },
    watch: {
        dialogDelete(val) {
            val || this.closeDelete()
        },
        dialogAccept(val) {
            val || this.closeAccept()
        },
    },

    methods: {
        getImage(item){
            return "http://"+this.$store.state.ip+"uploads/stores/"+item.store.image
        },
        getBrand(item){
            return "http://"+this.$store.state.ip+"uploads/stores/"+item.store.Brand
        },
        deleteItem(item) {
            this.checkedIndex = this.rows.indexOf(item)
            this.delete = item
            this.dialogDelete = true
        },
        deleteItemConfirm() {
            this.rows.splice(this.checkedIndex, 1)
            this.sendIdDeleted()
            this.closeDelete()
        },
        closeDelete() {
            this.dialogDelete = false
        },
        sendIdDeleted() {
            console.log(this.delete.store.id)
            this.axios.post("http://"+this.$store.state.ip+"api/admin/WaitingStore/reject_store/"+ this.delete.store.id)
                .then((res) => {
                    console.log(res.data)
                });
        },
        acceptItem(item) {
            this.checkedIndex = this.rows.indexOf(item)
            this.accept = item
            this.dialogAccept = true
        },
        acceptItemConfirm() {
            this.rows.splice(this.checkedIndex, 1)
            this.sendIdAccept()
            this.closeAccept()
        },
        closeAccept() {
            this.dialogAccept = false
        },
        sendIdAccept() {
            console.log(this.accept.store.id)
            this.axios.post("http://"+this.$store.state.ip+"api/admin/WaitingStore/accept_store/"+ this.accept.store.id)
                .then((res) => {
                    console.log(res.data)
                });
        },
        getData() {
            this.axios.get("http://"+this.$store.state.ip+"api/admin/Store/show_waite")
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
@import '@/assets/css/JoinRequests/JoinRequests.css';

.view .my-table .table-img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
}

</style>
