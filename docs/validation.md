---
id: validation
title: Validation
sidebar_label: Validation
slug: /validation
---

We can add validations to each field. You can pass validations in option inside `createFormModel` API. There are multiple ways to define validation for a field.

### Default way of adding validation

Validations can be passed as an array. Currently, `required`, `email` and `number` are available by default.

```
const TodoForm = createFormModel(
  'TodoForm',
  {
    title: types.string,
    description: types.string,
    user: types.string
  },
  {
    validation: {
      title: 'required',
      description: 'required',
      user: ['required', 'email']
    },
  }
);
```

### Adding validators

You can also add more validators.

```
defineValidators({
  minLen: (value: any) => ({
    valid: typeof value === 'string' && value.length > 3,
    message: 'Input should be more than 3 characters',
  })
});
```

### Custom function

```
const TodoForm = createFormModel(
  'TodoForm',
  {
    title: types.string,
    description: types.string,
  },
  {
    validation: {
      title: ['required'],
      description: (value) => {
        if(!value) return "This is required field";
      },
    },
  }
);
```
