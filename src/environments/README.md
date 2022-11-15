## 使用说明

- 配置文件中的 key 的 value 最后可以在全局变量中 `process.env` 中获取，参考 consts/env.ts
- 举个例子：script：的参数 -e 的值为 `test` 则当前项目读取 `.env.test` 文件里面的内容

## 注意事项

- 当前文件夹名字（environments）不可以修改
- 配置文件中的 key 务必以 `CRP_` 开头

#### 使用 .env 的优势

- 打包后，其它环境的配置（.env.xxx）不会出现在代码中，如果写在 js 文件中，打包后会有不同环境的明文。
