---
id: validation
title: Validation
sidebar_label: Validation
slug: /validation
---

We can add validations to each field. You can pass validations in option inside `createFormModel` API. There are multiple ways to define validation for a field.

### Default way of adding validation

Validations can be passed as array. Currently `required`, `email` and `number` is supported.

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
      description: 'required',
    },
  }
);
```

### Adding validators

You can also add more validators.

```
defineValidators({
  minLen: (value: any) => ({
    valid: typeof value === 'string' && value.length < 8,
    message: 'String is greater than 8 chars',
  }),

  validation: {
    title: ['required'],
    description: ['required', minLen],
  },
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
