import { Component, Vue ,Prop } from 'vue-property-decorator'

import './SidebarItem.scss'

@Component({
  template: require('./SidebarItem.html'),
  components: {
  }
})
export class SidebarItemComponent extends Vue {
  @Prop({type:Array}) routes:Array<any>;
  @Prop({type:Boolean,default:false}) isNest:Boolean=false;

  /**
   * 生命周期
   */
  mounted(){
  }

  /**
   * 是否显示子菜单
   * @param children
   * @returns {boolean}
   */
  hasOneShowingChildren(children){
    const showingChildren = children.filter(item => {
      return !item.hidden
    })
    if (showingChildren.length === 1) {
      return true
    }
    return false
  }




  package: string = 'vue-webpack-typescript';
  repo: string = 'https://github.com/ShaofeiZi/vue-typescript';
  mode: string = process.env.ENV



}
