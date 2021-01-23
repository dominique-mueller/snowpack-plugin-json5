import * as fs from 'fs';

/**
 * Integration Test
 */
describe('Integration Test', () => {
  it('should include json5 file content in bundle', async () => {
    const expectedJson5Content: string = '{title:"My wonderful application",description:"It does everything you want it to."}';

    const fileContent: string = await fs.promises.readFile('./integration-test/dist/dist/index.js', 'utf-8');

    expect(fileContent).toContain(expectedJson5Content);
  });
});
