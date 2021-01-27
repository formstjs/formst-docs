---
id: createFormModel
title: createFormModel
sidebar_label: createFormModel
slug: /api/create-form-model
---

It creates a Model which comes with some pre-built functions.

### API

`createFormModel(<Model Name>, <Model structure>, options: OptionType)`

### Usage

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
