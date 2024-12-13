using Documenter

makedocs(
  sitename="Humanity, Blessed: TTRPG",
  format=Documenter.HTML(
      assets=[
          "assets/style.css",
          # "assets/script.js"
      ]
  ),
  pages=["index.md", "characters.md", "playing.md"]
)

deploydocs(repo="github.com/snotskie/ttrpg.git")
