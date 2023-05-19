<template>
  <div style="width: 100%; height: 100%">
    <div ref="earthContainer" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
const EarthComp = {
  data() {
    return {
      _earth: undefined, // 注意：Earth和Cesium的相关变量放在vue中，必须使用下划线作为前缀！
      _bgImagery: undefined,
    };
  },
  // 1.1 资源创建
  mounted() {
    // 1.1.1 创建地球
    // eslint-disable-next-line no-undef
    const earth = new XE.Earth(this.$refs.earthContainer);

    // 1.1.2 添加默认地球影像
    earth.sceneTree.root = {
      children: [
        {
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
      ],
    };
    this._earth = earth;
    // 仅为调试方便用
    window.earth = earth;
  },
  // 1.2 资源销毁
  beforeDestroy() {
    // vue程序销毁时，需要清理相关资源
    this._earth = this._earth && this._earth.destroy();
  },
};

export default EarthComp;
</script>
