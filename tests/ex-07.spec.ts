import { test, expect } from "@playwright/test";

test("Exercise 7: Sort Products by Price", async ({page}) => {
    await page.goto("/module-3/exercise-7");

    const sortSelect = page.getByTestId("sort-select");
    const productPrices = page.locator(".product-price");

    await sortSelect.selectOption("asc");

    //await expect(productPrices).toHaveText(5);

    const prices= await productPrices.count();
    
    for(let i=0;i<prices;i++){
        await expect(productPrices.nth(i)).toHaveText("$10");
    }

})