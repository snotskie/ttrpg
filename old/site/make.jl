using Documenter

makedocs(
  sitename="Humanity, Blessed: TTRPG",
  format=Documenter.HTML(
      assets=[
          "assets/style.css",
          # "assets/script.js"
      ],
      footer="[Humanity, Blessed](https://snotskie.github.io/ttrpg/) © 2024 [snotskie](https://snotskie.com/) is licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1)"
  ),
  pages=["index.md", "characters.md", "playing.md", "quick.md"]
)

deploydocs(repo="github.com/snotskie/ttrpg.git")
