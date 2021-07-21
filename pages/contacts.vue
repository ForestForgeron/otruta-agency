<template>
  <div class="contacts">
    <div class="contacts-mail-wrapper">
      <Contacts-mail></Contacts-mail>
    </div>
    <div class="contacts-web-wrapper">
      <Contacts-web></Contacts-web>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contacts-mail-wrapper {
  position: absolute;
  bottom: 26.5vh;
  left: 10vw;
}

.contacts-web-wrapper {
  position: absolute;
  bottom: 9vh;
  right: 16.5vw;
}
</style>