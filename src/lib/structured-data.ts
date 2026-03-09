import { siteConfig } from '@/data/site-config';

/**
 * Generate Schema.org Person structured data for the author
 */
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    email: siteConfig.author.email,
    url: siteConfig.url,
    sameAs: [
      `https://twitter.com/${siteConfig.author.twitter}`,
      `https://linkedin.com/in/${siteConfig.author.linkedin}`,
      `https://github.com/fsd-niraj`,
    ].filter(Boolean),
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Legends',
    },
  };
}

/**
 * Generate Schema.org WebSite structured data
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    inLanguage: 'en-US',
  };
}

/**
 * Generate Schema.org BlogPosting structured data for a blog post
 */
export function getBlogPostSchema(post: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      email: siteConfig.author.email,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    articleBody: post.description,
    inLanguage: 'en-US',
  };
}
