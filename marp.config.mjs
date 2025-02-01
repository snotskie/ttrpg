// plugin adapted from: https://github.com/orgs/marp-team/discussions/510#discussioncomment-9397590
const evalPlugin = (md) => {
  // Add `placeholder` inline rule to parse placeholders like {{ this }}.
  md.inline.ruler.before('escape', 'placeholder', (state, silent) => {
    const { src, pos } = state
    if (src.substr(pos, 2) !== '{{') return false

    // Find end position
    let endPos = pos + 2
    let found = true

    while (endPos < src.length) {
      if (src.substr(endPos, 2) === '}}') {
        found = true
        endPos += 2
        break
      }
      endPos += 1
    }

    if (!found) return false

    // Add placeholder token
    if (!silent) {
      const token = state.push('placeholder', '', 0)
      token.content = src.slice(pos, endPos)
      token.info = src.slice(pos + 2, endPos - 2).trim()
    }

    state.pos = endPos
    return true
  })

  md.core.ruler.after(
    'marpit_directives_apply',
    'placeholder_apply',
    (state) => {
      if (state.inlineMode) return

      for (const token of state.tokens) {
        if (token.type === 'inline') {
          // Replace content for each placeholder token with the env value
          for (const inlineToken of token.children) {
            if (inlineToken.type === 'placeholder') {
              inlineToken.content = eval(inlineToken.info) ; //process.env[inlineToken.info]
            }
          }
        }
      }
    }
  )

  // Render placeholder token as unescaped HTML
  md.renderer.rules.placeholder = (tokens, idx) => tokens[idx].content
    // md.utils.escapeHtml(tokens[idx].content)
};

const config = {
  allowLocalFiles: true,
  themeSet: "themes",
  url: process.env.URL || undefined,
  engine: ({ marp }) => marp.use(evalPlugin)
};

export default config;