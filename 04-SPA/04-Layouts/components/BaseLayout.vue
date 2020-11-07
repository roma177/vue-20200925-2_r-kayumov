<template>
  <div>
    <TheHeader></TheHeader>
    <main class="main">
      <slot />
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
export default {
  name: 'BaseLayout',
  components: { TheHeader, TheFooter }
};
</script>

<style scoped>
.header {
  padding: 44px 0 32px;
  background-color: var(--white);
}

.header h1,
.header h1 a {
  font-weight: 900;
  font-size: 34px;
  line-height: 30px;
  text-align: center;
  margin: 0 0 24px;
  text-transform: uppercase;
  color: var(--body-color);
  text-decoration: none;
}

.header nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24px;
}

.header nav a {
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  text-decoration: none;
  padding: 0 20px;
  position: relative;
  display: inline-flex;
}

.header nav a + a {
  margin-top: 8px;
}

.header nav a:hover {
  color: var(--blue);
}

.header nav a:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-2px, -50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--grey);
}

@media all and (min-width: 992px) {
  .header nav {
    flex-direction: row;
    align-items: center;
    margin-left: 0;
  }

  .header nav a,
  .header nav a + a{
    margin-top: 0;
  }

  .header nav a:first-child:before {
    display: none;
  }
}

.footer {
  padding: 100px 0 60px;
  text-align: center;
}

.page.page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}

.page.page_meetup-forms {
  padding: 70px 0;
}

.page.page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}

.page.page_404 {
  padding: 100px 0;
}

.page.page_404 h1 {
  font-family: Nunito, sans-serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 1.2;
  text-align: center;
  color: var(--body-color);
}

.page.page_404 h1 > span {
  display: block;
  font-size: 144px;
}

.page.page_meetup-forms {
  padding: 70px 0;
}

.footer {
  padding: 100px 0 60px;
  text-align: center;
}

@media all and (max-width: 767px) {
  .filters-panel {
    flex-direction: column;
  }

  .filters-panel__col + .filters-panel__col {
    margin-top: 16px;
  }

  .page.page_404 h1 {
    font-size: 36px;
  }

  .page.page_404 h1 > span {
    font-size: 108px;
  }
}

@media all and (max-width: 992px) {
  .page.page_meetup-forms {
    padding: 48px 0;
  }

  .container {
    padding: 0 16px;
  }
}

@media all and (max-width: 480px) {
  #filters-panel__search {
    width: calc(100% - 112px);
  }

  #filters-panel__search > .form-control {
    max-width: 100%;
  }
}



</style>
