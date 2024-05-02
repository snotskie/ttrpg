# DocumenterSiteTemplate

## Setting up for the first time

1. [Make a copy from the template](https://github.com/new?owner=Tiny-Earth&template_name=DocumenterSiteTemplate&template_owner=Tiny-Earth)
2. Update `Project.toml`
    1. Update the `name` field
    2. Update the [UUID](https://stackoverflow.com/questions/69945658/how-to-create-a-uuid-for-a-julia-package) field
    3. Optional - Update the `authors` field
3. Rename `src/DocumenterSiteTemplate.jl`
4. Update `site/make.jl`
    1. Update the `sitename`
    2. Update the `repo`
5. Push changes to Github
6. Confirm that the Github action compiles the site without error
7. Configure the Github repo
    1. Make the repo public
    2. Go to Settings / Pages and set `gh-pages` as the branch to use

## Useful Links

- <https://github.com/Tiny-Earth/DocumenterSiteTemplate/actions>
- <https://github.com/Tiny-Earth/DocumenterSiteTemplate/deployments>
- <https://documenter.juliadocs.org/stable/man/guide/>
- <https://documenter.juliadocs.org/stable/man/hosting/>
- <https://m3g.github.io/JuliaNotes.jl/stable/publish_docs/>
- <https://pkgdocs.julialang.org/v1/toml-files/>
- <https://discourse.julialang.org/t/what-are-the-steps-to-create-your-own-package-in-julia/40877/20>