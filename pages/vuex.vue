<template>
  <div>
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
  mounted() {
    console.log(this.$name);
    console.log(this.$lastName);
    console.log(this.$createPhrase( this.$name + ' ' + this.$lastName ));
    console.log(this.$dayjs().format());
  }
}
</script>

