const { shell, header, subheader } = require('../../../views/components');
const { sidebar } = require('./components');

const posts = () => shell(`
  <div class="main">
    ${header({ currentPage: 'help' })}
    ${subheader({ currentPage: 'help' })}
    <div class="views">
      ${sidebar()}
      <div class="page" id="page">
        <h1>Posts</h1>
        <p>
          A <span style="color:#0f0">green</span> border means the post is the parent of one or more "child" images.<br>
          A <span style="color:#cc0">yellow</span> border means the image has a parent.<br>
          An <span style="color:#ff7f00">orange</span> border means the post is user-shared.<br>
          <br>
          Multiple edits of the same post can appear on one page.
        </p>
        <h2>Searching Posts</h2>
        <p>
          Searching for posts is straightforward. Enter the terms you want to search for, and both titles and descriptions will be scanned for your query. For example, searching for <code>mio yuuko</code> will return every post that has both <code>mio</code> <b>and</b> <code>yuuko</code> in it. You can also exclude a term by putting a hyphen (<code>-</code>) in front of it, and search for a phrase by putting quotation marks around it. They work about how you would expect.<br>
          Please note that Kemono has limited support for non-English search terms due to database limitations. Most notably, Japanese characters cannot be searched.
        </p>
        <h2>Flagging</h2>
        <p>
          If there's something wrong with a post (like damaged/corrupted files) you can click <b>Flag for reimport</b> to have it purged and redownloaded the next time the importer encounters its ID. After that, simply import as usual.
        </p>
      </div>
    </div>
  </div>
`);

module.exports = { posts };
