import { defineComponent, inject } from 'vue';

import { RouterView } from 'vue-router';
import { Exception } from 'view-ui-plus';
import Demo2 from '@/components/Demo2';
export const NotFound = defineComponent({
  components: { Exception },
  setup() {
    return () => <Exception type="404"></Exception>;
  },
});

export default defineComponent({
  setup(props: any) {
    const value: any = inject('DLMicroContext');
    const { type = 'route' } = value || {};
    return () => {
      return type == 'route' ? <RouterView></RouterView> : <Demo2 />;
    };
  },
});
