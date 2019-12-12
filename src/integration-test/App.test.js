import { getByTestId } from "@testing-library/testcafe";
import { Selector } from "testcafe";
fixture("Stores Table Header - tests").page("http://localhost:3000/");

test("Test case using Selector", async t => {
  await t
    .expect(Selector("*").withAttribute("data-testid", "userList").textContent)
    .eql("List of users");
});

test("Test case using getByTestId", async t => {
  await t.expect(getByTestId("userList").textContent).eql("List of users");
});
