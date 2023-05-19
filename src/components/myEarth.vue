<template>
  <div style="width: 100%; height: 100%">
    <div ref="earthContainer" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 地图影像
      myJson: {
        czmObject: {
          // dsada
          name: "默认离线影像",
          xbsjType: "Imagery",
          xbsjImageryProvider: {
            createTileMapServiceImageryProvider: {
              // eslint-disable-next-line no-undef
              url: XE.HTML.cesiumDir + "Assets/Textures/NaturalEarthII",
              fileExtension: "jpg",
            },
            type: "createTileMapServiceImageryProvider",
          },
        },
      },
    };
  },
  mounted() {
    // 1.1.1 创建地球
    // eslint-disable-next-line no-undef
    Window._earth = new XE.Earth(this.$refs.earthContainer);
    // 添加地图影像
    Window._earth.sceneTree.root.children.push(this.myJson);
  },
  // 1.2 资源销毁
  beforeDestroy() {
    // vue程序销毁时，需要清理相关资源
    Window._earth = Window._earth && Window._earth.destroy();
  },
};
</script>
