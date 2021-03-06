import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
import VueParticles from 'vue-particles'
import router from "./router";
import { FallDown } from 'vue-burger-menu'
import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)
Vue.use(VueTyperPlugin)
Vue.use(VueParticles)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee,faHandshake,faCode,faUserCircle,faHammer,faPen,faSchool,
  faSearch,faEnvelope,faMapMarkerAlt,faGlobe,faBlog,
  faBirthdayCake,faImage,faArchive,faToolbox,faFileCode,faCar,faLaptop,faEdit,faCrow,faCheckCircle,faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee,faHandshake,faCode,faUserCircle,faHammer,faPen,
  faSchool,faSearch,faTwitter,faGithub,faEnvelope,faMapMarkerAlt,faGlobe,
  faBlog,faBirthdayCake,faHtml5,faCss3Alt,faJsSquare,faImage,faToolbox,faArchive,faFileCode,faCar,faLaptop,faEdit,faCrow,faCheckCircle,faCircleNotch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('fall-down', FallDown)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
