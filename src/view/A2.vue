<template>
  <div>组件view A2</div>
</template>
<script>
export default {
  name: "A2",
  data() {
    return {
      a: new Array(20000000).fill(1), //大概80mb
    };
  },
};
</script>
