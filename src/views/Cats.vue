<template>
<div>
  <petTable
  species="cats"
  :pets="cats"/>
</div>
</template>

<script>
import { mapState } from 'vuex'
import petTable from '@/components/petsTable'

export default {
  components: {
    petTable
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
