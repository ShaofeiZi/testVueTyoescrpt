import { Component, Vue } from 'vue-property-decorator'
import { Logger } from '../../util/log'
import './main.scss';

@Component({
  template: require('./main.html'),
  components: {
  }
})
export class MainComponent extends Vue {

  protected logger: Logger

  mounted () {

  }
}
