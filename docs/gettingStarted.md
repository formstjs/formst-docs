---
id: gettingStarted
title: Getting Started
sidebar_label: Getting Started
slug: /
---

## Introduction

**MST-Form** is the new way to create and handle forms. Unlike famous libraries like Formik that are UI-first, MST-Form is data first. It is based on **MST**(MobX-State-Tree). What you get out of the box is a highly performant form library that helps you create interdependent fields of a table and add validations to it.

### Installation

Use `yarn` or `npm` to install this library:

```
# yarn
yarn add mst-form-creator

# npm
npm add mst-form-creator
```

### Basic Usage

1. Create a form model

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
)
```

2. Create an instance of the model

```
const todoForm = TodoForm.create({
  title: '',
  description: '',
});
```

3. Wrap the components inside `MSTForm` and use `Field` API to render the fields

```
<MSTForm formInstance={todoForm}>
  <Field name="title" />
  <br />
  <ErrorMessage name="title" />
  <br />
  <br />
  <Field name="description" />
  <br />
  {/* <ErrorMessage name="description" /> */}
</MSTForm>
```