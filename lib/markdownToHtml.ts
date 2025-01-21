import { remark } from "remark";
import html from "remark-html";
import { rehype } from "rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";


export async function markdownToHtml(markdown: string): Promise<string> {
  const processedContent = await remark()
    .use(html) // Converts Markdown to HTML
    .process(markdown);

  const htmlContent = processedContent.toString();

  // Rehype processes raw HTML and sanitizes it
  const sanitizedContent = await rehype()
    .data("settings", { fragment: true }) // Allows partial HTML fragments
    .use(rehypeRaw) // Processes raw HTML embedded in Markdown
    .use(rehypeSanitize) // Sanitizes the HTML for safety
    .use(rehypeHighlight) // Highlights code blocks
    .process(htmlContent);

  return sanitizedContent.toString();
}
