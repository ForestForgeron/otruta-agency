<template>
  <div class="contacts-web">
    <ul class="contacts-web__list">
      <li class="contacts-web__item">
        <a href="#" class="contacts-web__link"> facebook </a>
      </li>
      <li class="contacts-web__item">
        <a href="#" class="contacts-web__link"> behance </a>
      </li>
      <li class="contacts-web__item">
        <a href="#" class="contacts-web__link">instagram</a>
      </li>
      <li class="contacts-web__item">
        <a href="#" class="contacts-web__link"> youtube </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contacts-web {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }

  &__link {
    font-size: calc(30px + 30 * (100vw / 1920));
    line-height: 80px;
    font-weight: 700;
    color: #000;
    letter-spacing: 2px;

    transition: all 0.3s ease 0s;

    &:hover {
      color: #ff6058;
      cursor: pointer;
    }
  }
}
</style>