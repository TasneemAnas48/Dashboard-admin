
<template>
    <div class="body-page add-classification" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header" v-if="this.route == 'add-classification'">
                    <div class="d-flex justify-content-between align-items-center add">
                        إضافة تصنيف
                        <router-link to="/view-classification">
                            <b-button class="button-view">عرض التصنيفات</b-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-header" v-else-if="this.route == 'edit-classification'">
                    <div class="d-flex justify-content-between align-items-center add">
                        تعديل تصنيف
                        <router-link to="/view-classification">
                            <b-button class="button-view">عرض التصنيفات</b-button>
                        </router-link>
                    </div>
                </div>

                <div class="card-body">
                    <div class="row align-items-center" style="margin-top:40px">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-6">
                            <v-app>
                                <form class="form-input">
                                    
                                    <div>
                                        <div class="form-row label-row">
                                            <div class="col-lg-1"></div>
                                            <label for="type" class="col-lg-5 label-input">الصنف الرئيسي </label>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-lg-1"></div>
                                            <b-form-input class="col-lg-7 col-md-11 col-sm-11 col-10 input-field" v-model="title" name="title">
                                            </b-form-input>
                                        </div>

                                        <div class="form-row label-row">
                                            <div class="col-lg-1"></div>
                                            <label for="value" class="col-lg-5 label-input">الصنف الثانوي </label>
                                        </div>
                                        <div class="form-row" v-for="(item,i) in secondray" :key="i">
                                            <div class="col-lg-1"></div>

                                                <b-form-input  v-model="item[i]" class="col-lg-7 col-md-11 col-sm-11 col-10 input-field"  >
                                                </b-form-input>
                                            <div class="col-lg-1 plus-value">
                                                <b-button @click="add" type="button" class="button-add button-plus">+
                                                </b-button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="float-left row-bottom col-lg-7" v-if="this.route == 'add-classification'" style="margin-top:30px">
                                        <b-button type="button" class="button-add" v-on:click="submitForm">
                                            إنشاء
                                        </b-button>
                                    </div>
                                    <div class="float-left row-bottom col-lg-7" v-else-if="this.route == 'edit-classification'" style="margin-top:30px">
                                        <b-button type="button" class="button-add" v-on:click="submitForm">
                                            تعديل
                                        </b-button>
                                    </div>
                                </form>
                            </v-app>
                        </div>
                        <div class="col-lg-5 d-none d-xl-block d-lg-block" style="margin-bottom:100px">
                            <img src="../../assets/img/add_classification.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputOption from "@/components/InputOption.vue";
export default {
    name: "AddClassification",
    data() {
        return {
            title:'',
            item:'',
            secondray: [{}],
            list: [],
            id: '',
            route:'',

        };
    },
    methods: {
        add() {
            // console.log(this.secondray)
            this.secondray.push({

            })
        },
        
        submitForm() {
            // console.log(this.secondray)
            // console.log(this.secondray.length)
            this.initData()
            this.addData()
        },
        initData(){
            for (let i = 0; i < this.secondray.length; i++)
                if (this.secondray[i][i] != undefined)
                    this.list[i] = this.secondray[i][i]
            // console.log(this.list)
        },
        addData(){
            this.axios
                .post("http://" + this.$store.state.ip + "api/admin/classification/create", {
                    title: this.title,
                    secondray: this.list
                })
                .then((res) => {
                    // console.log(res)
                    if (res.statusText == "OK")
                            this.$router.replace({ name: 'view-classification' })
                })
        },
    },
    watch:{
        task: function(){
            console.log(this.task.time)
        }
    },

    mounted() {
        console.log(this.title)
        this.route = this.$route.name
        // if (this.$route.name == "edit-classification"){
        //     this.id = this.$route.params.id
        //     this.axios.get("http://"+this.$store.state.ip+"api/admin/classification/show/" + this.id)
        //     .then(res => {
                
        //     })
        // }
    },
    components: {
        InputOption,
    },
};

</script>


<style lang="scss">
@import '@/assets/css/Classification/AddClassification.css';
.add-classification .custom{
    padding:0px !important
}
.add-classification .v-application--wrap {
    min-height: 50% !important;
}
</style>
