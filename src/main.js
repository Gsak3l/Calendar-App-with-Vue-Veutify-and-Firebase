import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app'; //importing only firebase/app because we dont want to import everything from firebase
import 'firebase/firestore'; //all we need from firebase is the firestore



Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({ //initializing the firebase sdk snippet
  apiKey: "AIzaSyAyEysCGqbKdq_RriK-HS8UHqO6fk27mEA",
  authDomain: "vue-calendar-b5ff5.firebaseapp.com",
  databaseURL: "https://vue-calendar-b5ff5.firebaseio.com",
  projectId: "vue-calendar-b5ff5",
  storageBucket: "vue-calendar-b5ff5.appspot.com",
  messagingSenderId: "958596593298",
  appId: "1:958596593298:web:7bff06b0196f3b5e0f584b"
});


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')