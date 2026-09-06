export interface Post {
  slug: string;
  title: string;
  date: string; // ISO format YYYY-MM-DD or display format
  displayDate: string; // DD/MM/YYYY
  formattedDate: string; // Month DD, YYYY
  description: string;
  contentHtml: string;
}

export const posts: Post[] = [
  {
    slug: 'blog-1',
    title: 'Blog 1: Deep Dive into Graphics Pipeline Architecture',
    date: '2026-08-21',
    displayDate: '21/08/2026',
    formattedDate: 'August 21, 2026',
    description: 'An exploration of rasterization and early 3D acceleration architectures.',
    contentHtml: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<div class="heading">Pipeline Overview</div>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<div class="trivia">
Early rasterization hardware did not feature programmable shaders. Everything was evaluated via a fixed function pipeline configured through register states.
</div>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

<pre><code>// Fixed-function rasterizer inner loop
void draw_span(int y, int x1, int x2, uint32_t color) {
    uint32_t* fb = framebuffer + (y * SCREEN_WIDTH);
    for (int x = x1; x &lt;= x2; ++x) {
        fb[x] = color;
    }
}</code></pre>

<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

<blockquote>
The fastest draw call is the one you never send to the hardware.
<cite>Anonymous Graphics Engineer</cite>
</blockquote>

<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
`
  },
  {
    slug: 'blog-2',
    title: 'Blog 2: Memory Management in Retro Game Engines',
    date: '2026-07-13',
    displayDate: '13/07/2026',
    formattedDate: 'July 13, 2026',
    description: 'Zone allocators, linear heaps, and zero-fragmentation tricks.',
    contentHtml: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Mauris vulputate elementum interdum.</p>

<div class="heading">Zone Allocation Strategy</div>

<p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>

<pre><code>typedef struct memblock_s {
    int size;
    int tag;
    struct memblock_s *next, *prev;
} memblock_t;

void* Z_Malloc(int size, int tag) {
    // Custom heap allocation
    return internal_alloc(size, tag);
}</code></pre>

<div class="trivia">
Zone memory allocators grouped allocations by lifespan (PU_STATIC, PU_LEVEL, PU_CACHE) allowing entire arenas to be freed instantly without individual deallocations.
</div>

<p>Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.</p>
`
  },
  {
    slug: 'blog-3',
    title: 'Blog 3: Software Rendering and BSP Trees',
    date: '2026-06-28',
    displayDate: '28/06/2026',
    formattedDate: 'June 28, 2026',
    description: 'How binary space partitioning solved the hidden surface removal problem.',
    contentHtml: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<div class="heading">Binary Partitioning</div>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<blockquote>
By preprocessing the static world geometry into a binary tree, front-to-back ordering can be achieved in O(n) time at render time.
<cite>Computer Graphics Principles</cite>
</blockquote>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
`
  },
  {
    slug: 'blog-4',
    title: 'Blog 4: Audio Hardware and FM Synthesis',
    date: '2026-05-15',
    displayDate: '15/06/2026',
    formattedDate: 'May 15, 2026',
    description: 'Frequency modulation synthesis chips of the 1980s and 1990s.',
    contentHtml: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>

<div class="heading">Operator Algorithms</div>

<p>Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

<div class="trivia">
The Yamaha YM3812 (OPL2) uses two operators per voice with sinusoidal phase modulation, while the OPL3 expanded this to 4-operator stereo capabilities.
</div>

<p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.</p>
`
  }
];
