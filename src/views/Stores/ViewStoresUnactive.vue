<template>
    <div class="body-page view-stores" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        المتاجر غير الفعالة
                        <router-link to="/view-stores">
                            <b-button class="button-view">المتاجر الفعالة </b-button>
                        </router-link>
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
                            :page.sync="page" @page-count="pageCount = $event" :hide-default-footer="true"  v-if="status == 'OK'">
                            

                            <template v-slot:top>
                                <v-dialog v-model="dialogActiveStatus" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت متأكد من انك تريد الغاء تفعيل المتجر
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeDisActiveStore">لا تراجع
                                            </v-btn>
                                            <v-btn color="red" text @click="disActiveStore">نعم تأكيد
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogNotActiveStatus" max-width="500px">
                                    <v-card>
                                        <v-spacer></v-spacer>
                                        <v-card-title class="justify-content-center" style="padding-top: 30px">هل انت متأكد من انك تريد اعادة تفعيل المتجر
                                        </v-card-title>
                                        <v-card-actions style="padding-bottom: 30px">
                                            <v-spacer></v-spacer>
                                            <v-btn color="var(--gray-medium)" text @click="closeReActiveStore">لا تراجع
                                            </v-btn>
                                            <v-btn color="red" text @click="ReActiveStore">نعم تأكيد
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                            
                            
                            
                            <template v-slot:[`item.status`]="{ item }">
                                <td v-if="item.status == '0'">
                                    <b-button type="button" class="activeee"  @click="statusItem(item)">اعادة تفعيل 
                                    </b-button>
                                </td>
                            </template>

                            <template v-slot:[`item.mangement`]="{ item }">
                                <font-awesome-icon icon="fas fa-expand-arrows-alt" class="fa-expand-arrows-alt"
                                    @click="viewItem(item)" />
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
    name: "ViewStores",
    data() {
        return {
            page: 1,
            pageCount: 0,
            search: '',
            headers: [
                { text: 'الرقم', value: 'id', align: 'center', },
                { text: 'الاسم', value: 'name', align: 'center', },
                { text: ' الوصف', value: 'discription', align: 'center', },
                { text: ' المبيعات', value: 'num_of_salling', align: 'center', },
                { text: ' الحالة', value: 'status', align: 'center', },
                { text: 'إدارة', value: 'mangement', align: 'center', sortable: false,},
            ],
            rows: [],
            status:'',
            dialogActiveStatus: false,
            dialogNotActiveStatus: false,
            disActive_id: null,
            Active_id: null,
            editedIndex: -1,
            // switch1: null,
        };
    },

    methods: {
        statusItem(item){
            console.log(item.status)
            if (item.status == '1'){
                this.dialogActiveStatus = true
                this.disActive_id = item.id
                this.editedIndex = this.rows.indexOf(item)
            } else if(item.status == '0'){
                this.dialogNotActiveStatus = true
                this.Active_id = item.id
                this.editedIndex = this.rows.indexOf(item)
            }
        },
        disActiveStore(){
            this.rows.splice(this.editedIndex, 1)
            console.log(this.disActive_id)
            this.axios.post("http://"+this.$store.state.ip+"api/admin/WaitingStore/deactivate_store/"+ this.disActive_id)
                .then((res) => {
                    console.log(res)
                });
            this.dialogActiveStatus = false
        },
        ReActiveStore(){
            this.rows.splice(this.editedIndex, 1)
            console.log(this.Active_id)
            this.axios.post("http://"+this.$store.state.ip+"api/admin/WaitingStore/activate_store/"+ this.Active_id)
                .then((res) => {
                    console.log(res)
                });
            this.dialogNotActiveStatus = false
        },
        closeDisActiveStore(){
            this.dialogActiveStatus = false
        },
        closeReActiveStore(){
            this.dialogNotActiveStatus = false
        },


        viewItem(item){
            this.$router.replace({ name: 'store', params: {id: item.id} })
        },
        getId(item){
            console.log(item.id)
        },

        getData(){
            this.axios.get("http://"+this.$store.state.ip+"api/admin/Store/show_deactive")
            .then(res => {
                this.status = res.statusText
                this.rows = res.data
                console.log(res.data)
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
.v-input--switch__thumb {
    margin-right: 25px !important;
}

.view-stores .my-table .v-input--switch {
    margin-right: 45px !important;
}
.v-dialog{
    border-radius: 30px !important;
}
.view-stores .activeee{
    color: #40C93B !important;
    font-size: 15px !important;
    background: white !important;
    border: 1px #40C93B solid !important;
    border-radius: 20px !important;
}
.view-stores .activeee:hover{
    color: white !important;
    background: #40C93B !important;
    border: 1px white solid !important;
}
</style>
