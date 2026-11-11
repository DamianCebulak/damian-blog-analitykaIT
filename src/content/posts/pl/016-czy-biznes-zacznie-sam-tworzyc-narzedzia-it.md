---
author: Damian Cebulak
pubDatetime: 2026-11-12T08:34:00Z
title: "Czy biznes zacznie sam tworzyć swoje narzędzia IT?"
slug: czy-biznes-zacznie-sam-tworzyc-narzedzia-it
draft: false
tags: [systems-thinking, software-architecture, core-banking, artificial-intelligence, cobol]
description: "Historia udowadnia, że marzenie o zastąpieniu programistów przez biznes ma już ponad 60 lat. Dlaczego sztuczna inteligencja również nie zlikwiduje prawdziwych barier wejścia?"
lang: "pl"
---

Na co dzień pracuję z technologią, która w swoich fundamentalnych założeniach miała umożliwić ekspertom biznesowym weryfikację i tworzenie aplikacji bez bezpośredniego udziału programistów na każdym kroku. Technologia ta od początku była traktowana niezwykle poważnie – choć może to dziś brzmieć jak fikcyjna anegdota, jej podwaliny zostały opracowane na zlecenie amerykańskiego Pentagonu.

Mowa o języku **Common Business-Oriented Language**. Jak sama nazwa wskazuje, był to język programowania stworzony z myślą o domenie biznesowej. Miał brzmieć czytelnie, aby menedżerowie i księgowi mogli bezpośrednio audytować logikę aplikacji bez pomocy matematyków i inżynierów maszynowych.  Marketing dostawców wykreował nawet wizję „programowania bez programistów”. Czy to nowa idea, powiązana wyłącznie z obecnymi trendami sztucznej inteligencji, no-code i modnym ostatnio *vibe codingiem*? Nic z tych rzeczy. To pomysł z lat sześćdziesiątych ubiegłego wieku, znany szerzej jako **COBOL**.

Choć ten wpis może wydawać się żartem, kryje w sobie dwie kluczowe prawdy o inżynierii oprogramowania.

## 1 Pogoń za uproszczeniem kosztów i wdrożeń

Świat IT od zawsze dąży do radykalnego uproszczenia wdrożeń i redukcji kosztów. Przejście z zapisu maszynowego i kart perforowanych na języki programowania o składni zbliżonej do ludzkiej było gigantycznym skokiem technologicznym. Zdemokratyzowało to dostęp do komputerów i znacząco obniżyło koszty budowania rozwiązań. 

Kolejne skoki widzieliśmy przy językach wysokiego poziomu, platformach Low-Code/No-Code, a dziś obserwujemy największy z nich – napędzany przez duże modele językowe (LLM).

## 2 Błędna diagnoza bariery wejścia

Pomysł, aby tworzyć oprogramowanie z pominięciem wykwalifikowanych inżynierów, ma już ponad 60 lat – i nadal w pełni się nie ziścił. Powodem jest powtarzający się błąd w diagnozie barier wejścia.

W przypadku COBOL-a twórcy założyli, że jedyną przeszkodą dla biznesu jest niezrozumiały kod maszynowy. Przeoczono jednak kluczowy fakt: **języki programowania nie powstały po to, aby utrudniać ludziom życie, ale po to, by wyeliminować niejednoznaczność języka naturalnego**. 

Przekazanie menedżerom języka angielskiego jako narzędzia programowania nie usunęło wyzwania – przeniosło jedynie ciężar z zapisu syntaxu na konieczność precyzyjnego definiowania logiki. Tworzenie kodu stało się czytelniejsze, ale twarde bariery inżynieryjne pozostały nienaruszone.

## Powtórka z historii w erze AI

Dokładnie ten sam mechanizm obserwujemy dzisiaj przy generatywnej sztucznej inteligencji. Ponownie zakłada się, że płynna komunikacja promptem w języku naturalnym pozwoli biznesowi na samodzielne budowanie systemów (*citizen development* nowej ery).

Większość z tych obietnic zderza się jednak z podziałem, który Fred Brooks opisał już dekady temu w *No Silver Bullet*:
* **Złożoność przypadkowa (Accidental Complexity):** Składnia, kompilacja, pisanie kodu powtarzalnego (boilerplate). To tutaj LLM-y i narzędzia No-Code robią rewolucję, redukując narzut do zera.
* **Złożoność istotna (Essential Complexity):** Modelowanie domeny, spójność stanów, transakcyjność, obsługa wyjątków i integracje. Ta część nie skurczyła się ani trochę.

Zastąpienie kodu promptem powiela niejednoznaczność języka naturalnego, z którą analitycy walczą na co dzień. W efekcie budowa poważnych systemów szybko natrafia na te same bariery:

* **Faza 0-to-1 vs 1-to-N:** AI pozwala biznesowi w kilka minut wygenerować działający prototyp (0-to-1). Prawdziwa inżynieria zaczyna się jednak w fazie utrzymania i rozwoju (1-to-N): przy zmianach regulacyjnych, procesach współbieżnych, ewolucji modelu danych i zarządzaniu skutkami ubocznymi (*side effects*).
* **Niewiedza o własnych procesach:** Biznes rzadko zna swój proces na poziomie przypadków brzegowych. AI precyzyjnie odpowiada na prompt, ale nie wie, o co użytkownik zapomniał zapytać – nie zwaliduje luk w logice ani nieprzewidzianych wyjątku prawnego.
* **Nowa fala Shadow IT (Shadow Code):** Biznes tworzy własne narzędzia od lat – od Excela i skryptów VBA po PowerApps. Problem polega na tym, że te „tymczasowe” aplikacje z czasem stają się krytyczne operacyjnie, nie posiadając architektury bezpieczeństwa, testów regresyjnych, CI/CD ani monitoringu. Generowanie kodu przez AI zwielokrotni zjawisko *Shadow Code*, tworząc ogromny dług technologiczny przy próbach wdrożenia tych rozwiązań na produkcję.
* **Projektowanie architektury:** Działający skrypt to nie to samo co skalowalny system. Rozwiązanie musi gwarantować odporność na błędy (*resilience*), wydajność i spójność transakcyjną pod obciążeniem.
* **Ograniczenia czasowe i rygor operacyjny:** Zespoły biznesowe są obciążone codzienną pracą operacyjną. Narzucenie na nich roli deweloperów i testerów pod szyldem oszczędności najczęściej prowadzi do paraliżu operacyjnego.

## Podsumowanie

Dzisiejszy entuzjazm wokół generatywnej sztucznej inteligencji i obietnice, że „za chwilę każdy będzie programistą”, to powtórka z założeń sprzed ponad pół wieku. 

Narzędzia AI drastycznie ułatwiają nam pisanie kodu oraz wspierają pracę w wielu obszarach, ale interfejs w języku naturalnym nie zastąpi rygoru inżynieryjnego. Prawdziwym wyzwaniem w tworzeniu oprogramowania nigdy nie była sama składnia – było nim i pozostaje myślenie systemowe (*Systems Thinking*), analiza przypadków brzegowych oraz świadome projektowanie architektury.

---
## Szukasz czegoś więcej?
* Zobacz [dlaczego w erze AI nadal używa się COBOLa](https://www.dcebulak.pl/posts/zelazne-fundamenty-cyfrowego-swiata-c-fortran-cobol/)
* Zobacz [czym różni się tworzenie architektury systemów ERP i CRM od core-banking'u](https://www.dcebulak.pl/posts/pulapka-kopiowania-wzorcow-kontekst-architektoniczny/)
* Jeżeli szukasz czegos o nowwych rozwiązaniach, to zobacz [jak działa architektura blockchain](https://www.dcebulak.pl/posts/architektura-bez-administratora-blockchain-bezpieczenstwo-it/)


***

*Notatka jest częścią cyfrowego ogrodu. Będzie ewoluować wraz z kolejnymi refleksjami na temat ewolucji oprogramowania, długu technologicznego i inżynierii procesów biznesowych.*
