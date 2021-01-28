---
id: preprocessors
title: Preprocessors
sidebar_label: Preprocessors
slug: /preprocessors
---

We can process the input before setting the value.

### Usage

```
const TodoForm = createFormModel(
  'TodoForm',
  {
    title: types.string,
    description: types.string,
  },
  {
    ...,

    // Adding preprocessor
    preprocessor: {
      title: (value: string) => value.toUpperCase(),
    },
  }
);
```
