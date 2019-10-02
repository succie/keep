import React from 'react';
import Preview from './Preview';

export default {
  component: Preview,
  title: 'Preview'
};

const value = `
# h1
## h2
### h3

paragraph
**bold text**
*italic text*

- list
  - list_in
  - list_in
- list2
  - list2_in
  - list2_in

inline \`code\` contents

\`\`\`
code blocks
\`\`\`

> blockquotes text

---

> multiline
> blockquote

---

[link](https://example.com)
`.trim();

export const preview = () => <Preview value={value} />;
