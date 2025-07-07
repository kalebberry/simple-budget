import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../src/design-tokens/text-sizes.json');
const outputPath = path.join(__dirname, '../src/styles/abstracts/_font-sizes.scss');

// Settings
const BASE_SIZE = 16; // px to rem
const MIN_VIEWPORT = 375;
const MAX_VIEWPORT = 1440;
const SCOPE = 'vi'; // vi or vw depending on preference

// Load and parse
const raw = await fs.readFile(inputPath, 'utf8');
const json = JSON.parse(raw);
const items = json.items || [];

function round(val) {
	return parseFloat(val.toFixed(4)).toString();
}

// Generate clamp values
let output = `$font-sizes: (\n`;

items.forEach((item) => {
	const key = item.name.trim().toLowerCase().replace(/\s+/g, '-');
	const minPx = item.min;
	const maxPx = item.max;

	const minRem = minPx / BASE_SIZE;
	const maxRem = maxPx / BASE_SIZE;

	const slope = (maxPx - minPx) / (MAX_VIEWPORT - MIN_VIEWPORT);
	const slopeScoped = slope * 100;
	const interceptPx = minPx - slope * MIN_VIEWPORT;
	const interceptRem = interceptPx / BASE_SIZE;

	const clamp = `clamp(${round(minRem)}rem, ${round(interceptRem)}rem + ${round(
		slopeScoped
	)}${SCOPE}, ${round(maxRem)}rem)`;

	output += `  ${key}: ${clamp},\n`;
});

output += `);\n`;

// Write to SCSS
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, output);
console.log(`✅ Generated: ${outputPath}`);
