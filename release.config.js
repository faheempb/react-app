module.exports = {
  branches: "mster",
  repositoryUrl: "https://github.com/faheempb/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
};
