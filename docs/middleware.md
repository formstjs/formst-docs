---
id: middleware
title: Middleware
sidebar_label: Middleware
slug: /middleware
---

You can add a middleware to modify the behaviour of built-in actions provided by Formst. For example, you can modify a form value by intercepting `setValue` action.

Formst exports [addMiddleware](https://mobx-state-tree.js.org/concepts/middleware) from MobX state tree. You can refer [their documentation](https://mobx-state-tree.js.org/concepts/middleware) for detailed usage and API.

### Usage

```
const TodoForm = createFormModel(
  'TodoForm',
  {
    title: types.string,
    description: types.string,
  },
  ...
);

addMiddleware(createProjectForm, (call, next, abort) => {
  if (call.name === 'setValue') {
    const fieldName = call.args[0];
    if (fieldName === 'title') {
      call.args[1] = call.args[1].toUpperCase();
    }
  }

  next(call);
});
```

To get all the available actions for a form model refer [source code](https://github.com/formstjs/formst/blob/master/src/createFormModel.ts).