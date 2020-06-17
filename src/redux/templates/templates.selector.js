import { createSelector } from 'reselect';

const deployment = (state) => state.deployment;

export const selectDeploymentTemplates = createSelector(
  [deployment],
  (deployment) => {
    return deployment.templates || [];
  }
);

export const selectTemplate = (_id) =>
  createSelector([selectDeploymentTemplates], (templates) => {
    return templates.find((item) => item._id === _id) || {};
  });

export const selectIsLoading = createSelector([deployment], (deployment) => {
  return deployment.isLoading;
});
