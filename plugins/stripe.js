import Vue from 'vue';
import {
  StripePlugin,
  StripeCheckout,
  StripeElementCard,
} from '@vue-stripe/vue-stripe';

export default () => {
//   Vue.component('StripeCheckout', StripeCheckout);
  Vue.component('StripeElementCard', StripeElementCard);
  Vue.use(StripePlugin, { pk: 'pk_test_51HFc6rHJ4ZmcYBNIc95m4g1R5mx2AufzWfuV6bZ3GuxphQHMdI4nuMEyz9ILMuV4K1gMUKYnIKZxtHURTSWjjqdi00E3a9HQex' });
};