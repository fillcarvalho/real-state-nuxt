<template>
  <div>
    <pre>{{$config}}</pre>
    <pre>{{$store.state.user}}</pre>
    <pre>{{user}}</pre>
  </div>

</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'VuePage',
  computed: {
    ...mapState(
      {
        user: state => state.user
      }
    )
  },
  asyncData({$config}) {
    console.log($config);
  },
  mounted() {
    console.log(this.$name);
    console.log(this.$lastName);
    console.log(this.$createPhrase( this.$name + ' ' + this.$lastName ));
    console.log(this.$dayjs().format());
  }
}
</script>

