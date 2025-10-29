export const Availability = ({ plan, color }) => {
  const colorMap = {
    green: "text-green-700 dark:text-green-400",
    blue: "text-blue-700 dark:text-blue-400",
    purple: "text-purple-700 dark:text-purple-400",
  };

  return (
    <div
      dir="ltr"
      data-orientation="horizontal"
      class="p-2 px-5 mt-0 md:mt-4 flex flex-col sm:flex-row flex-wrap gap-2 relative overflow-hidden rounded-2xl border border-gray-950/10 dark:border-white/10 my-0 bg-gray-50 dark:bg-white/5 dark:codeblock-dark text-gray-950 dark:text-gray-50 codeblock-light text-xs prose prose-gray dark:prose-invert font-semibold no-wrap-words"
    >
      Endpoint availability:{" "}
      <span class={` ${colorMap[color]} flex-1`}>{plan}</span>
      <a class="custom-link" href="https://greip.io/detailed-pricing">
        Learn more
      </a>
    </div>
  );
};
