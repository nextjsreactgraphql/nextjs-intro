import { ReactNode } from "react";


type ArticlesLayoutProps = {
	children: ReactNode;
};

export default function ArticlesLayout({ children }: ArticlesLayoutProps) {
	return (
		<main><div>Hier im Nachrichten-Teil</div>
			{children}
		</main>
	);
}
