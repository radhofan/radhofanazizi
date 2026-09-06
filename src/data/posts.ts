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
    title: 'Blog 1',
    date: '2026-08-21',
    displayDate: '21/08/2026',
    formattedDate: 'August 21, 2026',
    description: 'First blog post description and notes.',
    contentHtml: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<div class="heading">Section 1</div>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<div class="trivia">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

<pre><code>// Example code snippet
void sample_function(int x, int y) {
    int result = x + y;
}</code></pre>

<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

<blockquote>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<cite>Author Name</cite>
</blockquote>

<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
`
  },
  {
    slug: 'blog-2',
    title: 'Blog 2',
    date: '2026-07-13',
    displayDate: '13/07/2026',
    formattedDate: 'July 13, 2026',
    description: 'Second blog post description and notes.',
    contentHtml: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Mauris vulputate elementum interdum.</p>

<div class="heading">Section 2</div>

<p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>

<pre><code>int calculate(int value) {
    return value * 2;
}</code></pre>

<div class="trivia">
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
</div>

<p>Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.</p>
`
  },
  {
    slug: 'blog-3',
    title: 'Blog 3',
    date: '2026-06-28',
    displayDate: '28/06/2026',
    formattedDate: 'June 28, 2026',
    description: 'Third blog post description and notes.',
    contentHtml: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<div class="heading">Section 3</div>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<blockquote>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
<cite>Anonymous</cite>
</blockquote>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
`
  },
  {
    slug: 'blog-4',
    title: 'Blog 4',
    date: '2026-05-15',
    displayDate: '15/06/2026',
    formattedDate: 'May 15, 2026',
    description: 'Fourth blog post description and notes.',
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
