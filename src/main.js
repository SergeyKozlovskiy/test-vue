import Vue from 'vue';
import { Row, Col, Table, Icon, Input } from 'ant-design-vue'
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App';

Vue.use(Button);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');


