// We'll use manual mock implementation since we created the mock file
const blogPlugin = require('./blog-plugin.js');

// Import the mock to access it directly
const mockDefaultBlogPlugin = require('../../__mocks__/@docusaurus/plugin-content-blog.js');

describe('blogPlugin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should export the extended blog plugin function as default', async () => {
    expect(typeof blogPlugin.default).toBe('function');
  });

  test('should preserve all properties of the default blog plugin', async () => {
    const pluginArgs = ['arg1', 'arg2'];
    const mockBlogPluginInstance = {
      contentLoaded: jest.fn(),
      otherProperty: 'otherValue',
    };

    mockDefaultBlogPlugin.default.mockResolvedValue(mockBlogPluginInstance);

    const extendedPlugin = await blogPlugin.default(...pluginArgs);

    expect(mockDefaultBlogPlugin.default).toHaveBeenCalledWith(...pluginArgs);
    expect(extendedPlugin.otherProperty).toBe('otherValue');
    expect(typeof extendedPlugin.contentLoaded).toBe('function');
  });

  test('should override the contentLoaded hook', async () => {
    const mockAddRoute = jest.fn();
    const mockBlogPost1 = { metadata: { source: 'source1' } };
    const mockBlogPost2 = { metadata: { source: 'source2' } };
    const mockBlogPost3 = { metadata: { source: 'source3' } };
    const mockBlogPost4 = { metadata: { source: 'source4' } };
    const mockContent = {
      blogPosts: [mockBlogPost1, mockBlogPost2, mockBlogPost3, mockBlogPost4],
    };

    const mockData = {
      content: mockContent,
      actions: {
        addRoute: mockAddRoute,
      },
    };

    const mockBlogPluginInstance = {
      contentLoaded: jest.fn(),
    };
    mockDefaultBlogPlugin.default.mockResolvedValue(mockBlogPluginInstance);

    const extendedPlugin = await blogPlugin.default('args');
    await extendedPlugin.contentLoaded(mockData);

    // Verify that addRoute was called with the correct parameters
    expect(mockAddRoute).toHaveBeenCalledWith({
      path: '/',
      exact: true,
      component: '@site/src/components/Home/Home.tsx',
      modules: {
        recentPosts: [
          {
            content: {
              __import: true,
              path: 'source1',
              query: {
                truncated: true,
              },
            },
          },
          {
            content: {
              __import: true,
              path: 'source2',
              query: {
                truncated: true,
              },
            },
          },
          {
            content: {
              __import: true,
              path: 'source3',
              query: {
                truncated: true,
              },
            },
          },
        ],
      },
    });

    // Verify that the default contentLoaded was still called
    expect(mockBlogPluginInstance.contentLoaded).toHaveBeenCalledWith(mockData);
  });

  test('should correctly limit recent posts to 3', async () => {
    const mockAddRoute = jest.fn();
    const mockBlogPosts = Array.from({ length: 10 }, (_, i) => ({
      metadata: { source: `source${i}` },
    }));
    const mockContent = {
      blogPosts: mockBlogPosts,
    };

    const mockData = {
      content: mockContent,
      actions: {
        addRoute: mockAddRoute,
      },
    };

    const mockBlogPluginInstance = {
      contentLoaded: jest.fn(),
    };
    mockDefaultBlogPlugin.default.mockResolvedValue(mockBlogPluginInstance);

    const extendedPlugin = await blogPlugin.default('args');
    await extendedPlugin.contentLoaded(mockData);

    // Check that only 3 posts were added to the route (as defined by splice(0, 3))
    const routeCall = mockAddRoute.mock.calls[0][0];
    expect(routeCall.modules.recentPosts).toHaveLength(3);
    expect(routeCall.modules.recentPosts[0].content.path).toBe('source0');
    expect(routeCall.modules.recentPosts[1].content.path).toBe('source1');
    expect(routeCall.modules.recentPosts[2].content.path).toBe('source2');
  });

  test('should handle empty blog posts gracefully', async () => {
    const mockAddRoute = jest.fn();
    const mockContent = {
      blogPosts: [],
    };

    const mockData = {
      content: mockContent,
      actions: {
        addRoute: mockAddRoute,
      },
    };

    const mockBlogPluginInstance = {
      contentLoaded: jest.fn(),
    };
    mockDefaultBlogPlugin.default.mockResolvedValue(mockBlogPluginInstance);

    const extendedPlugin = await blogPlugin.default('args');
    await extendedPlugin.contentLoaded(mockData);

    // Check that the route was still added, but with empty recentPosts
    const routeCall = mockAddRoute.mock.calls[0][0];
    expect(routeCall.modules.recentPosts).toHaveLength(0);
  });

  test('should preserve other exports from the original plugin', () => {
    expect(blogPlugin).toHaveProperty('default');
  });
});