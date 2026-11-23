import { mountScrollPassage } from '@base/cinematic-film';
import { passage } from '../shared/painted-film.mjs';

export function mount({ element }) {
  const component=element.closest('[data-gazette-component]');
  const root=component?.querySelector('.painted-interval');
  if(!root)return;
  const closing=root.classList.contains('painted-interval--closing');
  return mountScrollPassage(closing?component:root, {
    reveal: closing?'.painted-interval--closing':'.painted-interval > *',
    ...passage,
  });
}
