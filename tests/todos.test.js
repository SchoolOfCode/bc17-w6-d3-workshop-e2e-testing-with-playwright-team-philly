import {test, expect} from '@playwright/test';

test("Practice test should pass", async ({page}) => {
    await page.goto('http://localhost:5432/');
});

//// this part should target the button

test('Should check that we are targeting the input', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Select the textbox and fill it with a value
    const textbox = page.getByRole('input');
    await textbox.fill('HELLO I AM A MACHINE WRITING');

    // Check that input has the expected value
    await expect(textbox).toHaveValue('HELLO I AM A MACHINE WRITING');
});
