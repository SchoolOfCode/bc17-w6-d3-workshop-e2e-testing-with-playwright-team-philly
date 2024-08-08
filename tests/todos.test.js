import {test, expect} from '@playwright/test';

test("Practice test should pass", async ({page}) => {
    await page.goto('http://localhost:5432/');
});