---
id: defineValidators
title: defineValidators
sidebar_label: defineValidators
slug: /api/define-validators
---

We can define custom validations using this function

### Usage

```
import { Field } from "mst-form-creator";

defineValidators({
  minLen: (value: any) => ({
    valid: typeof value === 'string' && value.length < 8,
    message: 'String is greater than 8 chars',
  }),
});
```

We can also use Yup to write these validations
