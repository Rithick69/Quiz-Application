<template>
  <fragment>
    <div class="container">
    <div  v-for="question in questions" :key="question.id">
        <div class="col-12">
          <base-card>
            <h1>{{question.subject}}</h1>
            <p>Total number of questions {{question.totalQuestions}}</p>
            <p>{{question.completedQuestions}} of {{question.totalQuestions}} questions completed</p>
            <base-button  :mode="bottonClass"  @click="startExam(question.id)">Start Exam</base-button>
          </base-card>
        </div>
      
    </div>
      
    </div>
  </fragment>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      questions: [{'id':1, 'subject': 'Azure Cloud', 'totalQuestions': 10 ,'completedQuestions':0},
                  {'id':2, 'subject': 'Google Cloud', 'totalQuestions': 10 ,'completedQuestions':0},
                  {'id':3, 'subject': 'Dot Net', 'totalQuestions': 10 ,'completedQuestions':0},
                  {'id':4, 'subject': 'Java', 'totalQuestions': 10 ,'completedQuestions':0},
                  {'id':5, 'subject': 'Vue', 'totalQuestions': 10 ,'completedQuestions':0},
                  {'id':6, 'subject': 'Angular', 'totalQuestions': 10 ,'completedQuestions':0},
      ]
    };
  },
   computed:{
        bottonClass(){
                return null;
        },
    },
  created(){
    this.isUserAuthenticated();
  },
  methods: {
    startExam(courseId){
      alert("Assignment To Complete This Task");
    },
    confirmError(){
        this.inputIsInvalid = false;
     },
    isUserAuthenticated(){
        if (localStorage.getItem("userName")) {
        try {
          this.userName = JSON.parse(localStorage.getItem("userName"));
        } catch (e) {
           this.$router.push({ name: 'login'});
        }
      }
      else{
         this.$router.push({ name: 'login'});
      }
    }
  },
};
</script>
