## Contributing

Bug fixes and enhancements are welcome.

### Raising Issues

If there are inaccuracies in any pages, please include links to the relevant page (either the rendered page or the source file) and a screenshot, preferably annotated. All open source projects are supported in addition to day jobs, so we appreciate information that helps us quickly locate the problem and apply the fix. The easier it is to fix, the quicker it's likely to be resolved.

### New Tutorials

For new tutorials, please first use the Discussions in this GitHub repo to discuss with the team. The aim is for all tutorials to be:
- Clearly focused on what they will demonstrate.
- Address specific target audiences.
- Understand the skill-set of the target audience.
- Use "Info" blocks to provide extra information for those who want to know the *why* as well as the *what*.
- Use "Troubleshooting" blocks to catch mistakes the developer might make.

Tutorials need:
- An entry in [_data/tutorials.json](_data/tutorials.json), containing name, description, link and target audience. This is used to construct the tile on the landing page.
- The tutorial itself constructed as markdown in a sub-directory under "pages".
- Links to all pages in [sitemap.md](sitemap.md).

Each tutorial needs:
- An "index.md", which is the start page. This should explain what the tutorial will do and identify any pre-requisites. Tutorials assume the user has HCL Domino installed with the HCL Domino REST API.
- Pages for each  step, in sub-directories for each section.
- Any images used should be in a sub-directory called "images".
- A "congrats.md" to wrap up the tutorial, summarising what the tutorial has achieved.

Each page has the following front matter in yaml:
- **layout** defines the template GitHub pages will use to convert to HTML, in [_layouts](/_layouts). "default" should be sufficient.
- If there is a previous page, provide a relative link in the **prevPage** property. The format will be `pages/TUTORIAL_FOLDER/PATH_TO_PAGE`. The only page without a previous page should be index.md. 
- If there is a next page, provide a relative link in the **nextPage** property. The format will be `pages/TUTORIAL_FOLDER/PATH_TO_PAGE`. The only page without a next page should be congrats.md.
- **slug** will provide an array of links for breadcrumbs. "Home" will automatically be added. Subsequent links should be:
  - To the start of the tutorial, **label** and **url**.
  - To the start of the current section, **label** and **url**.
  - The title of the current page.

`{::options parse_block_html="true" /}` allows you to enter HTML and GitHub pages will render the HTML instead of just displaying the raw HTML.

By convention, the highest level heading used is level 3, indicated by `###`. Headings will automatically be added to the left-hand navigation of the page. 

Standard GitHub markdown applies. Code can be entered as a block by starting `{% raw %}` and ending `{% endraw %}`. Classes can be applied to a paragraph by adding `{: ...}` on the line after the paragraph, where the content after the colon is the class name or names.

In addition, paragraphs can be turned into note blocks by adding `{: .alert .alert-info}` on the line following the paragraph. A different class name to "alert-info" will change the styling from a note to yellow (`alert-warning`), red (`alert-danger`) or blue (`alert-success`).

If your content is more than one paragraph, you can apply similar styling with divs.
- An outer div for the whole panel has the class `panel` and a panel to apply styling, e.g. `panel-info`. 
- The heading paragraph has styling `panel-heading`. Typically this is just one line, so you can add `{: .panel-heading}` on the next line.
- The body is in a div with the class `panel-body`.

Links for images or resources should always use relative links.

Paragraphs can also be collapsed with certain classes applied:
- `{: .code}` will hide the content behind a "Show Code" button. When expanded, a "copy" button will allow users to copy the content.
- `{: .troubleshoot #trouble1}` will hide the content behind a "Troubleshoot?" button. If you have more than one on a page, amend the panel id accordingly, e.g. `#trouble2`, `#trouble3` etc.
- `{: .advanced #advanced1}` will hide the content behind a "Challenge Yourself" button. If you have more than one on a page, amend the panel id accordingly, e.g. `#advanced2`, `#advanced3` etc.

If you have Postman tests or other resources to download, put them in an appropriately named directory.

### Local Testing

Please test all changes locally before submitting. Like many GitHub Pages site, it uses Jekyll and Bundler. If you do not have the pre-requisite software installed (Ruby and Bundler), follow the [GitHub guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll).

Once you have the pre-requisites, open a Terminal window at the root of the repo. You can use Bundler to load the gems required, by issuing the command `bundle install`. Once all the gems are available locally, issue the command `bundle exec jekyll serve` to build the site. The output in the Terminal window will show you the base URL for the site. In the unlikely scenario where you have more than one GitHub Pages site running locally at the same time, append `--port=4001` to run on an alternate port, changing the port number as required.

### Pull Requests

Once a tutorial or fix has been tested locally, you're welcome to submit a Pull Request.

If you raise a pull-request without having signed the CLA, you will be prompted to do so automatically.