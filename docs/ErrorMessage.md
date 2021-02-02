---
id: errorMessage
title: ErrorMessage
sidebar_label: ErrorMessage
slug: /api/error-message
---

We can use this component to render an error message for an input.

### API

```
import { ErrorMessage } from "formst";

<ErrorMessage name="field-name" />
```

### Parameters

```
name: string, required
component: string | React.Component
```

Any extra props will be passed down to the child component.

### Usage

```
<ErrorMessage name="title" component={CustomComponent}>
```
