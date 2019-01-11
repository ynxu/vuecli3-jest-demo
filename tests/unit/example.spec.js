import {shallowMount} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
// 创建测试套件
describe("HelloWorld.vue", () => {
  // 创建测试实例------
  it("renders props.msg when passed", () => {
    // 找到要测试的组件实例，进行挂载
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: {msg}
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
