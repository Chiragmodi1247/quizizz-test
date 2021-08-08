<template>
  <div class="info">
    <h2 v-if="isGameOver" class="info-title">Game Over!</h2>
    <h2 v-else class="info-title">Question {{currentQuestionNumber}} of {{totalNumberOfQuestions}}</h2>
    <div class="accuracy">
      <img class="accuracy-icon" src="./../assets/accuracy.png" alt="">
      <span class="info-accuracy"> {{ accuracy }}% </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "InfoHeader",
  computed: {
    ...mapGetters(['currentQuestionNumber', 'totalNumberOfQuestions', 'totalCorrectAnswers', 'totalAttemtedQuestions', 'isGameOver']),
    accuracy () {
      return Math.ceil((this.totalCorrectAnswers / this.totalAttemtedQuestions ) * 100) || 0
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info-title {
  padding: 0;
  margin: 0;
}
.info-accuracy {
  float: right;
}
.accuracy {
  display: flex;
  align-items: center;
}
.accuracy-icon {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}
</style>
