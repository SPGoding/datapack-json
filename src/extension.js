const { window } = require('vscode')

module.exports = {
    activate: () => {
        for (let i = 3; i > 0; i--) {
            window.showErrorMessage(`(${'!'.repeat(i)}) The "Datapack Helper Plus (JSON)" extension was deprecated, please install "Data-pack Helper Plus" (spgoding.datapack-language-server) instead if you haven't yet, and uninstall the "Datapack Helper Plus (JSON)" extension.`)
        }
    }
}
