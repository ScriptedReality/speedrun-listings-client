/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, RenderResult } from "@testing-library/react";
import ReviewPage from './ReviewPage';

function getReviewPage(): RenderResult {

  return render(<ReviewPage />);

}

it("Successfully submits reviews", () => {

  // Type user name
  getReviewPage();
  const usernameBox = screen.getByLabelText("Username") as HTMLInputElement;
  fireEvent.change(usernameBox, {target: {value: "Bob Davies"}});

  // Type content in review body
  const contentBox = screen.getByLabelText("Description") as HTMLInputElement;
  fireEvent.change(contentBox, {target: {value: "This totally is the best website ever :)"}});

  // Press submit button
  const submitButton = screen.getByRole("button", {name: "Submit"}) as HTMLButtonElement;
  fireEvent.click(submitButton);

  // Verify the review box is empty.
  expect(usernameBox.value).toBe("");
  expect(contentBox.value).toBe("");

  // Verify the review appears on the page.
  screen.getByText("Bob Davies");

});

it("Successfully shows reviewers' correct amount of stars", () => {

  // Press stars

  // Press submit button

  // Check if review is there with the correct stars

});

it("Successfully deletes reviews", () => {

  // Generate a random review.
  getReviewPage();
  const usernameBox = screen.getByLabelText("Username") as HTMLInputElement;
  fireEvent.change(usernameBox, {target: {value: "Bob Davies"}});

  const contentBox = screen.getByLabelText("Description") as HTMLInputElement;
  fireEvent.change(contentBox, {target: {value: "This totally is the best website ever :)"}});

  const submitButton = screen.getByRole("button", {name: "Submit"}) as HTMLButtonElement;
  fireEvent.click(submitButton);

  // Delete the review.
  const deleteButton = screen.getByRole("button", {name: "Delete"}) as HTMLButtonElement;
  fireEvent.click(deleteButton);

  // Verify the review isn't there.
  const usernameLabel = screen.queryByText("Bob Davies");
  expect(usernameLabel).toBeNull();

});