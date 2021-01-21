import * as fs from 'fs';
import { parse } from 'json5';
import type { SnowpackPlugin, SnowpackPluginFactory } from 'snowpack';

/**
 * Plugin
 */
export const plugin: SnowpackPluginFactory = (): SnowpackPlugin => ({
  name: 'snowpack-plugin-json5',
  resolve: {
    input: ['.json5'],
    output: ['.json'],
  },
  async load({ filePath }): Promise<string> {
    // Read file
    const fileContent: string = await fs.promises.readFile(filePath, 'utf-8');

    // Parse file as JSON5
    const fileContentParsed: unknown = parse(fileContent);

    // Stringify file as plain JSON
    const fileContentStringified: string = JSON.stringify(fileContentParsed);

    // Return
    return fileContentStringified;
  },
});
