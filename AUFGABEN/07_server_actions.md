# Implementiere das "Liken" von Artikeln

- Lege eine neue Datei für die Action zum "Liken" an (likes-action.ts)
- Die Funktion braucht die `articleId` des Artikels, der geliked werden soll
- Die Funktion muss `async` sein
- Du musst die `"use server"`-Direktive verwenden
- Du kannst die Funktion `mutateArticleLikes` verwenden, die den Artikel im GraphQL Backend "liked"
- In `LikesWidget`soll beim Button-Klick die Server-Funktion aufgerufen werden
- Du kannst Feedback mit `useTransition` darstellen, während der Request läuft
- Du kannst ein "optimistisches Ergebnis" mit `useOptimistic` anzeigen

# Material

- React:
  - Server Functions: https://react.dev/reference/rsc/server-functions 
  - `"use server"`: https://react.dev/reference/rsc/use-server
  - useActionState: https://react.dev/reference/react/useActionState
- Next.js
  - Revalidate Path: https://nextjs.org/docs/app/api-reference/functions/revalidatePath

- 
- useTransition: https://react.dev/reference/react/useTransition
- useOptimistic: https://react.dev/reference/react/useOptimistic