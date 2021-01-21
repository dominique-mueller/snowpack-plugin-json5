import type { SnowpackPlugin } from 'snowpack';

/**
 * Snowpack plugin JSON5
 */
export interface SnowpackPluginJSON5 extends SnowpackPlugin {
  load: (options: { filePath: string }) => Promise<string>;
  resolve: {
    input: string[];
    output: string[];
  };
}
