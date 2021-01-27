---
id: field
title: Field
sidebar_label: Field
slug: /api/field
---

We can use this prop to render an input.

### API

```
import { Field } from "mst-form-creator";

<Field name="field-name" />
```

### Parameters

```
name: string, required
component: string | React.Component
```

Any extra props will be passed down to the child component

### Usage

```
<Field name="title" component={CustomComponent}>
```