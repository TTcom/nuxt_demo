!<template>
<div>
  <div class="banner">
     <div class="box" ref="box" :class="{'turn':left}">
            <div class="a1">a1</div> 
            <div class="a2">a2</div>
            <div class="b1">b1</div>
            <div class="b2">b2</div>
            <div class="c1">c1</div>
            <div class="c2">c2</div>
        </div>
  </div>
  <button type="button" @click="handleleft">你走吧，我不要你了</button>
  <button type="button" @click="handletop">你回来，我错了</button>
</div>
  
</template>
<script>
export default {
  name: 'banner',
  data() {
    return {
        left:false,
        top:0,

    }
  },
  methods: {
      handleleft(){
        //   this.left = !this.left
        this.$refs.box.style="transform:rotateY(-90deg);"
        // transform:rotateY(-90deg);
      },
      handletop(){
          this.left = !this.left
      },
  },
}
</script>
<style>
.banner{
    height: 300px;
    perspective: 1000px;
}
.box {
            width: 300px;
            height: 300px;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            transform-style: preserve-3d;
            transition: .5s all;
            /* transform: translate(-50%, -50%) rotateZ(10deg) rotateX(-30deg);
            
            animation: run 5s linear;
            animation-iteration-count: infinite; */
        }
        .turn{
            transform:rotateX(-90deg);
        }

        @keyframes run {
            0% {
                transform: translate(-50%, -50%) rotateZ(10deg) rotateX(-30deg) rotateY(0);
            }

            50% {
                transform: translate(-50%, -50%) rotateZ(10deg) rotateX(-30deg) rotateY(180deg);
            }

            100% {
                transform: translate(-50%, -50%) rotateZ(10deg) rotateX(-30deg) rotateY(360deg);
            }
        }

        .box div {
            width: 300px;
            height: 300px;
            position: absolute;
            text-align: center;
            line-height: 300px;
            font-size: 30px;
        }

        .a1 {
            background: rgba(0, 0, 255, 0.1);
            transform: translateZ(150px);
        }

        .a2 {
            background: rgba(0, 0, 255, 0.5);
            transform: translateZ(-150px) rotateY(180deg);
        }

        /* .a2 {
            background: rgba(0, 0, 255, 0.5);
            transform: translateZ(-100px) ;
        } */

        .b1 {
            background: rgba(0, 255, 0, 0.5);
            transform: translateX(-150px) rotateY(-90deg);
        }

        .b2 {
            background: rgba(0, 255, 0, 0.5);
            transform: translateX(150px) rotateY(90deg);
        }

        .c1 {
            background: rgba(255, 0, 0, 0.5);
            transform: translateY(-150px) rotateX(90deg);
        }

        .c2 {
            background: rgba(255, 0, 0, 0.5);
            transform: translateY(150px) rotateX(-90deg);
        }
</style>