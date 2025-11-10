export const MCPCallout = () => {
  return (
    <div
      class="callout my-4 px-5 py-4 overflow-hidden rounded-2xl flex gap-3 border border-[rgba(192, 132, 252, 0.2)] bg-[rgba(192, 132, 252, 0.1)] dark:border-[#c084fc4d] dark:bg-[#c084fc1a] text-[#6005BB] dark:text-[#FFFFFF]"
      data-callout-type="callout"
    >
      <div class="mt-0.5 w-4" data-component-part="callout-icon">
        <svg class="h-4 w-4 !m-0 shrink-0 bg-[#c084fc] [mask-image:url('https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/duotone/fire.svg')] [-webkit-mask-image:url('https://d3gk2c5xim1je2.cloudfront.net/v7.1.0/duotone/fire.svg')] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center]"></svg>
      </div>
      <div
        class="text-sm prose dark:prose-invert min-w-0 w-full [&amp;_kbd]:bg-background-light dark:[&amp;_kbd]:bg-background-dark text-[#6005BB] dark:text-[#FFFFFF]"
        data-component-part="callout-content"
      >
        <span data-as="p">
          Want to skip the docs? Use the{" "}
          <a class="link mint-text-xs border-[#C792FC]" href="/docs-mcp-server">
            <b>MCP Server</b>
          </a>
        </span>
      </div>
    </div>
  );
};
