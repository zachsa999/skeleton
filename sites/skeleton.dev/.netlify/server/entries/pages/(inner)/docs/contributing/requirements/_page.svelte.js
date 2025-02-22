import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { L as LayoutPage } from "../../../../../../chunks/LayoutPage.js";
import "../../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as Table } from "../../../../../../chunks/Table.js";
import { C as CodeBlock } from "../../../../../../chunks/CodeBlock.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tableBranches = {
    head: ["Branch", "Description", "Pull Requests"],
    body: [
      [
        '<code class="code">master</code>',
        "Represents the production branch. All pull requests submitted to this branch will be rejected.",
        "🚫 NEVER"
      ],
      [
        '<code class="code">dev</code>',
        "The active development branch containing bleeding edge changes. Target this branch for PRs",
        "✅ Yes"
      ]
    ]
  };
  const tableProjectStructure = {
    head: ["Path", "Description"],
    body: [
      [
        '<code class="code">/packages/skeleton</code>',
        "The core library project, containing all components, elements, utilities, and more."
      ],
      [
        '<code class="code">/sites/skeleton.dev</code>',
        `The SvelteKit project containing this documentation website.`
      ]
    ]
  };
  return `${validate_component(LayoutPage, "LayoutPage").$$render($$result, {}, {}, {
    default: () => {
      return ` <ol class="breadcrumb" data-svelte-h="svelte-1dhakvt"><li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li> <li class="crumb-separator" aria-hidden="true">›</li> <li>Requirements</li></ol>  <header class="space-y-4" data-svelte-h="svelte-1le69ry"><h1 class="h1">Requirements</h1> <p>Please ensure you have read and understand all requirements below. Failure to adhere to the following guidelines may result in your
			pull requests being denied. We reserve the right to ban repeat offenders.</p></header> <hr> <aside class="alert variant-ghost-primary" data-svelte-h="svelte-1hplcs7"><i class="fa-solid fa-thumbs-up text-2xl"></i> <div class="alert-message">Remember to be a team player, don&#39;t be a hero! Open source is best when we all work together!</div></aside>  <section class="space-y-4" data-svelte-h="svelte-1ykkj74"><h2 class="h2">Pull Requests</h2>  <ol class="list-decimal list-inside space-y-2"><li><a class="anchor" href="https://github.com/skeletonlabs/skeleton/issues" target="_blank" rel="noreferrer">Find an open issue</a> or <a class="anchor" href="https://github.com/skeletonlabs/skeleton/discussions/1367" target="_blank" rel="noreferrer">identify a roadmap task</a> you wish to contribute to.</li> <li>If an issue exists on GitHub, leave a comment and let us know you&#39;re interested. We&#39;ll assign you to it.</li> <li>To propose a new feature or update, <a class="anchor" href="https://github.com/skeletonlabs/skeleton/issues/new/choose" target="_blank" rel="noreferrer">create a GitHub issue</a> or <a class="anchor" href="https://discord.gg/EXqV7W8MtY" target="_blank" rel="noreferrer">reach out on Discord</a> in the <code class="code">#contributors</code> channel.</li> <li>Please communicate with maintainers to define <u>all requirements</u> before you write your first line of code.</li> <li>Follow our recommended <strong>branch naming convention</strong> defined in our <a class="anchor" href="/docs/contributing/style-guide">style guide</a>.</li> <li>Submit your pull request as a <strong>DRAFT</strong> as early as possible. Peer review is critical to this process.</li> <li>Run automated tests with <code class="code">pnpm test</code> to verify that no regressions were introduced.</li> <li>Be sure to follow our recommended <a class="anchor" href="/docs/contributing/documentation" target="_blank" rel="noreferrer">documentation guidelines</a> before requesting a review.</li> <li>When ready, set your pull request to the &quot;ready to review&quot; state. Then be patient. We&#39;ll review asap.</li> <li>If your PR meets all requirements it will be merged, otherwise feedback and guidance will be provided.</li></ol></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-164mq6b">Branches</h2> ${validate_component(Table, "Table").$$render($$result, { source: tableBranches }, {}, {})}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1qo6iry">Monorepo</h2> <p data-svelte-h="svelte-1v4zwfu">Skeleton uses a monorepo to group related projects into a single repository. This allows us to easily maintain multiple projects and
			packages in parallel. This includes the Skeleton core library, this documentation site, and more.</p>  <p data-svelte-h="svelte-16b2b60">In order to contribute to Skeleton, you will be required to install and use <a class="anchor" href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a>, as it fully supports monorepo project structures. Don&#39;t worry, it&#39;s very similar to <code class="code">npm</code> and will handle most of the heavy lifting.</p> <p data-svelte-h="svelte-1x2ic1d">We&#39;ve provide a quick reference below for where each project is located.</p> ${validate_component(Table, "Table").$$render($$result, { source: tableProjectStructure }, {}, {})} <h3 class="h3" data-svelte-h="svelte-mm74w5">Getting Started</h3> <p data-svelte-h="svelte-j55k5m">If you&#39;re not familiar with using a monorepo, please follow the steps below:</p>  <ol class="list-decimal list-inside space-y-2" data-svelte-h="svelte-14jtcdo"><li>Install <a class="anchor" href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> globally using <code class="code">npm install -g pnpm</code>. Confirm via <code class="code">pnpm --version</code> in your terminal.</li> <li>Go to our <a href="https://github.com/skeletonlabs/skeleton" class="anchor">repo</a> and press the Fork button in the top right.</li> <li>Click the Code button in Github to clone down a copy of your fork to your local machine</li> <li>Run <code class="code">cd skeleton</code> to move into the cloned monorepo project.</li> <li>Delete your <code class="code">node_modules</code> directory, then run <code class="code">pnpm i</code> to install dependencies for all projects.</li> <li>Run <code class="code">cd sites/skeleton.dev</code> to move into the Skeleton documentation project.</li> <li>Run <code class="code">code .</code> to open the current project directory in VS Code.</li> <li>Run <code class="code">pnpm dev</code> to start a local dev server. You may see a warning the first time.</li> <li>Open the dev server address provided by the terminal in your browser.</li> <li>Modify the documentation or library components as desired. This fully supports HMR.</li></ol> <h3 class="h3" data-svelte-h="svelte-m227ib">Adding New Projects</h3> <p data-svelte-h="svelte-14oxwza">If you wish to add a new project, first run <code class="code">pnpm getall</code> from the root of the monorepo. This will clone
			<a class="anchor" href="https://github.com/skeletonlabs/create-skeleton-app" target="_blank" rel="noreferrer">create-skeleton-app</a>
			into your project under <code class="code">packages/create-skeleton-app</code>. Next run
			<code class="code">pnpm csa yoursitename</code>. This will generate a brand new Skeleton project in the
			<code class="code">/sites</code> directory.</p> <h3 class="h3" data-svelte-h="svelte-igbzyk">Importing Skeleton</h3> <p data-svelte-h="svelte-1ict4jw">To import Skeleton features (ex: components) within each monorepo project, use the following structure:</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "typescript",
          code: `import { Avatar } from '@skeletonlabs/skeleton';`
        },
        {},
        {}
      )}</section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-wjmqnc">Changesets</h2> <p data-svelte-h="svelte-1uqiv20">
			Once you have a PR that is ready, it&#39;ll be time to add a
			<a class="anchor" href="https://github.com/changesets/changesets" target="_blank" rel="noreferrer">Changeset</a>. We use changesets to help
			automate our versioning, changelogs, and releases.</p> <p data-svelte-h="svelte-13m29">We will be creating changesets using the Changeset CLI. The CLI will walk us through the process by having us select the packages and
			their respective version bumps. Version bumps are how we increment the versions for our packages and they come in 3 flavors:
			<code class="code">major</code>,
			<code class="code">minor</code>, and <code class="code">patch</code>.</p> <p data-svelte-h="svelte-11s5hu0">Generally, new features are <code class="code">minor</code> bumps while bugfixes and chores are <code class="code">patch</code> bumps.
			When writing the summary for the changeset, be sure to <u>prefix</u> the message with either
			<code class="code">feat:</code>,
			<code class="code">bugfix:</code>, or <code class="code">chore:</code>.</p> ${validate_component(Table, "Table").$$render(
        $$result,
        {
          source: {
            head: ["Prefix", "When to use", "Version Bump"],
            body: [
              [
                '<code class="code">feat:</code>',
                "For when a new feature is added",
                '<code class="code">minor</code>'
              ],
              [
                '<code class="code">bugfix:</code>',
                "For bug fixes",
                '<code class="code">patch</code>'
              ],
              [
                '<code class="code">chore:</code>',
                "For dependency and general project management",
                '<code class="code">patch</code>'
              ]
            ]
          }
        },
        {},
        {}
      )}  <h3 class="h3" data-svelte-h="svelte-78lz0s">Adding a Changeset</h3> <ol class="list-decimal list-inside space-y-2" data-svelte-h="svelte-1wdxk40"><li>Navigate to the root directory of the monorepo.</li> <li>Run <code class="code">pnpm changeset</code> to run the Changeset CLI.</li> <li>Press <kbd class="kbd">Space</kbd> to select the package(s) you would like to add a changeset for. Once selected, press
				<kbd class="kbd">Enter</kbd>.</li> <li>Now it&#39;s time to select a version bump. If it&#39;s the version bump you desire, press
				<kbd class="kbd">Space</kbd>
				to select the package(s) that it will apply to, and press <kbd class="kbd">Enter</kbd>
				to submit. Otherwise, press <kbd class="kbd">Enter</kbd> to move on to the next version bump option.</li> <li>You will now be prompted to write a summary. <u>Prefix</u> your summary with either <code class="code">feat:</code>,
				<code class="code">bugfix:</code>, or <code class="code">chore:</code>. Then briefly describe the change you implemented.</li> <li>Confirm the changes and commit the newly generated markdown file.</li></ol></section>  <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-6x82w1">Tooling</h2> <p data-svelte-h="svelte-ljwaps">Skeleton utilizes a number of additional tools for project maintenance.</p> <h3 class="h3" data-svelte-h="svelte-vc03e2">Code Linting &amp; Formatting</h3> <p data-svelte-h="svelte-1sbyd0l">To check for linting issues via <a class="anchor" href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a>, run:</p> ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { language: "shell", code: `pnpm lint` }, {}, {})} <p data-svelte-h="svelte-1jjehfg">To automatically apply suggested linting changes, run:</p> ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { language: "shell", code: `pnpm format` }, {}, {})}  <h3 class="h3" data-svelte-h="svelte-1ti4a9f">Automated Tests</h3> <p data-svelte-h="svelte-40chsw">Tests are handled via <a class="anchor" href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, which is similar to
			Jest. Make sure to run all tests before submitting new pull requests.</p> ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { language: "shell", code: `pnpm test` }, {}, {})}  <h3 class="h3" data-svelte-h="svelte-1e7v3gs">Spell Checking</h3> <p data-svelte-h="svelte-uy79ed">Skeleton uses <a class="anchor" href="https://cspell.org" target="_blank" rel="noreferrer">Cspell</a> to check for spelling errors. We
			recommend installing the
			<a class="anchor" href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker" target="_blank" rel="noreferrer">Code Spell Checker</a>
			extension for VS Code. You can add words to the dictionary using this extension, or by editing <code class="code">cspell.json</code> at
			the root of the repository.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
        $$result,
        {
          language: "shell",
          code: `pnpm cspell "**" --no-progress`
        },
        {},
        {}
      )}</section>  <section class="space-y-4" data-svelte-h="svelte-6q8msw"><h2 class="h2">Dependencies</h2> <p>Introducing new dependencies to projects is strictly prohibited. Please sync with a core maintainer if this is required. Pull
			requests that introduce new dependencies without approval will be rejected.</p></section>`;
    }
  })}`;
});
export {
  Page as default
};
