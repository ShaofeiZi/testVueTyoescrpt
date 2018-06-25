import { Component, Vue } from 'vue-property-decorator'
import { Logger } from '../../util/log'

@Component({
  template: require('./about.html'),
  components: {
  }
})
export class AboutComponent extends Vue {

  repo: string = 'https://github.com/ShaofeiZi/vue-typescript'
  protected logger: Logger

  mounted () {
    if (!this.logger) this.logger = new Logger()
    this.$nextTick(() => this.logger.info('about is ready!'))
  }
}
