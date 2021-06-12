<template>

  <div style="padding-top:200px;">
    <stripe-element-card
      ref="elementRef"
      :pk="pulishableKey"
      @token="tokenCreated"
    />
    <button @click="submit">Generate token</button>
  </div>

</template>

<script>
// import { StripeElementCard } from '@vue-stripe/vue-stripe';
export default {
//   components: {
//     StripeElementCard,
//   },
  data () {

      return {
        pulishableKey :'pk_test_51HFc6rHJ4ZmcYBNIc95m4g1R5mx2AufzWfuV6bZ3GuxphQHMdI4nuMEyz9ILMuV4K1gMUKYnIKZxtHURTSWjjqdi00E3a9HQex',
      token: null,
    }
  },
  methods: {
    submit () {
      // this will trigger the process
      this.$refs.elementRef.submit();
    },
    tokenCreated (token) {
      console.log(token);
      // handle the token
      // send it to your server
    },
  }
};
</script>