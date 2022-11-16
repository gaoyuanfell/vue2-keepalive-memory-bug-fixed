<template>
  <div>组件view A1</div>
</template>
<script>
export default {
  name: "A1",
  data() {
    return {
      a: new Array(20000000).fill(1), //大概80mb
    };
  },
};
</script>
