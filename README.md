# github-edit

> Github Content CURD API.

```bash
yarn add github-edit
```

# Example

```ts
import {
  login,
  unLogin,
  getContentTree,
  createFile,
  removeFile,
  readFile
} from "@saber2pr/github-edit"

// 1. login
login(username, password)

// 2. content tree
getContentTree(repo)

// 3. createFile
createFile(repo, path, commit)

// 4. removeFile
removeFile(repo, path, commit)

// 5. readFile
readFile(repo, path)

// 6. unLogin
unLogin()
```

---

## start

```bash
yarn install
```

```bash
yarn start

yarn dev
```

> Author: saber2pr
