import { Component, Vue } from 'vue-property-decorator'

import './home.scss'

@Component({
  template: require('./home.html'),
  components: {
  }
})
export class HomeComponent extends Vue {

  package: string = 'vue-webpack-typescript'
  repo: string = 'https://github.com/ShaofeiZi/vue-typescript'
  mode: string = process.env.ENV

}
