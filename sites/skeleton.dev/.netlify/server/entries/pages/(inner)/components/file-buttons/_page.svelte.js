import { c as create_ssr_component, j as compute_rest_props, e as escape, f as spread, l as escape_attribute_value, g as escape_object, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const FileButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesButton;
  let $$restProps = compute_rest_props($$props, ["files", "fileInput", "name", "width", "button"]);
  let { files = void 0 } = $$props;
  let { fileInput = void 0 } = $$props;
  let { name } = $$props;
  let { width = "" } = $$props;
  let { button = "btn variant-filled" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.fileInput === void 0 && $$bindings.fileInput && fileInput !== void 0)
    $$bindings.fileInput(fileInput);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  classesBase = `${$$props.class ?? ""}`;
  classesButton = `${button} ${width}`;
  return `<div class="${"file-button " + escape(classesBase, true)}" data-testid="file-button"> <div class="w-0 h-0 overflow-hidden"><input${spread(
    [
      { type: "file" },
      { name: escape_attribute_value(name) },
      escape_object(prunedRestProps())
    ],
    {}
  )}></div>  <button type="button" class="${"file-button-btn " + escape(classesButton, true)}" ${$$restProps.disabled ? "disabled" : ""}>${slots.default ? slots.default({}) : `Select a File`}</button></div>`;
});
const sveldFileButton = { "props": [{ "name": "files", "kind": "let", "description": "Bind FileList to the file input.", "type": "FileList", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "fileInput", "kind": "let", "description": "File input reference.", "type": "null | HTMLInputElement", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "name", "kind": "let", "description": "Required. Set a unique name for the file input.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "width", "kind": "let", "description": "Provide classes to set the width.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "button", "kind": "let", "description": "Provide a button variant or other class styles.", "type": "string", "value": "'btn variant-filled'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "__default__", "default": true, "fallback": "Select a File", "slot_props": "{}" }], "events": [{ "type": "forwarded", "name": "change", "element": "input" }, { "type": "forwarded", "name": "keydown", "element": "button" }, { "type": "forwarded", "name": "keyup", "element": "button" }, { "type": "forwarded", "name": "keypress", "element": "button" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "File Buttons",
    description: "Allows you to select files with a single click.",
    imports: ["FileButton"],
    source: "packages/skeleton/src/lib/components/FileButton",
    components: [{ sveld: sveldFileButton }],
    restProps: "input"
  };
  let files;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(DocsShell, "DocsShell").$$render($$result, { settings }, {}, {
      usage: () => {
        return ` <section class="space-y-4" data-svelte-h="svelte-qfes1d"><p>Uses <code class="code">FileList</code> to bind data to an <code class="code">input[type=&#39;file&#39;]</code>. Accepts all attributes,
				including:
				<code class="code">multiple</code>, <code class="code">accept</code>, and <code class="code">required</code>.</p></section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-f555fr">Variant Style</h2> <p data-svelte-h="svelte-11o34kw">Use the <code class="code">button</code> property to provide classes for the button, such as variant styles.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<FileButton name="files" button="btn variant-soft-primary">Upload</FileButton>`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `${validate_component(FileButton, "FileButton").$$render(
              $$result,
              {
                name: "files",
                button: "btn variant-soft-primary"
              },
              {},
              {
                default: () => {
                  return `Upload`;
                }
              }
            )}`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-gr2okk">Usage with Button Groups</h2> <p data-svelte-h="svelte-15lfr26">Button Groups expect the child button elements to be native <code class="code">button</code> elements without styles.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<div class="btn-group-vertical variant-filled">
	<button>Update</button>
	<button>Delete</button>
	<FileButton name="files" button="" width="w-full">Upload</FileButton>
	<button>Download</button>
</div>
					`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="btn-group-vertical variant-filled"><button data-svelte-h="svelte-11fwsu3">Update</button> <button data-svelte-h="svelte-hn6ww1">Delete</button> ${validate_component(FileButton, "FileButton").$$render(
              $$result,
              {
                name: "files",
                button: "",
                width: "w-full"
              },
              {},
              {
                default: () => {
                  return `Upload`;
                }
              }
            )} <button data-svelte-h="svelte-ijj6i">Download</button></div>`;
          }
        })}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-6pp6wx">Binding Method</h2> <p data-svelte-h="svelte-154a3y">Use a <code class="code">FileList</code> to bind the file data.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `let files: FileList;`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<FileButton ... bind:files={files} />`
          },
          {},
          {}
        )}</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-zxhu7g">On Change Event</h2> <p data-svelte-h="svelte-144ili5">Use the <code class="code">on:change</code> event to monitor file selection or changes.</p> ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "ts",
            code: `function onChangeHandler(e: Event): void {
	console.log('file data:', e);
}`
          },
          {},
          {}
        )} ${validate_component(CodeBlock, "CodeBlock").$$render(
          $$result,
          {
            language: "html",
            code: `<FileButton ... on:change={onChangeHandler}>Upload</FileButton>`
          },
          {},
          {}
        )}</section> `;
      },
      sandbox: () => {
        return ` ${validate_component(DocsPreview, "DocsPreview").$$render($$result, {}, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `<FileButton name="files" />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<p class="!w-full text-center" data-svelte-h="svelte-1h8pewc">Monitor your browser&#39;s console when adding files.</p> `;
          },
          preview: () => {
            return `${validate_component(FileButton, "FileButton").$$render(
              $$result,
              { name: "file", accept: "image/*", files },
              {
                files: ($$value) => {
                  files = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} `;
      },
      default: () => {
        return ` `;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
