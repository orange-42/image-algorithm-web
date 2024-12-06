module.exports = {
  printWidth: 100, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  semi: false, // 句末使用分号
  vueIndentScriptAndStyle: false, // 不对vue中的script及style标签缩进
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  trailingComma: 'none', // 多行时尽可能打印尾随逗号
  jsxBracketSameLine: false, // 多属性html标签的‘>’折行放置
  jsxSingleQuote: false, // jsx中使用单引号
  arrowParens: 'avoid', // 尽可能省略括号。例子：x => x
  insertPragma: false, // 在已被preitter格式化的文件顶部加上标注
  requirePragma: false, // 无需顶部注释即可格式化
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'ignore', // 对HTML全局空白敏感
  endOfLine: 'lf', // 结束行形式
  rangeStart: 0
}
