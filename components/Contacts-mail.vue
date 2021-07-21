<template>
  <div class="contacts-mail">
    <a href="mailto:otruta.agency@gmail.com" class="contacts-mail__mail">
      otruta.agency@gmail.com
    </a>
    <a href="tel:+380 95 180 10 42" class="contacts-mail__phone">
      +380 95 180 10 42
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contacts-mail {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__mail,
  &__phone {
    font-size: calc(30px + 30 * (100vw / 1920));
    line-height: 80px;
    font-weight: 700;
    text-align: center;
    color: #000;
    text-decoration: underline;

    transition: all 0.3s ease 0s;

    &:hover {
      color: #ff6058;
      cursor: pointer;
    }
  }
}
</style>