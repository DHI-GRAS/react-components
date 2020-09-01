First of all, welcome and thank you for contributing to our Storybook.

# About

The purpose of our `@dhi-gras/react-components` NPM library is to export all of the components that are used in our organization. The components are mainly used inside our apps and showcased in our [Storybook](https://storybookdev.z6.web.core.windows.net).

# Setting up

To get started follow these steps:

- Clone the repository on your PC using `git clone https://github.com/DHI-GRAS/react-components.git`.
- Run `yarn install`.
- If everything went well, you are ready to add your contribution.

## Commits:

We are using the [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

| Commit messages            | Release type           |
| -------------------------- | ---------------------- |
| fix(name): Commit message  | Patch Release 0.0.1    |
| feat(name): Commit message | Feature Release 0.1.0  |
| perf(name): Commit message | Breaking Release 1.0.0 |

## Branches

- fix/branch-name - When dealing with a bug or a quick-fix
- feature/branch-name - When dealing with a feature
- docs/branch-name - When dealing with the documentation

## Issues

When creating a new feature, firstly we have to create the need for it.
This is done by creating an issue and describing how does the feature improve our current Storybook and what is the expected behaviour, assign somebody to it and label it accordingly.

## Pull Requests (PR)

When creating a PR, please explain what it does and make sure to link the relevant issues to it using the Github keywords or through the GUI.

## Testing

We are creating unit and integration testing using [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/).

- Write the tests inside the component folder.
- Follow the pattern `YourComponent.test.tsx`.
- Use `.tsx` instead of `.ts`.
- In order to run the tests use the `yarn test` script.

## Creating components

As GRAS Storybook is strongly related to our npm package and repository `@dhi-gras/react-components`, the process to create components is:

- We assume that you have created the component locally inside the GRAS Storybook and now you are ready to add it to the library.
- Create a branch using the branch naming convetions.
- Create a folder inside the `/src/components` and name it the same as your component. This folder needs to include `index.ts` and `yourComponent.tsx` files.
- Create unit and/or integration tests for the component.
- Create it's export from `/src/index.ts`.
- Run the script `yarn yalc:link` while in the library repository to temporarily publish the package to the `yalc store`.
- Visit the `@dhi-gras/gras-storybook` repository and run `yarn yalc:link` which will add the `.yalc @dhi-gras/react components package` with the latest changes. Change the `import` inside the story with `import { myNewComponent } from "@dhi-gras/react-storybook` and test it locally to see if it works by importing it from the library.
- Please visit the `@dhi-gras/react-components` and create a PR where you eplain the usage of the component as described in the created story.
- After the component gets approved and merged inside our library, please visit the [guidelines](https://github.com/DHI-GRAS/gras-storybook/blob/master/docs/CONTRIBUTING.md) on the GRAS Storybook repository.

Thank you for contributing!
