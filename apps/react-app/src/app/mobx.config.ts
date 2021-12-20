import { configure } from 'mobx';

configure({
  enforceActions: 'always', // don't allow state modifications outside actions
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: false
});
