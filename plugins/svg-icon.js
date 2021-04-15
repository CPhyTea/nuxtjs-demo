import Vue from 'vue';
import SvgIcon from "@/components/SvgIcon";

Vue.component('SvgIcon', SvgIcon);

// 引用svg图标
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons/svg', false, /\.svg$/)
requireAll(req);
