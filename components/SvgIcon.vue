<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({ name: 'SvgIcon'})
export default class extends Vue {
  // svg的名称
  @Prop({ type: String, required: true }) public name!: string;
  // 样式
  @Prop({ default: '' }) public className!: string;

  public get iconName() {
    return `#icon-${this.name}`;
  }

  public get svgClass() {
    return this.className ? `svg-icon${this.className}` : `svg-icon`;
  }
}

</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  font-size: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
