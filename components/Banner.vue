!<template>
  <div>
      <h1 class="title">
        nuxt page
      </h1>
    <div class="banner" :class="{'onybanner':isony}">
      <div class="box" ref="box" :class="{'boxrunx':isony}">
        <div class="a1" :class="{'a1y':isony}">
            <img src="~/assets/img/a1.png" />
        </div>
        <div class="a2" :class="{'a2y':isony}"><img src="~/assets/img/a2.png" /></div>
        <div class="b1" :class="{'nob':isony}"><img src="~/assets/img/b1.png" /></div>
        <div class="b2" :class="{'nob':isony}"><img src="~/assets/img/b2.png" /></div>
        <div class="c1 oncy"><img src="~/assets/img/c1.png" /></div>
        <div class="c2 oncy"><img src="~/assets/img/c2.png" /></div>
      </div>
    </div>
    <button type="button" @click="islie = true">{{islie ? '傻瓜，骗你的' : '你走吧，我不要你了'}}</button>
    <button type="button" @click="handletop">changedirection</button>
  </div>
</template>
<script>
export default {
  name: "banner",
  data() {
    return {
      left: false,
      top: 0,
      deg: 0,
      isony: false,
      islie:false
    };
  },
  mounted() {
     setInterval(()=>{
         this.isony = !this.isony;
     },20*1000) 
  },
  methods: {
    handleleft() {
    //   this.deg += 90;
    //   if (!this.isony) {
    //     this.$refs.box.style = `transform:rotateY(-${this.deg}deg)`;
    //   } else {
    //     this.$refs.box.style = `transform:rotateX(-${this.deg}deg)`;
    //   }
    },
    handletop() {
      this.$refs.box.style = `transform:rotateY(0deg) rotateX(0deg);`;
      this.isony = !this.isony;
    },
  },
};
</script>
<style>
.banner {
  height: 300px;
  /* 等比例缩放 */
  perspective: 1400px;
  margin-bottom: 100px;
}
.onybanner {
  perspective: 700px;
}
.box {
  width: 600px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  transform-style: preserve-3d;
  transition: all 0.5s;
  animation: run 20s linear infinite;
}
.boxrunx {
  animation: runx 20s linear infinite;
}
.turn {
  transform: rotateX(-90deg);
}

@keyframes run {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-360deg);
  }
}
@keyframes runx {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-360deg);
  }
}

.box div {
  width: 600px;
  height: 300px;
  position: absolute;
  text-align: center;
  line-height: 300px;
  font-size: 30px;
}
.box div img{
    width: 600px;
    height: 300px;
}
.box:hover{
    animation-play-state: paused;
}
.a1 {
  /* background: rgba(0, 0, 255, 1); */
  transform: translateZ(300px);
}

.a2 {
  /* background: rgba(0, 0, 255, 1); */
  transform: translateZ(-300px) rotateY(180deg);
}
.box .a1y {
  transform: translateZ(150px);
}
.box .a2y {
  transform: translateZ(-150px) rotateX(180deg);
}
.b1 {
  /* background: rgba(0, 255, 0, 1); */
  transform: translateX(-300px) rotateY(-90deg);
}
.box .nob {
  display: none;
}
.b2 {
  /* background: rgba(0, 255, 0, 1); */
  transform: translateX(300px) rotateY(90deg);
}

.c1 {
  /* background: rgba(255, 0, 0, 1); */
  transform: translateY(-150px) rotateX(90deg);
}
.c2 {
  /* background: rgba(255, 0, 0, 1); */
  transform: translateY(150px) rotateX(-90deg);
}
button{
    outline: none;
    background: white;
    height: 35px;
    width: 160px;
    border:1px solid #eee;
    margin-left: 20px;

}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 100px;
}
</style>