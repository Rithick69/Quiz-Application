<template>
  <fragment>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="question in questions" :key="question.id">
            
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
import store from '../store/store';
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
      alert("Assignment:- Complete This Task");
    },
    confirmError(){
        this.inputIsInvalid = false;
     },
    isUserAuthenticated(){
        try {
          let loggedUser = localStorage.getItem("userName");
           if (loggedUser) {
                  let user = loggedUser;
                  store.dispatch({
                    type: 'addUserDetail',
                    userName: user
                  });
           }
           else{
            this.$router.push({ name: 'login'});
           }
        } catch (e) {
           this.$router.push({ name: 'login'});
        }
    }
  },
};
</script>
