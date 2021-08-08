<template>
  <section class="dashboard-container">
    <InfoHeader />
    <QuestionBox />
    <Feedback />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoHeader from './../components/InfoHeader.vue'
import QuestionBox from './../components/QuestionBox.vue'
import Feedback from './../components/Feedback.vue'

export default {
  name: "Dashboard",
  components: {
    InfoHeader,
    QuestionBox,
    Feedback
  },
  computed: {
    ...mapGetters([''])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-container {
  width: 60%;
  margin: auto;
}

  @media only screen and (max-width: 768px) {
    .dashboard-container {
      width: 90%;
      margin: auto;
    }
  }
</style>
