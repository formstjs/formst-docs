---
id: MSTForm
title: MSTForm
sidebar_label: MSTForm
slug: /api/mst-form
---

We need to wrap the `Field` components inside MSTForm and pass a `createFormModel` instance to it.

### API

```
import { MSTForm } from "mst-form-creator";

<MSTForm formInstance={formInstance} />
```

### Parameters

```
formInstance: Instance of the model created by createFormModel
```

### Usage

```
<MSTForm>
  <Field name="title" component={CustomComponent}>
</MSTForm>
```
