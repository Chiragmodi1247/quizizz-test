<template>
  <section class="container">
    <h3 class="question-title">{{ currentQuestion.title }}</h3>
    <div class="options">
      <div
        class="option"
        v-for="(option, index) in allOptions" :key="index"
        @click="selectAnswer(option, index)"
        :data-isDisabled="isQuestionAnswered"
        :data-isWrongAnswer="isWrongAnswer(index)"
        :data-isCorrectAnswer="isCorrectAnswer(option)"
        >
        <span class="option-text"> {{ option }} </span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "QuestionBox",
  data () {
    return {
      selectedAnswerIndex: null
    }
  },
  computed: {
    ...mapGetters(['currentQuestion', 'isQuestionAnswered']),
    allOptions () {
      return this.currentQuestion.options
    },
    correctAnswer () {
      return this.currentQuestion.correct_answer
    }
  },
  methods: {
    ...mapActions(['incrementCorrectedAnsweredQuestions', 'incrementAttemptedQuestionsCount']),
    selectAnswer (option, index) {
      if(this.isQuestionAnswered)
        return
      this.isAnswerSelected = true
      this.selectedAnswerIndex = index
      this.incrementAttemptedQuestionsCount()
      if(this.correctAnswer === option) {
        this.incrementCorrectedAnsweredQuestions()
      }
    },
    isCorrectAnswer (option) {
      if(!this.isQuestionAnswered)
        return
      return this.correctAnswer === option
    },
    isWrongAnswer (index) {
      if(!this.isQuestionAnswered)
        return
      return this.selectedAnswerIndex === index
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question-title {
  text-align: left;
}
.options {
  display: flex;
}
.option {
  border: 1px solid rgb(0, 0, 0);
  width: calc(25% - 20px);
  cursor: pointer;
  height: 200px;
  position: relative;
  border-radius: 8px;
  margin: 10px;
  background-color:  #dbdbdb;
}

.option[data-isDisabled="true"] {
  cursor: not-allowed;
  background-color:  #b1b1b1a6;
}
.option[data-isWrongAnswer="true"] {
  background-color:  #000000;
  color: white;
}
.option[data-isCorrectAnswer="true"] {
  background-color:  #ffffff;
  color: black;
}
.option-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

  @media only screen and (max-width: 768px) {
    .options {
      flex-wrap: wrap;
    }
    .option {
      width: calc(50% - 22px);
    }
  }

  @media only screen and (max-width: 432px) {
    .options {
      flex-wrap: wrap;
    }
    .option {
      width: calc(100%);
      height: 50px;
    }
  }

</style>
