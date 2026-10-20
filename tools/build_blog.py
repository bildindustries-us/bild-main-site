import json, sys, os, html
repo, src, navf = sys.argv[1], sys.argv[2], sys.argv[3]
NAV = open(navf).read()
posts = json.load(open(os.path.join(repo, 'blog', 'posts.json')))
HEAD = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content="{desc}" />
  <link rel="canonical" href="https://bildyourlife.com{path}" />
  <meta property="og:title" content="{ogtitle}" />
  <meta property="og:description" content="{desc}" />
  <meta property="og:type" content="{ogtype}" />
  <meta property="og:url" content="https://bildyourlife.com{path}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Barlow:wght@300;400;500;600&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="/blog/blog.css" />
</head>
<body>
'''
FOOT = '''
<footer class="site-footer">
  <a class="footer-logo" href="/">B<span>I</span>LD</a>
  <div class="footer-links">
    <a href="/blog/">Blog</a>
    <a href="/#pillars">The Pillars</a>
    <a href="/assessment">Assessment</a>
    <a href="/contact">Contact</a>
  </div>
  <div class="footer-copy">© Jeff Boyer · bildyourlife.com</div>
</footer>
<script src="/script.js"></script>
</body>
</html>
'''
CTA = '''<div class="post-cta">
  <h3>Start the work. <em>Free.</em></h3>
  <p>The 6 Pillars guide walks through the same arc I lived: from naming what keeps you stuck to seeing clearly what you're building toward.</p>
  <a href="/6pillars-guide">Get the Free Guide</a><a class="secondary" href="/assessment">Take the Assessment</a>
</div>
'''
e = html.escape
cards = []
for p in posts:
    path = '/blog/' + p['slug']
    body = open(os.path.join(src, p['slug'] + '.html')).read()
    meta = f"{p['date_display']} · {p['minutes']} min read"
    page = HEAD.format(title=e(p['title']) + ' | BILD', desc=e(p['description']), path=path, ogtitle=e(p['title']), ogtype='article') + NAV + f'''
<header class="post-hero"><div class="post-hero-inner">
  <span class="post-meta">{e(p['category'])} · {meta}</span>
  <h1>{e(p['title'])}</h1>
  <p class="dek">{e(p['dek'])}</p>
</div></header>
<article class="post-body">
{body}
</article>
{CTA}<a class="back-link" href="/blog/">← All posts</a>
''' + FOOT
    open(os.path.join(repo, 'blog', p['slug'] + '.html'), 'w').write(page)
    cards.append(f'''  <a class="post-card" href="{path}">
    <span class="post-meta">{e(p['category'])} · {meta}</span>
    <h2>{e(p['title'])}</h2>
    <p>{e(p['dek'])}</p>
    <span class="read-more">Read →</span>
  </a>''')
idx = HEAD.format(title='The BILD Blog | Jeff Boyer', desc='Honest writing for men who built success and still feel stuck. Faith, marriage, fatherhood and purpose, from Jeff Boyer.', path='/blog/', ogtitle='The BILD Blog', ogtype='website') + NAV + '''
<header class="blog-hero">
  <span class="section-label">The BILD Blog</span>
  <h1>What I learned<br><em>the hard way.</em></h1>
  <p>Honest writing for men who built success and still feel stuck. Faith, marriage, fatherhood, and purpose: the steps that actually helped me grow.</p>
</header>
<section class="post-list">
''' + '\n'.join(cards) + '\n</section>\n' + FOOT
open(os.path.join(repo, 'blog', 'index.html'), 'w').write(idx)
print('built', len(posts), 'posts')
