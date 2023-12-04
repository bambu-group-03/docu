# Snap Documentation Page

This is the official Documentation Page for the [Snap](https://github.com/bambu-group-03) project.

## Getting Started

To develop follow:

1. Install the dependencies:

```bash
yarn install --frozen-lockfile
```

2. Run the development server:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. This project uses a git hook to enforce [conventional commits](https://github.com/qoomon/git-conventional-commits). To install the git hook, run the following command in the root directory of the project:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```
