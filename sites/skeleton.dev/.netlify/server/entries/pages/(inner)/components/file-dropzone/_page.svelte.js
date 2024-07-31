import { c as create_ssr_component, j as compute_rest_props, e as escape, f as spread, l as escape_attribute_value, g as escape_object, i as compute_slots, v as validate_component } from "../../../../../chunks/ssr.js";
import { D as DocsFeature, a as DocsShell } from "../../../../../chunks/DocsShell.js";
import { D as DocsPreview } from "../../../../../chunks/DocsPreview.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { C as CodeBlock } from "../../../../../chunks/CodeBlock.js";
const cBase = "textarea relative flex justify-center items-center";
const cInput = "w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer";
const cInterface = "flex justify-center items-center text-center";
const FileDropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesInput;
  let classesInterface;
  let $$restProps = compute_rest_props($$props, [
    "files",
    "fileInput",
    "name",
    "border",
    "padding",
    "rounded",
    "regionInterface",
    "regionInterfaceText",
    "slotLead",
    "slotMessage",
    "slotMeta"
  ]);
  let $$slots = compute_slots(slots);
  let { files = void 0 } = $$props;
  let { fileInput = void 0 } = $$props;
  let { name } = $$props;
  let { border = "border-2 border-dashed" } = $$props;
  let { padding = "p-4 py-8" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { regionInterface = "" } = $$props;
  let { regionInterfaceText = "" } = $$props;
  let { slotLead = "mb-4" } = $$props;
  let { slotMessage = "" } = $$props;
  let { slotMeta = "opacity-75" } = $$props;
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
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.regionInterface === void 0 && $$bindings.regionInterface && regionInterface !== void 0)
    $$bindings.regionInterface(regionInterface);
  if ($$props.regionInterfaceText === void 0 && $$bindings.regionInterfaceText && regionInterfaceText !== void 0)
    $$bindings.regionInterfaceText(regionInterfaceText);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotMessage === void 0 && $$bindings.slotMessage && slotMessage !== void 0)
    $$bindings.slotMessage(slotMessage);
  if ($$props.slotMeta === void 0 && $$bindings.slotMeta && slotMeta !== void 0)
    $$bindings.slotMeta(slotMeta);
  classesBase = `${cBase} ${border} ${padding} ${rounded} ${$$props.class ?? ""}`;
  classesInput = `${cInput}`;
  classesInterface = `${cInterface}`;
  return `<div class="${[
    "dropzone " + escape(classesBase, true),
    $$restProps.disabled ? "opacity-50" : ""
  ].join(" ").trim()}" data-testid="file-dropzone">  <input${spread(
    [
      { type: "file" },
      { name: escape_attribute_value(name) },
      {
        class: "dropzone-input " + escape(classesInput, true)
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>  <div class="${"dropzone-interface " + escape(classesInterface, true) + " " + escape(regionInterface, true)}"><div class="${"dropzone-interface-text " + escape(regionInterfaceText, true)}"> ${$$slots.lead ? `<div class="${"dropzone-lead " + escape(slotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"dropzone-message " + escape(slotMessage, true)}">${slots.message ? slots.message({}) : `<strong data-svelte-h="svelte-13uz6lq">Upload a file</strong> or drag and drop`}</div>  ${$$slots.meta ? `<small class="${"dropzone-meta " + escape(slotMeta, true)}">${slots.meta ? slots.meta({}) : ``}</small>` : ``}</div></div></div>`;
});
const sveldFileDropzone = { "props": [{ "name": "files", "kind": "let", "description": "Bind FileList to the file input.", "type": "FileList", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "fileInput", "kind": "let", "description": "File input reference.", "type": "null | HTMLInputElement", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": true }, { "name": "name", "kind": "let", "description": "Required. Set a unique name for the file input.", "type": "string", "isFunction": false, "isFunctionDeclaration": false, "isRequired": true, "constant": false, "reactive": false }, { "name": "border", "kind": "let", "description": "Provide classes to set the border styles.", "type": "string", "value": "'border-2 border-dashed'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "padding", "kind": "let", "description": "Provide classes to set the padding styles.", "type": "string", "value": "'p-4 py-8'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "rounded", "kind": "let", "description": "Provide classes to set the box radius styles.", "type": "string", "value": "'rounded-container-token'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionInterface", "kind": "let", "description": "Provide arbitrary styles for the UI region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "regionInterfaceText", "kind": "let", "description": "Provide arbitrary styles for the UI text region.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotLead", "kind": "let", "description": "Provide arbitrary styles for lead slot container.", "type": "string", "value": "'mb-4'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotMessage", "kind": "let", "description": "Provide arbitrary styles for message slot container.", "type": "string", "value": "''", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }, { "name": "slotMeta", "kind": "let", "description": "Provide arbitrary styles for meta text slot container.", "type": "string", "value": "'opacity-75'", "isFunction": false, "isFunctionDeclaration": false, "isRequired": false, "constant": false, "reactive": false }], "moduleExports": [], "slots": [{ "name": "lead", "default": false, "slot_props": "{}" }, { "name": "message", "default": false, "fallback": "<strong>Upload a file</strong> or drag and drop", "slot_props": "{}" }, { "name": "meta", "default": false, "slot_props": "{}" }], "events": [{ "type": "forwarded", "name": "change", "element": "input" }, { "type": "forwarded", "name": "dragenter", "element": "input" }, { "type": "forwarded", "name": "dragover", "element": "input" }, { "type": "forwarded", "name": "dragleave", "element": "input" }, { "type": "forwarded", "name": "drop", "element": "input" }, { "type": "forwarded", "name": "click", "element": "input" }, { "type": "forwarded", "name": "keydown", "element": "input" }, { "type": "forwarded", "name": "keyup", "element": "input" }, { "type": "forwarded", "name": "keypress", "element": "input" }, { "type": "forwarded", "name": "focus", "element": "input" }, { "type": "forwarded", "name": "focusin", "element": "input" }, { "type": "forwarded", "name": "focusout", "element": "input" }], "typedefs": [] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const settings = {
    feature: DocsFeature.Component,
    name: "File Dropzone",
    description: "Allow upload of files with drag and drop.",
    imports: ["FileDropzone"],
    source: "packages/skeleton/src/lib/components/FileDropzone",
    components: [{ sveld: sveldFileDropzone }],
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
        return ` <section class="space-y-4" data-svelte-h="svelte-1xob7c1">Uses <code class="code">input[type=&#39;file&#39;]</code> and allows for all native input features and accessibility. Including
			<code class="code">multiple</code>,
			<code class="code">accept</code>, and <code class="code">required</code>.</section> <section class="space-y-4"><h2 class="h2" data-svelte-h="svelte-1sikr3m">Customization</h2> <p data-svelte-h="svelte-dagisg">Customize the component with the available <code class="code">icon</code>, <code class="code">message</code>, and
				<code class="code">meta</code> slots.</p> ${validate_component(DocsPreview, "DocsPreview").$$render($$result, { background: "neutral" }, {}, {
          source: () => {
            return `${validate_component(CodeBlock, "CodeBlock").$$render(
              $$result,
              {
                language: "html",
                code: `
<FileDropzone name="files">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="message">(message)</svelte:fragment>
	<svelte:fragment slot="meta">(meta)</svelte:fragment>
</FileDropzone>
`
              },
              {},
              {}
            )} `;
          },
          preview: () => {
            return `<div class="space-y-4 w-full">${validate_component(FileDropzone, "FileDropzone").$$render(
              $$result,
              {
                name: "files-example-two",
                accept: "image/*"
              },
              {},
              {
                meta: () => {
                  return `PNG, JPG, and GIF allowed.`;
                },
                lead: () => {
                  return `<i class="fa-solid fa-file-arrow-up text-4xl"></i>`;
                }
              }
            )}</div>`;
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
            code: `<FileDropzone ... bind:files={files} />`
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
            code: `<FileDropzone ... on:change={onChangeHandler}>Upload</FileDropzone>`
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
                code: `<FileDropzone name="files" />`
              },
              {},
              {}
            )} `;
          },
          footer: () => {
            return `<p class="!w-full text-center" data-svelte-h="svelte-1h8pewc">Monitor your browser&#39;s console when adding files.</p> `;
          },
          preview: () => {
            return `<div class="space-y-4 w-full text-token">${validate_component(FileDropzone, "FileDropzone").$$render(
              $$result,
              { name: "files-example-one", files },
              {
                files: ($$value) => {
                  files = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>`;
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
