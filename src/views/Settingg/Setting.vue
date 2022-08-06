<template>
    <div class="body-page setting" id="body-page">
        <div class="body">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center add">
                        الاعدادات
                    </div>
                </div>
                <div class="card-body">

                    <div class="row align-items-center">
                        <v-app class="col-lg-6">
                            <form class="form-input ">

                                <div class="form-row ">
                                    <label for="lang" class="col-lg-4 label-input ">لغة الموقع</label>
                                    <v-select class="col-md-7 input-field" :items="items" color=var(--main-color)
                                        :label='selected' dense solo></v-select>
                                </div>

                                <div class="form-row " style="margin-top: 40px">
                                    <label for="color" class="col-lg-4 label-input">الوان الموقع</label>
                                    <b-form-radio class="col-lg-4" id="dark" name="color" value="dark" v-model="theme">
                                        Dark
                                    </b-form-radio>
                                    <b-form-radio class="col-lg-3" id="light" name="color" value="light"
                                        v-model="theme">
                                        Light
                                    </b-form-radio>
                                </div>

                                    <div class="float-left row-bottom">
                                        <b-button type="button" class="button-add"  style="margin-left:0px">
                                            حفظ
                                        </b-button>
                                    </div>
                            </form>
                        </v-app>

                        <div class="col-lg-5 d-none d-xl-block d-lg-block">
                            <img src="../../assets/img/setting_admin.png" class="img-thumbnail img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: "Setting",

    data() {
        return {
            selected: 'عربي',
            theme: '',
            items: ['عربي', 'انكليزي'],
            
        }
    },
    
    mounted() {
        this.theme = localStorage.getItem("theme")
    },

    methods: {
        
    },
    watch: {
        theme: function (val) {
            let htmlElement = document.documentElement;
            if (val == 'dark') {
                localStorage.setItem("theme", 'dark');
                htmlElement.setAttribute('theme', 'dark');
            } else if (val == 'light') {
                localStorage.setItem("theme", 'light');
                htmlElement.setAttribute('theme', 'light');
            }
        },
    }
};
</script>

<style lang="scss">
@import '@/assets/css/Settingg/Setting.css';
</style>


