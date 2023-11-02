import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import CounterButton from "./CounterButton";

describe("CounterButton component", () => {
  it("renders without crashing", () => {
    render(<CounterButton text="Count is: " count={2} onClick={() => {}} />);
  });

  it("renders the correct text with count", () => {
    const { getByText } = render(
      <CounterButton text="Count is: " count={2} onClick={() => {}} />
    );

    expect(getByText("Count is: 2")).toBeInTheDocument();
  });

  it("call onClick when the button is pressed", async () => {
    const onClickSpy = jest.fn();

    const { getByRole } = render(
      <CounterButton text="Count is: " count={2} onClick={onClickSpy} />
    );

    const btn = getByRole("button");

    await userEvent.click(btn);

    expect(onClickSpy).toHaveBeenCalled();
  });
});
