---
author: Damian Cebulak
pubDatetime: 2026-09-20T13:00:00Z
title: "The Pattern Copying Trap: Why Changing the Architectural Context is More Important Than Technology Itself"
slug: pattern-copying-trap-architectural-context
draft: false
tags: [software-architecture, mental-models, core-banking, systems-thinking]
description: "A reflection on why mindlessly transferring habits and mental models between different IT domains leads to architectural mistakes."
lang: "en"
---

## Context and Architectural Blindness

Recently, I came across discussions on LinkedIn about whether an architect from the banking or **FinTech** industry can design systems well for other industries. The main argument was that working with **Core Banking** systems looks completely different than working with **ERP** or **CRM** systems. There are more restrictions, you often have to use an older technology stack, and focus on immediate updates and data consistency. On top of that, there is optimization for a gigantic number of users and transactions. Such systems often contain **technical debt** accumulated over decades—because these are high-risk solutions, this debt is sometimes untouchable. If the code works, it is better not to touch it to avoid generating additional risk.

In the case of **ERP**, **CRM**, or **E-commerce** systems, the situation is different. You can experiment more often and implement the latest standards and technologies there, while the daily struggle with microsecond optimization and restrictive transactional integrity takes a back seat.

The question of whether a banking systems architect will be a good ERP systems architect reminds me of the question of whether a train driver will be a good car driver. The answer is: yes, but they cannot apply the same rules, reflexes, and habits in both different vehicles.

The key problem arises when an architect tries to mindlessly apply practices and patterns proven in one environment directly to a completely different domain, without verifying the differences in business and technical conditions. The result is usually *over-engineered* solutions that are too rigid and unsuited to the real needs of the organization.

This reminds me of the biblical metaphor: 
> *"Neither do people pour new wine into old wineskins, nor old wine into new ones."*

It is similar with **mental models** in architecture. Trying to force paradigms from one specific domain into the reality of a completely different system, without understanding its specifics, ends in a structural mismatch. However, the problem does not lie in the tools themselves, but in the **lack of context awareness**.

If, however, the architect is fully aware of contextual differences and can actively switch their **mental models** depending on the environment in which they design, they can be highly effective across different domains. 

Stating that a transaction systems specialist must by definition be a poor architect in the CRM/ERP world is a classic categorization error. 

> [!NOTE]
> **Key takeaway:** The problem rarely lies in a person's competence itself. It lies in the unreflective transfer of habits, mechanisms, and behavioral patterns from a context where they worked perfectly into a completely new environment—without verifying whether the change in boundary conditions hasn't made them stop delivering value.

## Final Reflection

The key to mature **enterprise architecture** is not clinging tightly to one universal pattern to which everything seems to fit. It is flexibility, continuous **reflection** on the business context, and the readiness to question one's own engineering habits and apply the principles of **Systems Thinking**.

***

*This note is part of a digital garden. It will evolve along with further reflections on **Systems Thinking** and architectural practice.*
