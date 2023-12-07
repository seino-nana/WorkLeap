"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_u__textarea = common_vendor.resolveComponent("u--textarea");
  _component_u__textarea();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const TEXT = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => TEXT.value = $event),
        b: common_vendor.p({
          height: "40rpx",
          placeholder: "提出你的问题",
          prefixIcon: "search",
          autoHeight: true,
          maxlength: "400",
          prefixIconStyle: "font-size: 22px;color: #909399",
          modelValue: TEXT.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Documents/HBuilderProjects/跃文助手/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
