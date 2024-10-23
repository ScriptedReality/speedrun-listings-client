import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";

it("submit reviews", () => {

  // Type user name
  const userNameBox = screen.getByLabelText("Username");
  fireEvent.change(userNameBox, {target: {value: "Bob Davies"}});

  // Type content in review body
  const contentBox = screen.getByLabelText("Description");
  fireEvent.change(contentBox, {target: {value: "This totally is the best website ever :)"}});

  // Press submit button
  const submitButton = screen.getByRole("button", {name: "Submit"});
  fireEvent.click(submitButton);

  // Check if review is there with the correct string
  expect();

});

it("shows reviewers' correct amount of stars", () => {

  // Press stars

  // Press submit button

  // Check if review is there with the correct stars

});

it("deletes reviews", () => {

  // Type random content in review body

  // Press submit button

  // Delete review

});