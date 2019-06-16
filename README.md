# minecraft-json-schema-zh_CN

[![License](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg?style=flat-square)](https://creativecommons.org/licenses/by/4.0/)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

已更新至：Minecraft Java版 1.14.2

针对 Minecraft 中多种 JSON 文件的 [JSON schema](http://json-schema.org/)。配合现代编辑器，可以实现在书写 JSON 时提供自动补全，并自动校验格式。

![](asd.jpg)

## 设计规范

- 凡是能够显式指定 `minecraft:` 命名空间的字段，必须指定，不能省略。
- 在编写 JSON Schema 的 `title` 与 `description` 时，请以全角句号（`。`）结尾。

## 支持特性

0. `pack.mcmeta`
1. 进度
2. 战利品表
3. 配方
4. 标签（物品标签、方块标签、函数标签、流体标签、实体类型标签）

## 如何使用

以宇宙第一编辑器 [VSCode](https://code.visualstudio.com/) 为例。在你的数据包根目录（即与 `pack.mcmeta` 在同一目录）下创建新文件夹 `.vscode`，在其中创建新文件 `settings.json`，书写如下内容：

```JSON
{
    "json.schemas": [
        {
            "fileMatch": ["/pack.mcmeta"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/pack.mcmeta.json"
        },
        {
            "fileMatch": ["/data/*/advancements/*.json"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/advancement.json"
        },
        {
            "fileMatch": ["/data/*/loot_tables/*.json"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/loot_table.json"
        },
        {
            "fileMatch": ["/data/*/recipes/*.json"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/recipe.json"
        },
        {
            "fileMatch": ["/data/*/tags/blocks/*.json"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/tags/block.json"
        },
        {
            "fileMatch": ["/data/*/tags/entity_types/*.json"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/tags/entity_type.json"
        },
        {
            "fileMatch": ["/data/*/tags/fluids/*.json"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/tags/fluid.json"
        },
        {
            "fileMatch": ["/data/*/tags/functions/*.json"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/tags/function.json"
        },
        {
            "fileMatch": ["/data/*/tags/items/*.json"],
            "url": "https://raw.githubusercontent.com/SPGoding/minecraft-json-schemas-zh_CN/master/java/data/tags/item.json"
        }
    ],
    "files.associations": {
        "*.mcmeta": "json"
    }
}
```

JSON Schemas 已经配置完毕，现在当你使用 VSCode 打开这一数据包，并修改其中的 JSON 文件时，可以享受到自动补全的快乐了。

## shared 更新方法

将 data generator 生成的 `reports/registries.json` 放置在 `./scripts` 中，然后在终端运行命令 `npm run convert`。

# 协议 - License

本项目以 [CC BY 4.0 协议](https://creativecommons.org/licenses/by/4.0/deed.zh) 进行发布。

This work is released under a [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0)

## 基于 - Based On

本项目基于以 [CC BY 4.0 协议](https://creativecommons.org/licenses/by/4.0/deed.zh)发布的 [SPGoding/minecraft-json-schemas-zh_CNs](https://github.com/SPGoding/minecraft-json-schemas-zh_CNs) 项目，作者 [@Levertion](https://github.com/Levertion)。其中所有的英文 `title` 与 `description` 被翻译为了简体中文。

This work is based on [SPGoding/minecraft-json-schemas-zh_CNs](https://github.com/SPGoding/minecraft-json-schemas-zh_CNs) created by [@Levertion](https://github.com/Levertion) which is released under a [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/). All `title`s and `description`s in the schema files are translated to Simplified Chinese.
