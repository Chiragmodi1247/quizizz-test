<template>
  <div class="feedback" v-if="isQuestionAnswered">
    <div class="feedback-msg">
      <span class="feedback-content"> {{feedbackMessgae}} </span>
    </div>
    <div v-if="!isGameOver" class="feedback-action" @click="nextQuestion">
      <button class="feedback-button">Next Question</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Feedback",
  computed: {
    ...mapGetters(['isQuestionAnswered', 'feedbackMessgae', 'isGameOver'])
  },
  methods: {
    ...mapActions(['showNextQuestion']),
    nextQuestion() {
      this.showNextQuestion()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feedback {
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
}
.feedback-msg {
  position: relative;
  border: 1px solid gray;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  align-items: center;
  min-height: 30px;
}
.feedback-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.feedback-action {
  width: 25%;
}
.feedback-button {
  width: 100%;
  padding: 10px 30px;
  border-radius: 8px;
  border: 1px solid;
}

@media only screen and (max-width: 432px) {
  .feedback {
    display: block;
  }
  .feedback-msg {
    border: none
  }
  .feedback-action {
    width: 100%;
  }
}

</style>
