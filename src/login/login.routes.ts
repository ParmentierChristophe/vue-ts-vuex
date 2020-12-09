import LoginPage from '@/login/LoginPage.vue';
import Test from '@/login/components/Test.vue';

export default {
  component: LoginPage,
  children: [
    {
      path: '',
      redirect: '/login/test'
    },
    {
      path: '/login/test',
      name: 'logabout',
      component: Test,
      meta: { public: true }
    }
  ]
};
