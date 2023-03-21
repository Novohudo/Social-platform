import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
 test("status fromm should be in the state" ,() => {
  const component = create(<ProfileStatus status="-------" />);
  const instance = component.getInstance();
  expect(instance.state.status).toBe("-------");
 });
});