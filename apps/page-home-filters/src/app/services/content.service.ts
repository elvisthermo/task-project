import { Injectable } from '@angular/core';
import { Content } from '../interfaces/news';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  contentMarket: Content[] = [
    {
      title: '5 Things to Know Before the Stock Market Opens',
      url: 'https://www.investopedia.com/5-things-to-know-before-market-opens-july-15-2024-8677863',
      author: 'NISHA GOPALAN',
      created_at: '2024-07-15T08:09:00Z',
      tags: ['Stock Market', '5 Things'],
    },
    {
      title: 'US Stocks Poised to Start Week Higher',
      url: 'https://www.investopedia.com/dow-jones-today-07152024-8677878',
      author: 'STEPHEN WISNEFSKI',
      created_at: '2024-07-15T09:19:00Z',
      tags: ['Stocks', 'Poised'],
    },
    {
      title:
        'Watch These Netflix Stock Price Levels as Momentum Slows Ahead of Earnings',
      url: 'https://www.investopedia.com/watch-these-netflix-stock-price-levels-as-momentum-slows-ahead-of-earnings-8677873',
      author: 'TIMOTHY SMITH',
      created_at: '2024-07-15T07:11:00Z',
      tags: ['Price', 'Levels', 'Netflix'],
    },
    {
      title: 'Top Lockheed Martin Shareholders',
      url: 'https://www.investopedia.com/articles/personal-finance/081416/top-5-shareholders-lockheed-martin-lmt.asp',
      author: 'NATHAN REIFF',
      created_at: '2024-07-14T12:28:00Z',
      tags: ['top', 'Lockheed'],
    },
    {
      title: 'Key Russell 2000 Levels Amid Rotation Into Small Cap Stocks',
      url: 'https://www.investopedia.com/watch-these-key-russell-2000-levels-amid-rotation-into-small-caps-8676959',
      author: 'TIMOTHY SMITH',
      created_at: '2024-07-11T10:14:00Z',
      tags: ['Levels', 'Rotation', 'Cap Stocks'],
    },
    {
      title: 'Bitcoin Holder MicroStrategy Joins Stock Split Bandwagon',
      url: 'https://www.investopedia.com/bitcoin-holder-microstrategy-joins-stock-split-bandwagon-8676429',
      author: 'NISHA GOPALAN',
      created_at: '2024-07-11T11:39:00Z',
      tags: ['Stock', 'Bitcoin', 'Bitcoin'],
    },
    {
      title: 'Bitcoin Holder MicroStrategy Joins Stock Split Bandwagon',
      url: 'https://www.investopedia.com/bitcoin-holder-microstrategy-joins-stock-split-bandwagon-8676429',
      author: 'NISHA GOPALAN',
      created_at: '2024-07-11T11:39:00Z',
      tags: ['Stock', 'Bitcoin', 'Bitcoin'],
    },
    {
      title: 'Learning Angular',
      url: 'https://example.com/learning-angular',
      created_at: '2024-01-05T10:00:00Z',
      author: 'google',
      tags: ['Angular', 'JavaScript', 'Frontend', 'Programming'],
    },
    {
      title: 'Mastering CSS Grid',
      url: 'https://example.com/mastering-css-grid',
      description: 'Advanced techniques for mastering CSS Grid layout.',
      created_at: '2024-02-15T12:30:00Z',
      author: 'dol',
      tags: ['CSS', 'Web Design', 'Layout', 'Frontend'],
    },
    {
      title: 'Introduction to TypeScript',
      url: 'https://example.com/introduction-to-typescript',
      description: "A beginner's guide to TypeScript and its features.",
      created_at: '2024-03-10T09:00:00Z',
      author: 'folha de sp',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
    },
    {
      title: 'Building REST APIs with Node.js',
      url: 'https://example.com/building-rest-apis-with-nodejs',
      description: 'Step-by-step guide to building RESTful APIs using Node.js.',
      author: 'google',
      created_at: '2024-04-20T14:45:00Z',
      tags: ['Node.js', 'API', 'Backend', 'JavaScript'],
    },
    {
      title: 'Responsive Web Design Principles',
      url: 'https://example.com/responsive-web-design-principles',
      description:
        'Key principles and techniques for creating responsive web designs.',
      created_at: '2024-05-05T16:00:00Z',
      author: 'google',
      tags: ['Web Design', 'CSS', 'Responsive Design', 'Frontend'],
    },
    {
      title: 'Understanding Asynchronous JavaScript',
      url: 'https://example.com/understanding-asynchronous-javascript',
      description:
        'An in-depth look at asynchronous programming in JavaScript.',
      created_at: '2024-06-15T11:20:00Z',
      author: 'uol',
      tags: ['JavaScript', 'Async', 'Promises', 'Programming'],
    },
    {
      title: 'Getting Started with React',
      url: 'https://example.com/getting-started-with-react',
      description: "A beginner's guide to building applications with React.",
      created_at: '2024-07-01T08:15:00Z',
      author: 'google',
      tags: ['React', 'JavaScript', 'Frontend', 'Programming'],
    },
    {
      title: 'Effective Git Workflow',
      url: 'https://example.com/effective-git-workflow',
      description: 'Best practices for managing your codebase with Git.',
      created_at: '2024-08-25T13:10:00Z',
      author: 'google',
      tags: ['Git', 'Version Control', 'Programming', 'Workflow'],
    },
    {
      title: 'Deploying Applications with Docker',
      url: 'https://example.com/deploying-applications-with-docker',
      description: 'A guide to deploying applications using Docker containers.',
      created_at: '2024-09-10T17:00:00Z',
      author: 'google',
      tags: ['Docker', 'DevOps', 'Deployment', 'Containers'],
    },
    {
      title: 'GraphQL for Beginners',
      url: 'https://example.com/graphql-for-beginners',
      description:
        'An introduction to GraphQL and how to use it for building APIs.',
      created_at: '2024-10-20T15:35:00Z',
      author: 'uol',
      tags: ['GraphQL', 'API', 'Backend', 'Programming'],
    },
  ];

  contentNews: Content[] = [
    {
      title: 'The Top 25 Stocks in the S&P 500',
      url: 'https://www.investopedia.com/ask/answers/08/find-stocks-in-sp500.asp',
      author: 'Nathan Reiff',
      created_at: '2023-09-26T10:00:00Z',
      tags: ['INVESTING', 'STOCKS'],
    },
    {
      title: 'When Stock Prices Drop, Where Is the Money?',
      url: 'https://www.investopedia.com/articles/basics/03/060603.asp',
      author: 'THE INVESTOPEDIA TEAM',
      created_at: '2023-06-16T10:00:00Z',
      tags: ['Stock', 'Drop'],
    },
    {
      title: 'S&P 500 Average Return and Historical Performance',
      url: 'https://www.investopedia.com/articles/basics/03/060603.asp',
      author: 'J.B. MAVERICK',
      created_at: '2024-01-03T10:00:00Z',
      tags: ['Average', 'Historical', 'Performance'],
    },
    {
      title: 'Investing in Index Funds: What You Need to Know',
      url: 'https://www.investopedia.com/investing-in-index-funds-4771002',
      author: 'JEAN FOLGER',
      created_at: '2023-08-02T10:00:00Z',
      tags: ['You', 'Need', 'to Know'],
    },
    {
      title: 'Benefits of Holding Stocks for the Long Term',
      url: 'https://www.investopedia.com/articles/investing/052216/4-benefits-holding-stocks-long-term.asp',
      author: 'NATHAN REIFF',
      created_at: '2024-02-26T10:00:00Z',
      tags: ['Benefits', 'Holding', 'Stocks'],
    },
    {
      title: 'Guide to Selecting the Best Artificial Intelligence (AI) Stocks',
      url: 'https://www.investopedia.com/artificial-intelligence-stocks-8404873',
      author: 'CEDRIC THOMPSON',
      created_at: '2024-01-22T10:00:00Z',
      tags: ['Guide', 'Artificial Intelligence (AI)', 'Stocks'],
    },
    {
      title: 'Types of Stocks',
      url: 'https://www.investopedia.com/types-of-stocks-5215684',
      author: 'TIMOTHY SMITH',
      created_at: '2023-06-01T10:00:00Z',
      tags: ['Types', 'Stocks'],
    },
    {
      title: 'Learning Angular',
      url: 'https://example.com/learning-angular',
      created_at: '2024-01-05T10:00:00Z',
      author: 'google',
      tags: ['Angular', 'JavaScript', 'Frontend', 'Programming'],
    },
    {
      title: 'Mastering CSS Grid',
      url: 'https://example.com/mastering-css-grid',
      description: 'Advanced techniques for mastering CSS Grid layout.',
      created_at: '2024-02-15T12:30:00Z',
      author: 'dol',
      tags: ['CSS', 'Web Design', 'Layout', 'Frontend'],
    },
    {
      title: 'Introduction to TypeScript',
      url: 'https://example.com/introduction-to-typescript',
      description: "A beginner's guide to TypeScript and its features.",
      created_at: '2024-03-10T09:00:00Z',
      author: 'folha de sp',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
    },
    {
      title: 'Building REST APIs with Node.js',
      url: 'https://example.com/building-rest-apis-with-nodejs',
      description: 'Step-by-step guide to building RESTful APIs using Node.js.',
      author: 'google',
      created_at: '2024-04-20T14:45:00Z',
      tags: ['Node.js', 'API', 'Backend', 'JavaScript'],
    },
    {
      title: 'Responsive Web Design Principles',
      url: 'https://example.com/responsive-web-design-principles',
      description:
        'Key principles and techniques for creating responsive web designs.',
      created_at: '2024-05-05T16:00:00Z',
      author: 'google',
      tags: ['Web Design', 'CSS', 'Responsive Design', 'Frontend'],
    },
    {
      title: 'Understanding Asynchronous JavaScript',
      url: 'https://example.com/understanding-asynchronous-javascript',
      description:
        'An in-depth look at asynchronous programming in JavaScript.',
      created_at: '2024-06-15T11:20:00Z',
      author: 'uol',
      tags: ['JavaScript', 'Async', 'Promises', 'Programming'],
    },
    {
      title: 'Getting Started with React',
      url: 'https://example.com/getting-started-with-react',
      description: "A beginner's guide to building applications with React.",
      created_at: '2024-07-01T08:15:00Z',
      author: 'google',
      tags: ['React', 'JavaScript', 'Frontend', 'Programming'],
    },
    {
      title: 'Effective Git Workflow',
      url: 'https://example.com/effective-git-workflow',
      description: 'Best practices for managing your codebase with Git.',
      created_at: '2024-08-25T13:10:00Z',
      author: 'google',
      tags: ['Git', 'Version Control', 'Programming', 'Workflow'],
    },
    {
      title: 'Deploying Applications with Docker',
      url: 'https://example.com/deploying-applications-with-docker',
      description: 'A guide to deploying applications using Docker containers.',
      created_at: '2024-09-10T17:00:00Z',
      author: 'google',
      tags: ['Docker', 'DevOps', 'Deployment', 'Containers'],
    },
    {
      title: 'GraphQL for Beginners',
      url: 'https://example.com/graphql-for-beginners',
      description:
        'An introduction to GraphQL and how to use it for building APIs.',
      created_at: '2024-10-20T15:35:00Z',
      author: 'uol',
      tags: ['GraphQL', 'API', 'Backend', 'Programming'],
    },
  ];

  recentSearchResults = [
    'stock',
    'Angular',
  ];
  constructor() {
    console.log('init service content');
  }

  getContentMarket(): Content[] {
    return this.contentMarket;
  }

  getContentNews(filter?: string[]): Content[] {
    if (filter && filter?.length > 0) {
      return this.filterItems(this.contentNews,filter);
    }
    return this.contentNews;
  }

  getRecentSearch(): string[] {
    return this.recentSearchResults;
  }

  filterItems(items: Content[], keywords: string[]): Content[] {
    return items.filter((item) =>
      keywords.some(
        (keyword) =>
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.author.toLowerCase().includes(keyword.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(keyword.toLowerCase())
          )
      )
    );
  }
}
