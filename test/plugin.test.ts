import * as path from 'path';

import { plugin } from '../src/plugin';

/**
 * Snowpack Plugin JSON5 - Unit Test
 */
describe('Snowpack Plugin JSON5', () => {
  it('should define a name', () => {
    const pluginInstance = plugin();

    expect(pluginInstance.name).toBe('snowpack-plugin-json5');
  });

  it('should define the file input type as ".json5"', () => {
    const pluginInstance = plugin();

    expect(pluginInstance.resolve.input).toEqual(['.json5']);
  });

  it('should define the file output type as ".json"', () => {
    const pluginInstance = plugin();

    expect(pluginInstance.resolve.output).toEqual(['.json']);
  });

  it('should process ".json5" files to ".json"', async () => {
    const pluginInstance = plugin();

    const expectedOutput = JSON.stringify({
      title: 'My wonderful application',
      description: 'It does everything you want it to.',
    });

    const actualOutput = await pluginInstance.load({
      filePath: path.join(__dirname, 'example.json5'),
    });

    expect(actualOutput).toBe(expectedOutput);
  });
});
