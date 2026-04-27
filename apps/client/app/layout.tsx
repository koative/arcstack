import type { Metadata } from "next";
import "@eros/ui/globals.css";

import { ThemeProvider } from "@eros/ui/providers/theme-provider";

export const metadata: Metadata = {
	title: "eros ❤️‍🔥",
	description: "Bun-native monorepo",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
