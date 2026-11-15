---
author: Damian Cebulak
pubDatetime: 2026-11-16T13:00:00Z
title: "Gdy wiedza o systemie zniknęła: Jak AI wspiera wsteczną inżynierię systemów legacy"
slug: gdy-wiedza-zniknela-ai-wsteczna-inzynieria-legacy
draft: false
tags: [systems-thinking, software-architecture, artificial-intelligence, legacy-systems]
description: "Utrata wiedzy to największe ryzyko systemów legacy. Poznaj proces, w którym analityka i AI łączą siły, by odzyskać kontrolę nad czarną skrzynką."
lang: "pl"
---

Jedną z największych bolączek systemów legacy wcale nie jest przestarzała technologia lub sam dług technologiczny. Choć są to istotne ryzyka, to o wiele większym zagrożeniem jest **utrata wiedzy o działaniu systemu**. Przekłada się ona na błędy, drastyczny wzrost kosztów, ale przede wszystkim na lawinowe zwiększanie długu architektonicznego, co ostatecznie prowadzi organizację do tzw. pętli zagłady (*doom loop*).

Co zrobić w sytuacji, gdy system staje się czarną skrzynką? A w zasadzie całym zbiorem czarnych skrzynek? 

Tu z pomocą może przyjść nam sztuczna inteligencja. Do samej skuteczności AI w autonomicznej analizie starych systemów podchodzę dość sceptycznie – widziałem już, jak koszmarne i oderwane od rzeczywistości modele klas potrafiły z tego wyjść. Z tego powodu AI traktuję tu wyłącznie jako **element całego procesu i systemu**, który ma na celu wykonanie żmudnej pracy archeologicznej, odtworzenie mechaniki działania i zbudowanie nowej, czytelnej dokumentacji.

Poniżej przedstawiam 7 etapów procesu odzyskiwania kontroli nad systemem legacy, w którym AI i analityka systemowa łączą się, by odtworzyć utraconą domenę biznesową.

## 1. Definiowanie niewiadomych (*Scope the unknowns*)

Największym błędem przy wprowadzaniu zmian w legacy jest natychmiastowa próba dowiezienia nowej funkcjonalności. Zamiat tego, w pierwszej kolejności **należy dostarczyć  zrozumienie systemu**, które należy traktować jako produkt prac.

Zanim wyślemy pierwsze zapytanie do AI, musimy zmapować nasze luki informacyjne w czterech kluczowych wymiarach:
* **Biznesowym:** Jakie procesy realizuje ten kod?
* **Architektonicznym:** Jakie warstwy i wzorce tu zastosowano?
* **Zależności:** Z czym to się integruje?
* **Punktów zmian:** Gdzie fizycznie znajdują się reguły podlegające modyfikacjom?

Im lepszy i precyzyjniejszy kontekst dostarczymy do modelu AI, tym mniej błędów i halucynacji będziemy musieli poprawiać w kolejnych krokach.

## 2. Archeologia wiedzy i lokalizacja (*Ask & Locate*)

Mając listę pytań, uruchamiamy łańcuch promptów (*Prompt Chain*). Zamiast pytać AI o ogólniki, uderzamy punktowo w strukturę kodu:
* **Locate (Zlokalizuj):** *„Znajdź w kodzie miejsce, gdzie zaczyna się proces X.”*
* **Explain (Wyjaśnij):** *„Wyjaśnij odpowiedzialności poszczególnych komponentów wzdłuż tej ścieżki wywołań.”*

W ten sposób z gigantycznego repozytorium wyciągamy wąski, techniczny szkielet przepływu sterowania – ustalamy, co wywołuje co i jakie zadania wykonuje.

## 3. Konfrontacja i śledzenie dowodów (*Challenge & Trace*)

​To najważniejszy krok, w którym odrzucamy ślepe zaufanie. Przygotowany przez AI szkielet może zawierać luki lub pomijać rzadkie przypadki brzegowe. Zmuszamy model do rygoru, ale poddajemy go też weryfikacji empirycznej:
* **​Challenge & Evidence**: Wymagamy od AI: *„Wskaż konkretny plik źródłowy i symbol dla każdego ze swoich twierdzeń oraz podaj przypadki brzegowe, w których ten przepływ zawiedzie”*.
* **​Weryfikacja statyczna**: Inżynier wykonuje ręczny walkthrough – przechodzi przez wskazane pliki, upewniając się, że wywód AI ma sens architektoniczny.
* **​Testowanie funkcjonalne (Weryfikacja Dynamiczna)**: Statyczny kod potrafi zwodzić (lub ukrywać magię frameworków). Odpalamy środowisko testowe i przepuszczamy próbny scenariusz przez aplikację. Weryfikujemy na żywym organizmie (w logach aplikacji i zrzutach bazy danych), czy system podczas pracy uderza dokładnie w te same klocki, które wskazało nam AI. Najlepszym potwierdzeniem zdobytej wiedzy jest napisanie testu integracyjnego, który oplata odkryty obszar.

​Dopiero kod, który został „przeczytany” przez AI, zweryfikowany wzrokiem inżyniera i potwierdzony testem uruchomionym na żywo, może zostać uznany za odzyskaną wiedzę i przepchnięty do kolejnego etapu – semantycznego dekodowania na język biznesu.

## 4. Dekodowanie technicznego żargonu na proces biznesowy

Znalezienie w kodzie samego wywołania `proc_x_update` niewiele mówi interesariuszom biznesowym. Zweryfikowane kroki techniczne muszą zostać poddane głębokiej translacji semantycznej.

Wspólnie z AI analizujemy logikę warunkową, zapytania do bazy danych i osadzone stringi (np. komunikaty błędów widoczne dla użytkownika), mapując je na wysokopoziomowe pojęcia domenowe. Z technicznej plątaniny funkcji i wywołań tworzymy spójną narrację (*business workflow*), która wyjaśnia cały proces end-to-end w języku zrozumiałym zarówno dla analityków, jak i decydentów biznesowych.

## 5. Budowa Słownika Domenowego i wizualizacja (*Build a glossary*)

Rozproszone wnioski zdobyte w poprzednich krokach trzeba scentralizować. Tworzymy Słownik (*Glossary*), który precyzyjnie definiuje komponenty, granice przekazywania danych (*boundaries*) oraz ujednolica konwencje nazewnicze. To absolutny fundament budowy naszej nowej Bazy Wiedzy (*Knowledge Base*).

Wizualizacja tej wiedzy wymaga jednak dużej ostrożności. Zamiast kazać sztucznej inteligencji wygenerować gotowy, złożony diagram, stosujemy podejście: „Rysuj podczas śledztwa” (*Draw while investigating*). Model wyciąga dla nas kolejne kroki i zależności, ale to my układamy z nich architektoniczny schemat, na bieżąco weryfikując jego logiczną spójność z obowiązującym w organizacji nazewnictwem.

## 6. Analiza strefy rażenia (*Widen the lens / Impact Analysis*)

Pełne zrozumienie domeny biznesowej pozwala wreszcie zaplanować bezpieczną zmianę w systemie. Zanim jednak fizycznie wprowadzimy modyfikację, musimy zbadać jej pełną strefę oddziaływania (*blast radius*).

Reguła jest prosta: **Zlokalizuj pojedynczy punkt, a tuż przed edycją maksymalnie rozszerz perspektywę.** „Prosta” wymiana jednego serwisu uderza zazwyczaj w logikę biznesową innych aplikacji, tabele uprawnień dostępowych, infrastrukturę jako kod (IaC), definicje potoków CI/CD oraz mechanizmy monitoringu i wycofywania zmian (*rollback*). Pełna, udokumentowana mapa uderzenia zapobiega tragicznym awariom produkcyjnym ukrytym daleko poza głównym kodem źródłowym.

## 7. Żywa dokumentacja i utrzymanie (*Publish living docs*)

Nie po to wykonaliśmy tytaniczną pracę badawczą, aby teraz zamknąć ją w nowych, szybko deaktualizujących się dokumentach tekstowych. Zamiast tego zasilamy wypracowaną nomenklaturą nasze codzienne narzędzia deweloperskie.

Tworzymy opisy zadań (*work-items* w systemach typu Jira) głęboko ugruntowane w rzeczywistej implementacji. Do każdego *Pull Requesta* dołączamy precyzyjne notatki ze zmian (*change notes*), jasno wskazując recenzentom, na co dokładnie mają patrzeć w kontekście biznesowym. W ten sposób ostatecznie zamykamy pętlę.

---

## Podsumowanie

Systemy legacy rzadko są problemem samym w sobie – prawdziwym generatorem kosztów i długu architektonicznego jest utrata wiedzy o ich faktycznym działaniu. 

Bezrefleksyjne wpuszczenie AI do starego repozytorium skończy się wygenerowaniem masy bezużytecznych diagramów i dokumentów. Jeśli jednak połączymy moc analizy algorytmicznej ze strukturalnym, analitycznym rzemiosłem – weryfikując fakty, mapując procesy biznesowe i stopniowo badając strefy rażenia – możemy skutecznie wyrwać się z technologicznej pętli zagłady. Wdrożenie tego 7-etapowego procesu sprawia, że system z przerażającej, zapomnianej „czarnej skrzynki” znów staje się przejrzystym środowiskiem, nad którym posiadamy pełną kontrolę operacyjną.

***

*Notatka jest częścią cyfrowego ogrodu. Będzie ewoluować wraz z kolejnymi refleksjami na temat długu technologicznego, inżynierii wstecznej i modernizacji architektury IT.*
