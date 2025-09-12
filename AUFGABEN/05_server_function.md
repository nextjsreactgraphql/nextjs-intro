- Lege eine Datei für deine Server Function an (z.B. `actions.ts`) an
- Diese soll eine Server Function zum "liken" eines Artikels haben
- Zum Speichern des Likes kannst du dort `mutateArticleLikes` verwenden
- In `LikesWidget` musst du beim Clicken auf den Button deine Server Function aufrufen und die `articleId` übergeben
- Du kannst den Funktionsaufruf mit einer Transition umschliessen, um Feedback anzuzeigen

# Material

- React Server Functions: https://react.dev/reference/rsc/server-functions
- `useTransition`: https://react.dev/reference/react/useTransition
- `revalidatePath` um den Cache zu aktualisieren: https://nextjs.org/docs/app/api-reference/functions/revalidatePath
- 