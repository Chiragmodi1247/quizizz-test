import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  questions: [
    {
        "title": "What was the name of the hero in the 80s animated video game 'Dragon's Lair'?",
        "correct_answer": "Dirk the Daring",
        "options": [
            "Arthur",
            "Sir Toby Belch",
            "Dirk the Daring",
            "Guy of Gisbourne"
        ]
    },
    {
        "title": "What is the scientific name for modern day humans?",
        "correct_answer": "Homo Sapiens",
        "options": [
            "Homo Ergaster",
            "Homo Erectus",
            "Homo Neanderthalensis",
            "Homo Sapiens"
        ]
    },
    {
        "title": "What is Ron Weasley's middle name?",
        "correct_answer": "Bilius",
        "options": [
            "Arthur",
            "John",
            "Dominic",
            "Bilius"
        ]
    },
    {
        "title": "Who is the creator of the comic series \"The Walking Dead\"?",
        "correct_answer": "Robert Kirkman",
        "options": [
            "Stan Lee",
            "Robert Kirkman",
            "Malcolm Wheeler-Nicholson",
            "Robert Crumb"
        ]
    },
    {
        "title": "At the start of a standard game of the Monopoly, if you throw a double six, which square would you land on?",
        "correct_answer": "Electric Company",
        "options": [
            "Water Works",
            "Chance",
            "Electric Company",
            "Community Chest"
        ]
    },
    {
        "title": "What is the capital of Jamaica?",
        "correct_answer": "Kingston",
        "options": [
            "Rio de Janeiro",
            "Dar es Salaam",
            "Kingston",
            "Kano"
        ]
    },
    {
        "title": "When did Jamaica recieve its independence from England? ",
        "correct_answer": "1962",
        "options": [
            "1492",
            "1962",
            "1963",
            "1987"
        ]
    },
    {
        "title": "In 2013 how much money was lost by Nigerian scams?",
        "correct_answer": "$12.7 Billion",
        "options": [
            "$12.7 Billion",
            "$95 Million",
            "$956 Million",
            "$2.7 Billion"
        ]
    },
    {
        "title": "How old was Lyndon B. Johnson when he assumed the role of President of the United States?",
        "correct_answer": "55",
        "options": [
            "50",
            "60",
            "55",
            "54"
        ]
    },
    {
        "title": "From which album is the Gorillaz song, \"On Melancholy Hill\" featured in?",
        "correct_answer": "Plastic Beach",
        "options": [
            "Demon Days",
            "Plastic Beach",
            "Humanz",
            "The Fall"
        ]
    }
  ],
  currentQuestionIndex: 0,
  correctAnsweredQuestionsCount: 0,
  attemptedAnswerCount: 0,
  isQuestionAnswered: false,
  feedbackMessgae: 'Correct',
  isGameOver: false
}

const mutations = {
  updateQuestionIndex (state) {
    state.currentQuestionIndex++
  },
  updateCorrectAnswerCount (state) {
    state.correctAnsweredQuestionsCount++
  },
  updateAttemptedAnswerCount (state) {
    state.attemptedAnswerCount++
  },
  setQuestionAnswered (state, value) {
    state.isQuestionAnswered = value
  },
  setFeedbackMessgae (state, value) {
    state.feedbackMessgae = value
  },
  setGameOver (state, value) {
    state.isGameOver = value
  }
}

const actions = {
  showNextQuestion ({commit}) {
    commit('updateQuestionIndex')
    commit('setQuestionAnswered', false)
    console.log('inside', state.attemptedAnswerCount, state.questions.length)
    if(state.attemptedAnswerCount === state.questions.length - 1) {
      commit('setGameOver', true)
    }
  },
  incrementCorrectedAnsweredQuestions ({commit}) {
    commit('setFeedbackMessgae', 'Correct')
    commit('updateCorrectAnswerCount')
  },
  incrementAttemptedQuestionsCount ({commit}) {
    commit('setFeedbackMessgae', 'Sorry')
    commit('updateAttemptedAnswerCount')
    commit('setQuestionAnswered', true)
  }
}

const getters = {
  currentQuestion (state) {
    return state.questions[state.currentQuestionIndex] || 0
  },
  currentQuestionNumber (state) {
    return state.currentQuestionIndex + 1 || 0
  },
  totalNumberOfQuestions (state) {
    return state.questions.length || 10
  },
  totalCorrectAnswers (state) {
    return state.correctAnsweredQuestionsCount || 0
  },
  totalAttemtedQuestions (state) {
    return state.attemptedAnswerCount || 0
  },
  isQuestionAnswered (state) {
    return state.isQuestionAnswered || false
  },
  feedbackMessgae (state) {
    return state.feedbackMessgae || 'Sorry'
  },
  isGameOver (state) {
    return state.isGameOver || false
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
