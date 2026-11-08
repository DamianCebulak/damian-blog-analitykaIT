---
author: Damian Cebulak
pubDatetime: 2026-09-21T15:00:00Z
title: "The Trap of the Word 'In Particular': How the Precision of Analytical Language Affects Software Development"
slug: trap-of-the-word-in-particular-analytical-language
draft: false
tags: [requirements-engineering, Business-Analysis, mental-models, systems-thinking]
description: "An analysis of how one innocent phrase from legal language—'in particular'—can introduce chaos into system requirements, User Stories, and acceptance criteria."
lang: "en"
---

One of the most important, yet most difficult tasks of a business and system analyst is fighting communication barriers. Interestingly, this battle often takes place at the level of individual words. Sometimes, a seemingly innocent expression can trigger an avalanche of misunderstandings between the business, the analyst, the tester, and the developer. 

Let's take a look at a popular phrase: **"in particular"** (Polish: *„w szczególności”*).

## The Ambiguity That Breeds Errors

As analysts, we eagerly reach for this phrase when we want to point out the most critical cases the business should focus on. Consider an example:

> *"The bank blocks remote channels."*

To the business, this sounds vague and might seem abstract. To illustrate it, we add a clarification:

> *"The bank blocks remote channels, and in particular, prevents withdrawals and payments."*

In our intention, we emphasize a specific case with the highest priority. Here, we draw from the tradition of legal language, where the phrase "in particular" usually means an **open catalogue** (*exempli gratia*). It signals: *"I am providing key examples, but there may be other, unlisted situations."*

And here lies the trap.

## How Do Developers and Testers See This Phrase?

While for the analyst and the business it is an open set, **for the software engineer (developer or tester), the very same phrase can become a closed catalogue**. 

There is a real risk that the technical part of the team will approach this statement literally: they will focus solely on blocking withdrawals and payments, completely ignoring the remaining remote channels and edge scenarios. As a result, a loophole is created in the system, which during acceptance testing or (worse) in production turns out to be a serious implementation error.

---

## Where Should You ABSOLUTELY NOT Use the Phrase "In Particular"?

Absolutely avoid this phrase in all operational, project, and technical documentation where logical precision is key:

* **In System Requirements Specifications (SRS) and User Stories descriptions** – requirements must be unambiguous, not discretionary.
* **In Acceptance Criteria** – instead of "in particular," there must be specific, bulleted conditions (1, 2, 3...) forming a clear, closed, and measurable scope (*Definition of Done*).
* **In API Specifications and integration contracts** – ambiguity in data structures or error handling directly leads to system failures.

---

## Where Is Its Use Completely Natural?

This phrase finds its fully legitimate and useful place in high-level, strategic, and narrative documents that operate on a general vision:

* **In internal policies and procedures (Compliance)** – where you describe general rules and want to illustrate the scale of business impact using an open set of examples.
* **In concept documents and project visions** – at the stage of initial workshops with stakeholders, even before hard system requirements and solution architecture are created.

## Summary

The precision of an analyst's language is a mirror reflecting the quality of the future system. Before you use the phrase "in particular" in a specification next time, ask yourself: *is the intention to open a catalogue of examples, or to precisely close the scope?* In the IT world, we need the latter much more often.

***

*This note is part of a digital garden. It will evolve along with further reflections on the analytical craft, conceptual modeling, and enterprise architecture.*
