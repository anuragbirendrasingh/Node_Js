# JavaScript Object vs JSON – Quick Comparison with Examples

| Topic            | JavaScript Object Example                          | JSON Example (valid)                       |
|------------------|----------------------------------------------------|--------------------------------------------|
| **Type**         | `const obj = {name: "Ana"};`                       | `'{"name":"Ana"}'` (string)                |
| **Keys**         | `{ name: "Ana" }` ✅ (unquoted allowed)            | `{"name":"Ana"}` ✅ (must be double-quoted) |
| **Strings**      | `{ name: 'Ana' }` ✅ (single quotes ok)            | `{"name":"Ana"}` ✅ (only double quotes)    |
| **Functions**    | `{ greet() { return "hi"; } }` ✅                  | ❌ Not allowed                             |
| **`undefined`**  | `{ age: undefined }` ✅                            | ❌ Not allowed                             |
| **Date**         | `{ created: new Date() }` ✅                       | `{"created":"2025-09-11T10:30:00.000Z"}`   |
| **Comments**     | `// comment` ✅ allowed in code                    | ❌ Not allowed                             |
| **Trailing commas** | `{ a: 1, b: 2, }` ✅                            | `{"a":1,"b":2}` ✅ (no trailing comma)      |
| **Usage**        | In-memory logic, methods, prototypes               | Data exchange, APIs, config files           |
| **Conversion**   | N/A                                                | `JSON.parse()` / `JSON.stringify()`        |
