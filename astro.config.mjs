// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	site: 'https://v3DJG6GL.github.io',
	base: '/wiki',
	integrations: [
		starlight({
			title: 'v3DJG6GL | Wiki',
			lastUpdated: true,
			tableOfContents: { minLevel: 6, maxLevel: 6 },  // only h2, no h3 sub-entries
			plugins: [
				starlightImageZoom()
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/v3DJG6GL/wiki' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						// { label: 'Example Guide', slug: 'guides/example' },
						// Each item here is one entry in the navigation menu.
						{ label: 'Connecting Seerr instances', slug: 'guides/connecting_seerr_instances' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
