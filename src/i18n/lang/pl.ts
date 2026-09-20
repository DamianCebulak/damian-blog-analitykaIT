import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Start",
    posts: "Wpisy",
    tags: "Tagi",
    about: "O mnie",
    archives: "Archiwum",
    search: "Szukaj",
  },
  post: {
    publishedAt: "Opublikowano",
    updatedAt: "Zaktualizowano",
    sharePostIntro: "Udostępnij ten wpis:",
    sharePostOn: "Udostępnij ten wpis na {{platform}}",
    sharePostViaEmail: "Udostępnij ten wpis przez e-mail",
    tagLabel: "Tagi",
    backToTop: "Do góry",
    goBack: "Wróć",
    editPage: "Edytuj stronę",
    previousPost: "Poprzedni wpis",
    nextPost: "Następny wpis",
  },
  pagination: {
    prev: "Poprzednia",
    next: "Następna",
    page: "Strona",
  },
  home: {
    socialLinks: "Profile społecznościowe",
    featured: "Wyróżnione",
    recentPosts: "Ostatnie wpisy",
    allPosts: "Wszystkie wpisy",
  },
  footer: {
    copyright: "Wszelkie prawa zastrzeżone",
    allRightsReserved: "Wszystkie prawa zastrzeżone.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Wszystkie artykuły oznaczone tagiem",

    tagsTitle: "Tagi",
    tagsDesc: "Wszystkie tagi użyte we wpisach.",

    postsTitle: "Wpisy",
    postsDesc: "Wszystkie opublikowane przeze mnie artykuły.",

    archivesTitle: "Archiwum",
    archivesDesc: "Wszystkie zarchiwizowane artykuły.",

    searchTitle: "Szukaj",
    searchDesc: "Przeszukaj dowolny artykuł...",
  },
  a11y: {
    skipToContent: "Przejdź do treści",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    toggleTheme: "Zmień motyw",
    searchPlaceholder: "Szukaj wpisów...",
    noResults: "Brak wyników",
    goToPreviousPage: "Przejdź do poprzedniej strony",
    goToNextPage: "Przejdź do następnej strony",
  },
  notFound: {
    title: "404 Nie znaleziono",
    message: "Strona nie istnieje",
    goHome: "Wróć na stronę główną",
  },
} satisfies UIStrings;
