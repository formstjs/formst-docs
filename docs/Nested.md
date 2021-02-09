---
id: nested
title: Nested Forms
sidebar_label: Nested Forms
slug: /nested
---

Formst makes it very easy to handle nested data. You can create nested forms by creating nested form models.

### Usage

In this example, CreateProject form model contains other form models, Milestone and ProjectTeam.

```tsx
const Milestone = createFormModel(
  'Milestone',
  {
    name: types.string,
  },
  {
    validation: {
      name: (name) => {
        if (!name) {
          return 'Required';
        }
      },
    },
  },
);

const ProjectTeam = createFormModel(
  'ProjectTeam',
  {
    name: types.string,
    lead: types.string,
  },
  {
    validation: {
      name: 'required',
      lead: ['required', 'minLen'],
    },
  },
);

const CreateProject = createFormModel(
  'CreateProject',
  {
    name: types.string,
    milestones: types.array(Milestone),
    team: ProjectTeam,
  },
  {
    validation: {
      name: ['required'],
      milestones: 'valid',
      team: 'valid',
    },
  },
);
```

Note: `valid` is required to ensure that the form checks the child form.
