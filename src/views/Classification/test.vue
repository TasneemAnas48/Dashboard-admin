
<div class="breadcrumb">
    <h1>{{ ('translate.Create_Task') }}</h1>
    <ul>
        <li><a href="/tasks">{{ ('translate.Tasks') }}</a></li>
        <li>{{ ('translate.Create_Task') }}</li>
    </ul>
</div>

<div class="separator-breadcrumb border-top"></div>

<div class="row" id="section_Task_Create">
    <div class="col-lg-12 mb-3">
        <div class="card">


            <form @submit.prevent="Create_Task()">
                <div class="card-body">
                    <div class="row">
                        <!-- <div class="col-md-4">
                            <label for="title" class="ul-form__label">{{ ('translate.Task_Title') }} <span
                                    class="field_required">*</span></label>
                            <input type="text" v-model="task.title" class="form-control" name="title" id="title"
                                placeholder="{{ ('translate.Enter_title') }}">
                            <span class="error" v-if="errors && errors.title">
                                @{{ errors.title[0] }}
                            </span>
                        </div> -->

                        <!--<div class="col-md-4">-->
                        <!--    <label for="start_date" class="ul-form__label">{{ ('translate.Start_Date') }} <span-->
                        <!--            class="field_required">*</span></label>-->

                        <!--    <vuejs-datepicker id="start_date" name="start_date"-->
                        <!--        placeholder="{{ ('translate.Enter_Start_date') }}" v-model="task.start_date"-->
                        <!--        input-class="form-control" format="yyyy-MM-dd"-->
                        <!--        @closed="task.start_date=formatDate(task.start_date)">-->
                        <!--    </vuejs-datepicker>-->

                        <!--    <span class="error" v-if="errors && errors.start_date">-->
                        <!--        @{{ errors.start_date[0] }}-->
                        <!--    </span>-->
                        <!--</div>-->

                        <!-- <div class="col-md-4">
                            <label for="end_date" class="ul-form__label">{{ ('translate.Finish_Date') }} <span
                                    class="field_required">*</span></label>
                                    <vuejs-datepicker id="end_date" name="end_date"
                                placeholder="{{ ('translate.Enter_Finish_date') }}" v-model="task.end_date"
                                input-class="form-control" format="yyyy-MM-dd"
                                @closed="task.end_date=formatDate(task.end_date)">
                            </vuejs-datepicker>

                            <span class="error" v-if="errors && errors.end_date">
                                @{{ errors.end_date[0] }}
                            </span>
                        </div> -->
                       
                         <!-------------------------------->
                         <div class="col-md-4">
                            <label for="end_date" class="ul-form__label">{{ ('translate.Finish_Date') }} <span
                                    class="field_required">*</span></label>
                           <input type="date" class="form-control" id="end_date" v-model="task.end_date" name="end_date" min="<?php echo date("Y-m-d"); ?>">               
                           
                        </div>
                          <!--------------------->
              
          
                        <div  class="col-md-4">
                            <label class="ul-form__label">{{ ('translate.Department') }} <span
                                    class="field_required">*</span></label>
                            
                            <v-select @input="Selected_Company" placeholder="{{ ('translate.Choose_Department') }}"
                                v-model="task.company_id" :reduce="label => label.value"
                                :options="companies.map(companies => ({label: companies.name, value: companies.id}))">
                            </v-select>

                            <span class="error" v-if="errors && errors.company_id">
                                @{{ errors.company_id[0] }}
                            </span>
                        </div>
                        <!---->
                        <!--<div class="form-group col-md-6">-->
                        <!--    <label class="ul-form__label">{{ ('translate.Designation') }} <span-->
                        <!--            class="field_required">*</span></label>-->
                        <!--    <v-select @input="Selected_Designation"-->
                        <!--        placeholder="{{ ('translate.Choose_Designation') }}" v-model="employee.designation_id"-->
                        <!--        :reduce="label => label.value"-->
                        <!--        :options="designations.map(designations => ({label: designations.designation, value: designations.id}))">-->
                        <!--    </v-select>-->

                        <!--    <span class="error" v-if="errors && errors.designation_id">-->
                        <!--        @{{ errors.designation_id[0] }}-->
                        <!--    </span>-->
                        <!--</div>-->
                        <!---->

                        <!--===========================================================-->
                        <div class="col-md-4">
                            <label class="ul-form__label">{{ ('translate.Assigned_Employees') }} </label>
                            
                            <v-select multiple @input="Selected_Team" placeholder="{{ ('translate.Choose_Team') }}"
                            
                                v-model="task.assigned_to.name" :reduce="label => label.value"
                                :options="employees.map(employees => ({label: employees.username , value: employees.username}))">
                            </v-select>
                            {{task.assigned_to.name}}
                        </div><div class="col-md-4">
                            <label class="ul-form__label">{{ ('translate.Project') }} <span
                                    class="field_required">*</span></label>
                            <v-select @input="Selected_Project" placeholder="{{ ('translate.Select_Project') }}"
                                v-model="task.project_id" :reduce="label => label.value"
                                :options="projects.map(projects => ({label: projects.title, value: projects.id}))">
                            </v-select>
                            <span class="error" v-if="errors && errors.project_id">
                                @{{ errors.project_id[0] }}
                            </span>
                        </div>
                        
                         <div class="col-md-4">
                            <label class="ul-form__label">{{ ('translate.Deliveries') }} <span
                                    class="field_required">*</span></label>
                            <v-select @input="Selected_Delivery" placeholder=""
                                v-model="task.delivery_id" :reduce="label => label.value"
                                :options="tasks.map(tasks => ({label: tasks.title, value: tasks.id}))">
                            </v-select>
                            <span class="error" v-if="errors && errors.project_id">
                                @{{ errors.project_id[0] }}
                            </span>
                        </div>
                      
                        <!------------------------------->
                        
                        <div class="col-md-4">
                            <label class="ul-form__label">{{ ('translate.Episodes') }} </label>
                            <span class="field_required">*</span></label>
                            <v-select @input="Selected_Episodes" placeholder="{{ ('translate.Episodes') }}"
                            
                                v-model="task.episode" :reduce="label => label.value"
                                :options="episodes.map(episodes => ({label: episodes.title, value: episodes.id}))">
                            </v-select>
                        </div>

                        <!--===================================================-->
                        <!-- <script type="type/javascript">
                            var temp = '@php echo $durations; @php'
                        </script>
                        <div class="col-md-4">
                             <label class="ul-form__label">{{ ('Duration') }} </label>
                             <span class="field_required">

                            </span></label> -->

                          <!-- <v-select   v-model="durations.id" :reduce="label => label.value"
                          :options="durations.map(durations => ({label: durations.duration, value: durations.id}))">         
                              </v-select>
                            -->

                         <!-- <input type="text" id = "durations" v-model="durations.id">
                        </div> --><!--===================================================-->
                        
                        
                         
                        <!---->
                        <!--<div class="col-md-4">-->
                        <!--    <label class="ul-form__label">{{ ('translate.Episodes') }} <span-->
                        <!--            class="field_required">*</span></label>-->
                        <!--    <v-select @input="Selected_Episodes" placeholder=""-->
                        <!--        v-model="tasks.task_id" :reduce="label => label.value"-->
                        <!--        :options="episodes.map(episodes => ({label: episodes.title, value: episodes.id}))">-->
                        <!--    </v-select>-->
                        <!--    <span class="error" v-if="errors && errors.project_id">-->
                        <!--        @{{ errors.project_id[0] }}-->
                        <!--    </span>-->
                        <!--</div>-->

                        <!--<div class="col-md-4">-->
                        <!--    <label for="summary" class="ul-form__label">{{ ('translate.Summary') }} <span-->
                        <!--            class="field_required">*</span></label>-->
                        <!--    <input type="text" v-model="task.summary" class="form-control" name="summary" id="summary"-->
                        <!--        placeholder="{{ ('translate.Enter_task_Summary') }}">-->
                        <!--    <span class="error" v-if="errors && errors.summary">-->
                        <!--        @{{ errors.summary[0] }}-->
                        <!--    </span>-->
                        <!--</div>-->


                        <!--<div class="col-md-4">-->
                        <!--    <label class="ul-form__label">{{ ('translate.Priority') }} <span-->
                        <!--            class="field_required">*</span></label>-->
                        <!--    <v-select @input="Selected_Priority" placeholder="{{ ('translate.Select_priority') }}"-->
                        <!--        v-model="task.priority" :reduce="(option) => option.value" :options="-->
                        <!--                [-->
                        <!--                    {label: 'Urgent', value: 'urgent'},-->
                        <!--                    {label: 'High', value: 'high'},-->
                        <!--                    {label: 'Medium', value: 'medium'},-->
                        <!--                    {label: 'Low', value: 'low'},-->
                        <!--                ]">-->
                        <!--    </v-select>-->

                        <!--    <span class="error" v-if="errors && errors.priority">-->
                        <!--        @{{ errors.priority[0] }}-->
                        <!--    </span>-->
                        <!--</div>-->

                        <!-- <div class="col-md-4">
                            <label class="ul-form__label">{{ ('translate.Status') }} <span
                                    class="field_required">*</span></label><v-select @input="Selected_Status" placeholder="{{ ('translate.Select_status') }}"
                                v-model="task.status" :reduce="(option) => option.value" :options="
                                            [
                                                {label: 'Not Started', value: 'not_started'},
                                                {label: 'In Progress', value: 'progress'},
                                                {label: 'Cancelled', value: 'cancelled'},
                                                {label: 'On Hold', value: 'hold'},
                                                {label: 'Completed', value: 'completed'},
                                            ]">
                            </v-select>

                            <span class="error" v-if="errors && errors.status">
                                @{{ errors.status[0] }}
                            </span>
                        </div> -->
                        
                            <div class="col-md-4">
                            <label for="title" class="ul-form__label">{{ ('translate.Minutes') }}
                                 </label>
                            <input type="text" v-model="task.minutes" class="form-control" name="minutes" id="minutes"
                                placeholder="{{ ('translate.Enter_Minutes') }}">
                            <!--<span class="error" v-if="errors && errors.title">-->
                            <!--    @{{ errors.title[0] }}-->
                            <!--</span>-->
                        </div>

                        <!--===========================================================-->

                        <div class="col-md-4 mt-4">
                            
                            <div v-for="task in task.assigned_to" class="d-flex justify-content-between align-items-center mb-2">
                                 <span>@{{task.name}}</span>
                                
                                    
                         <input  type="number" class="form-control w-75" v-model="task.time" mounted="myFunction()" name="time" min="1" max=durations.duration">  

                            </div>

                        </div>

                        <!--============================================================-->

                        <!--<div class="col-md-4">-->
                        <!--    <label class="ul-form__label">{{ ('translate.Progress') }}</label>-->
                        <!--    <vue-slider v-model="task.task_progress" />-->
                        <!--</div>-->
                        
                      
                        <div class="col-md-12">
                            <label for="description" class="ul-form__label">{{ ('translate.Description') }}</label>
                            <textarea type="text" v-model="task.description" class="form-control" name="description"
                                id="description" placeholder="{{ ('translate.Enter_description') }}"></textarea>
                        </div>
                    </div><div class="row mt-3">
                        <div class="col-lg-6">
                            <button type="submit" class="btn btn-primary" :disabled="SubmitProcessing">
                                {{ ('translate.Submit') }}
                            </button>
                            <div v-once class="typo__p" v-if="SubmitProcessing">
                                <div class="spinner spinner-primary mt-3"></div>
                            </div>
                        </div>
                    </div>
            </form>

            <!-- end::form -->
        </div>
    </div>

</div>
@endsection


@section('page-js')

<script src="{{asset('assets/js/vendor/vuejs-datepicker/vuejs-datepicker.min.js')}}"></script>
<script src="{{asset('assets/js/vue-slider-component.min.js')}}"></script>
<script>
function myFunction() {
 
}
</script>

<script>
    Vue.component('v-select', VueSelect.VueSelect)

    var app = new Vue({
    el: '#section_Task_Create',
    components: {
        vuejsDatepicker,
        VueSlider: window['vue-slider-component']
    },
    data: {
        SubmitProcessing:false,
        errors:[],
        durations:[],
        projects: [],
        companies:@json($companies),
        employees:[],
        tasks:[],
        episodes:[],
        
        dels :@json($dels),
        eh : '',
        tooltip:'right',
        task: {
            title:"",
            description:"",
            // summary:"",
            project_id:"",
            company_id:"",
            start_date:"",
            end_date:"",
            time:"",
            priority:"",
            minutes:"",
            task_progress:0,
            assigned_to:{
                name:'',
                time:'',
            },
            episode:"",
            duration:"",
            delivery_id:"",
            
          
        }, 
    },
    watch:{
   task:function(){
    console.log(this.task.time);
   }
    },
   
   
    methods: {

        Selected_Team(value) {
            if (value === null) {
                this.task.assigned_to = [];
            }
            console.log(this.task.assigned_to);
        },

        formatDate(d){
            var m1 = d.getMonth()+1;
            var m2 = m1 < 10 ? '0' + m1 : m1;
            var d1 = d.getDate();
            var d2 = d1 < 10 ? '0' + d1 : d1;
            return [d.getFullYear(), m2, d2].join('-');
        },

        Selected_Project(value) {
            if (value === null) {
                this.task.project_id = "";
            }
             this.Get_tasks_by_project(value);
            
        },

        Selected_Status(value) {
            if (value === null) {
                this.task.status = "";
            }
        },
        Selected_Delivery(value) {
            if (value === null) {
                this.task.delivery_id = "";
            }
            this.Get_episodes_by_task(value);
        },

        
        Selected_Priority(value) {
            if (value === null) {
                this.task.priority = "";
            }
        },

        Selected_Episodes(value){
            if(value == null){
                this.episode = "";  
            }
            this.Get_duration_by_episod(value);
        },
        
        Selected_Ep(value){
        
            if (value === null) {
                this.duration = "";
            }
            
        },


        Selected_Company(value) {
            if (value === null) {
                this.task.company_id = "";
            }
            this.employees = [];
            this.task.assigned_to = [];
            this.Get_employees_by_company(value);
            this.Get_projects_by_company(value);
        },

            
        //---------------------- Get_employees_by_company ------------------------------\\
        
        Get_duration_by_episod(value){
            axios
            .get("/Get_duration_by_episod?id=" + value)
            .then(({ data }) => (this.durations = data));

        },
        Get_employees_by_company(value) {
            axios
            .get("/Get_employees_by_company?id=" + value).then(({ data }) => (this.employees = data));
        },
        Get_projects_by_company(value){
             axios
            .get("/Get_projects_by_company?id=" + value)
            .then(({ data }) => (this.projects = data));
        },
        Get_tasks_by_project(value){
             axios
            .get("/Get_tasks_by_project?id=" + value)
            .then(({ data }) => (this.tasks = data));
        },
        Get_episodes_by_task(value){
             axios
            .get("/Get_episodes_by_task?id=" + value)
            .then(({ data }) => (this.episodes = data));
        },
        
        
        //------------------------ Create Task ---------------------------\\
        Create_Task() {
            var self = this;
            self.SubmitProcessing = true;
            axios.post("/create_task", {
                title: self.task.title,
                description: self.task.description,
                // summary: self.task.summary,
                project_id: self.task.project_id,
                company_id: self.task.company_id,
                assigned_to: self.task.assigned_to,
                priority: self.task.priority,
                start_date: self.task.start_date,
                end_date: self.task.end_date,
                //status: self.task.status,
                minutes: self.task.minutes,
                task_progress: self.task.task_progress,
                episode: self.task.episode,
                delivery_id : self.task.delivery_id,
                // estimated_hour : self.task.id
                
            }).then(response => {
                    self.SubmitProcessing = false;
                    window.location.href = '/tasks'; 
                    toastr.success('{{ ('translate.Created_in_successfully') }}');
                    self.errors = {};
            })
            .catch(error => {
                self.SubmitProcessing = false;
                if (error.response.status == 422) {
                    self.errors = error.response.data.errors;
                }
                toastr.error('{{ __('translate.There_was_something_wronge') }}');
            });
        },

    },
    //-----------------------------Autoload function-------------------
    created () {
    },
    
    })


</script>

