<template>
  <div class="container">
    <section id="section-1">
      <h2>Kenneth Tuan.</h2>
      <p class="content-1">
        An Interaction Designer with a deep passion into making our virtual
        world a Better place for Everyone.
      </p>
      <p class="content-2">Check out some of my projects Below</p>
    </section>
    <section id="section-2">
      <div class="card-wrapper">
        <div class="card d-flex justify-content-around">
          <div class="blank" v-motion-fade-visible></div>

          <div class="img-container" v-motion-slide-visible-left>
            <router-link to="/work/1">
              <img class="pointer" src="../../public/GSM_ref1.png" alt=""
            /></router-link>
          </div>
          <div class="card-introduce" v-motion-slide-visible-right>
            <router-link to="/work/1">
              <h2 class="card-title text-center pointer">場地租借系統</h2>
            </router-link>
            <div class="card-description text-left">
              <ul>
                <li>
                  ·
                  協助非盈利組織搭建完整的場地租借系統，其中包括會員註冊以及登入、第三方登入、用戶後臺管理、場地時間預約、場地清潔管理等功能
                </li>
                <li>
                  ·
                  與設計師、後端工程師討論userflow，設計出最符合使用者需求的產品
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card d-flex justify-content-around">
          <div class="blank" v-motion-fade-visible></div>
          <div class="card-introduce" v-motion-slide-visible-right>
            <router-link to="/work/2">
              <h2 class="card-title text-center pointer">
                網站開發
              </h2></router-link
            >
            <div class="card-description text-left">
              <ul>
                <li>
                  · 自行接案，至 2022 年六月，一共開發 4
                  個部落格個人網站，每個專案耗時兩周
                </li>
                <li>
                  · 於該專案中擔任前端工程師，並與 UI/UX
                  設計師、後端工程師配合，同時幫助 UI/UX 設計師厘清需求
                </li>
              </ul>
            </div>
          </div>
          <div class="img-container" v-motion-slide-visible-left>
            <router-link to="/work/2">
              <img
                class="pointer"
                src="../../public/nicklin.uiuxblog.tw_.png"
                alt=""
            /></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base";
@import "../assets/scss/reset";
.container {
  width: 100%;
  min-height: max-content;
  background-image: url("../../public/vincent-romain-yCF6v9WVFcU-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.pointer {
  cursor: pointer;
}
router-link {
  cursor: pointer;
}
#section-1 {
  padding: 80px 6vw 0;
  width: 100%;
  h2 {
    margin-top: 100px;
  }
  .content-1 {
    margin-top: 120px;
    @include font-setting("Robot", normal, 400, 60px, 48px, #000);
  }
  .content-2 {
    margin-top: 120px;
    width: 100%;
    text-align: center;
    @include font-setting("Robot", normal, 400, 48px, 36px, #000);
  }
}
#section-2 {
  padding: 500px 6vw 600px;
  width: 100%;
}
.card-wrapper {
  width: 100%;
  .card {
    position: relative;
    padding: 60px;
    margin-bottom: 300px;
    width: 100%;
    .img-container {
      z-index: 2;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 35vw;
        height: 100%;
      }
    }
    .card-introduce {
      z-index: 2;
      width: 45%;
      .card-title {
        margin-top: 60px;
        margin-bottom: 60px;
        @include font-setting("Noto Serif TC", normal, 400, 60px, 48px, #fff);
        width: 100%;
      }
      .card-description {
        @include font-setting("Noto Serif TC", normal, 400, 24px, 48px, #fff);
      }
    }
  }
}
.blank {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #dcdcdccc, $alpha: 0.3);
}
</style>