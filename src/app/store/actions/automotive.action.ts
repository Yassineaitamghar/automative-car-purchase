import { createAction, props } from '@ngrx/store';
import { Cars } from 'src/app/components/landing-page/landing-page.component';

export const onlaodAutomotives = ' [Landingpage Component] on Load automatives';
export const onlaodAutomotivesSuccess =
  ' [Landingpage Component] on Load automatives Success';

export const onlaodAutomotivesFailure =
  ' [Landingpage Component] on Load automatives Failure';

const onlaodAutomotivesAction = createAction(onlaodAutomotives);

const onlaodAutomotivesSuccessAction = createAction(
  onlaodAutomotivesSuccess,
  props<{ paylaod: Cars }>()
);

const onlaodAutomotivesFailureAction = createAction(
  onlaodAutomotivesFailure,
  props<{ message: string }>()
);

export {
  onlaodAutomotivesAction,
  onlaodAutomotivesSuccessAction,
  onlaodAutomotivesFailureAction,
};
