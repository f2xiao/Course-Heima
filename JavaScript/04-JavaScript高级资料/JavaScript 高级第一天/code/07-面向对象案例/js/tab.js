let that;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);
    this.ul = this.main.querySelector(".firstnav ul:first-child");
    this.fsection = this.main.querySelector(".tabscon");
    this.add = this.main.querySelector(".firstnav .tabadd");
    this.add.onclick = this.addTab;
    this.init();
  }
  init() {
    this.updateNode();
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
      this.removes[i].onclick = this.removeTab;
      this.spans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }
  }
  updateNode() {
    this.lis = this.main.querySelectorAll(".firstnav ul li");
    this.sections = this.main.querySelectorAll(".tabscon section");
    this.removes = this.ul.querySelectorAll("li .icon-guanbi");
    this.spans = this.main.querySelectorAll(".firstnav li span:first-child");
    // console.log(this.removes);
  }
  clearClass() {
    // console.log(that);
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  }
  toggleTab() {
    // console.log(this.index); // li
    that.clearClass();
    this.className = "liactive";
    that.sections[this.index].className = "conactive";
    that.init();
  }
  addTab() {
    that.clearClass();
    let random = Math.random();
    const li =
      '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
    const section = '<section class="conactive">测试 ' + random + "</section>";
    that.ul.insertAdjacentHTML("beforeend", li);
    that.fsection.insertAdjacentHTML("beforeend", section);
    that.init();
  }
  removeTab(e) {
    e.stopPropagation();
    let index = this.parentNode.index;
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    if (tab.querySelector(".liactive")) return;
    index--;
    that.lis[index] && that.lis[index].click();
  }
  editTab() {
    console.log(this);
    let value = this.textContent;
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();
    this.innerHTML = `<input type="text" value="${value}">`;
    let input = this.children[0];
    input.select();
    input.addEventListener("blur", function () {
      this.parentNode.textContent = this.value;
    });
    input.onkeyup = function (e) {
      if (e.keyCode == 13) {
        this.blur();
      }
    };
  }
}
new Tab("#tab");
