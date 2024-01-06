import Fuse from "fuse.js";
import { useState } from "react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["frontmatter.title", "frontmatter.tag"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  const posts = fuse
    .search(query)
    .map((result) => result.item);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <div>
      <div className="relative">
      <input
        type="text"
        id="search"
        value={query}
        onChange={handleOnSearch}
        className="block w-full p-4 pl-10 text-xl 
                                  text-gray-900 
                                  border border-gray-300
                                  rounded-lg bg-gray-50
                                  focus:outline-none
                                  focus:ring-blue-500
                                  focus:border-blue-500
                                  rounded-md
        "
        placeholder="Please search in English..."
      />
      </div>

      {query.length > 1 && (
        <div className="my-4">
          Found {posts.length} {posts.length === 1 ? "result" : "results"} for '
          {query}'
        </div>
      )}

      <ul className="list-none">
        {posts &&
          posts.map((post) => (
            <li class="grid grid-cols-[1fr] md:grid-cols-[1fr_auto] mb-3 md:gap-2 items-start">
              <div class="title">
                <a className="unset hover:text-text-link" href={`/blog/${post.slug}`} target="_blank">
                  {post.frontmatter.title}
                </a>
                <p className="text-text-muted text-sm italic pt-1">
                  {post.frontmatter.tag.map((tag, index) => (
                    <span key={index}>
                      #{tag}
                      {index < post.frontmatter.tag.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;