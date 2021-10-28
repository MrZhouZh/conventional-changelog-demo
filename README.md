# conventional-changelog-demo
commit 提交规范和自动生成changelog 示例

## 安装相关依赖

```sh
npm install commitizen -g

# 指定适配器
commitizen init cz-conventional-changelog --save-dev --save-exact

# 提交校验
npm install @commitlint/config-conventional @commitlint/cli --sava-dev

# git hooks
npm install husky --save-dev
```