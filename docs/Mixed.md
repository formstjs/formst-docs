---
id: mixed
title: Mixed Types
sidebar_label: Mixed Types
slug: /mixed
---

It is very simple to handle nested data

### API

Creating a child form instance to be used with **Arrays**

```
const Milestone = createFormModel(
  'Milestone',
  {
    name: types.string,
  },
  {
    validation: {
      name: name => {
        if (!name) {
          return 'Required';
        }
      },
    },
  }
);
```

Creating a child form instance to be used with **Objects**

```
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
  }
);
```

Using child form instances inside the parent

```
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
  }
)
```

Note: `valid` is required to make sure the form checks the child form.
