import { mountCinematicFilm } from '@base/cinematic-film';
import { films } from '../shared/painted-film.mjs';

export function mount({ element }) {
  const scene = element.closest('[data-gazette-component]')?.querySelector('.cinematic-story')?.dataset.scene;
  if (!Object.hasOwn(films, scene)) return;
  return mountCinematicFilm({ element, film: films[scene] });
}
