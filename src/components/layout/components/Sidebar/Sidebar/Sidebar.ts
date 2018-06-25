import { Component, Vue ,Prop } from 'vue-property-decorator'

const SidebarItemComponent = () => import('../SidebarItem/SidebarItem').then(({ SidebarItemComponent }) => SidebarItemComponent);

import './Sidebar.scss'

@Component({
  template: require('./Sidebar.html'),
  components: {
    'sidebar-item':SidebarItemComponent
  }
})
export class SidebarComponent extends Vue {
  @Prop({type:Array}) routes:Array<any>;
  @Prop({type:Boolean,default:false}) isNest:Boolean=false;

  /**
   * 生命周期
   */
  mounted(){
  }







}
