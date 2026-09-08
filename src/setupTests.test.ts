import '@testing-library/jest-dom';
import fs from 'fs';
import * as path from 'path';

describe('setupTests.ts', () => {
  it('should have proper file content', () => {
    const filePath = path.join(__dirname, 'setupTests.ts');
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check that file contains required imports and polyfills
    expect(content).toContain(`import '@testing-library/jest-dom';`);
    expect(content).toContain('TextEncoder');
    expect(content).toContain('TextDecoder');
  });

  it('should provide TextEncoder globally', () => {
    expect(global.TextEncoder).toBeDefined();
    expect(typeof global.TextEncoder).toBe('function');

    // Test that TextEncoder works
    const encoder = new global.TextEncoder(); // Use global explicitly
    const testData = encoder.encode('test');

    // Instead of instanceof, check constructor name and properties
    expect(testData.constructor.name).toBe('Uint8Array');
    expect(Array.isArray(Array.from(testData))).toBe(true);
    expect(Array.from(testData)).toEqual([116, 101, 115, 116]); // ASCII values for 'test'
  });

  it('should provide TextDecoder globally', () => {
    expect(global.TextDecoder).toBeDefined();
    expect(typeof global.TextDecoder).toBe('function');

    // Test that TextDecoder works
    const decoder = new global.TextDecoder(); // Use global explicitly
    const testData = new Uint8Array([116, 101, 115, 116]); // ASCII values for 'test'
    const decoded = decoder.decode(testData);
    expect(decoded).toBe('test');
  });

  it('should have jest-dom matchers imported', () => {
    // Test a jest-dom matcher to ensure it's properly imported
    const element = document.createElement('div');
    element.setAttribute('data-testid', 'test-element');
    const testElement = document.body.appendChild(element);
    
    expect(testElement).toBeInTheDocument();
  });
});