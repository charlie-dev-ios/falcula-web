import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppShell } from "./AppShell";

describe("AppShell", () => {
  it("子要素を描画する", () => {
    render(<AppShell>コンテンツ</AppShell>);
    expect(screen.getByText("コンテンツ")).toBeInTheDocument();
  });

  it("メインナビゲーション（サイドバー）を描画する", () => {
    render(<AppShell>コンテンツ</AppShell>);
    expect(
      screen.getByRole("navigation", { name: "メインナビゲーション" }),
    ).toBeInTheDocument();
  });

  it("外側コンテナは画面高に固定されページ全体のスクロールを防ぐ", () => {
    const { container } = render(<AppShell>コンテンツ</AppShell>);
    const shell = container.firstElementChild;
    expect(shell).toHaveClass("h-dvh", "overflow-hidden");
  });

  it("コンテンツ領域だけが縦スクロールする", () => {
    render(<AppShell>コンテンツ</AppShell>);
    const contentRegion = screen.getByText("コンテンツ");
    expect(contentRegion).toHaveClass("flex-1", "overflow-y-auto");
  });
});
