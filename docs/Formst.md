---
id: formst
title: Formst
sidebar_label: Formst
slug: /api/formst
---

We need to wrap `Field` and `ErrorMessage` components inside `Formst` and pass a `createFormModel` instance to it. Formst component creates a React Context containing formInstance which is available to Field and ErrorMessage inside it so that they can use the values from formInstance.

### API

```
import { Formst } from "formst";

<Formst formInstance={formInstance} />
```

### Props

```
formInstance: Instance of the model created by createFormModel
```

### Usage

```
<Formst formInstance={formInstance}>
  <Field name="title" component={CustomComponent}>
  <ErrorMessage name="title" />
</Formst>
```
