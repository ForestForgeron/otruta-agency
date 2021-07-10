<template>
  <div>
    <ul class="list">
      <li v-for="item in lol" class="item">
        <span>
          {{ item }}
        </span>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lol: [
        'kek',
        'kok'
      ],
    };
  }
}
</script>

<style lang="scss">
  .list {
    position: absolute;
    top: 40vh;
    right: 40vw;
  }

  .item {
    font-size: 40px;
  }
</style>