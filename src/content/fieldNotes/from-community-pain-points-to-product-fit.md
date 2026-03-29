---
title: From Community Pain Points to Product Fit
description: What the AI4RA community asked for in March 2026, and how those needs map to Vandalizer and OpenERA.
publishDate: 2026-03-29
institution: AI4RA Community of Practice
tags:
  - community
  - workflow
  - vandalizer
  - openera
  - implementation
---

The strongest signal from the AI4RA community is not that research administrators want
more AI. It is that they want relief from brittle, repetitive, high-stakes work that keeps
expanding while staffing and local infrastructure remain constrained.

Our March 2026 thematic analysis of 160 substantive responses made that pattern hard to
miss. The most common themes were staffing shortages and "do more with less" pressure,
manual and repetitive processes, compliance complexity, fragmented systems, and document
review burden. Interest in AI was real, but so was caution. People asked for bounded use
cases, visible review points, and tools they could adopt without building an entire
technical stack from scratch.

That matters because it gives us a better way to explain the emerging AI4RA ecosystem.
Vandalizer and OpenERA are not competing answers to the same problem. They address
different parts of the same operational reality.

## Two layers, one workflow problem

Vandalizer is the workflow layer for bounded, testable AI tasks. The current product story
is centered on secure document handling, reusable workflows, verification, and team
deployment. Its live interface emphasizes a simple pattern: upload a document, select a
task, review the output, and export the result. It also foregrounds properties that matter
in research administration contexts: privacy, reproducibility, and verification against a
"golden set" before broader rollout.

OpenERA is the operational system layer. It is where proposal development, internal review,
compliance tracking, document management, and related institutional workflow can happen in
an inspectable open platform. Today, OpenERA already includes a nine-step proposal wizard,
RFA upload with OCR and AI analysis, AI-generated document requirements, a multi-period NSF
budget builder, Excel import and export, budget justification generation, approval routing,
review workspaces, Grants.gov metadata sync, and proposal-scoped compliance tracking.

Put differently: Vandalizer helps the community build and verify AI-assisted workflow
components. OpenERA is the place where validated workflow components can support real
research administration operations.

## Where the themes align today

### 1. Staffing shortages and force-multiplier needs

This was the most pervasive theme in the community responses. Many offices are trying to
cover pre-award, post-award, and compliance responsibilities with very small teams.

Vandalizer fits this need when the problem is repetitive and document-centered. A verified
workflow can reduce the amount of first-pass reading, extraction, and triage required of a
human expert without pretending to replace that expert.

OpenERA fits this need when the problem is process coordination. Guided proposal creation,
auto-save, role-based review routing, and shared review workspaces reduce the dependence on
individual memory and inbox-driven handoffs.

### 2. Manual and repetitive processes

This is one of the clearest alignment areas across both products.

Community respondents described re-keying data, building budgets from scratch, manually
assembling checklists, and repeating the same interpretive work on every new funding
announcement. That is exactly the kind of burden Vandalizer is designed to target through
reusable workflows for extraction and transformation.

OpenERA already operationalizes several of these tasks. RFA upload and AI extraction can
materialize key scalar fields from funding announcements. The document requirements pipeline
can generate sponsor-default and RFA-specific requirements. The budget builder supports
structured entry, imports, exports, and budget justification generation rather than forcing
 staff to start from blank documents each time.

### 3. Compliance complexity

The community repeatedly asked for help navigating sponsor guidelines, changing agency
requirements, and institution-specific compliance expectations.

This is where the distinction between the two platforms becomes especially useful.
Vandalizer provides a way to create narrow, reviewable workflows for tasks like extracting
requirements, flagging likely issues, or standardizing first-pass analysis. Its emphasis on
verification is important because compliance work cannot tolerate invisible failure modes.

OpenERA provides the surrounding operational context. It tracks IRB, IACUC, IBC, radiation
safety, and COI status at the proposal level, records regulatory and institutional flags,
and includes personnel review and review-task workspaces. At the same time, it is important
to be precise: some higher-level AI review capabilities, including runtime-invoked budget
review, proposal review, and compliance checking, are defined in OpenERA's architecture but
not yet fully wired into live application workflows.

### 4. Fragmented and non-integrated systems

Many respondents described living between Cayuse, Banner, spreadsheets, sponsor portals,
email, and homegrown trackers.

OpenERA speaks most directly to that problem. Its value proposition is not only that it is
open source, but that it is operationally legible. It exposes structured workflows, APIs,
typed document management, a data dictionary, and a path toward more interoperable services
rather than more black-box silos.

Vandalizer complements that by acting as a workflow bridge where institutions need to pull
structured signal out of messy documents before moving that information into another system.
For offices that cannot wait for perfect enterprise integration, a governed extraction layer
is often a practical first step.

### 5. Document review burden

This is probably the most immediate shared use case.

The community asked for first-pass review of FOAs, NOFOs, proposals, contracts, and related
documents. Vandalizer is directly aligned with that request: upload a document, run a
workflow, inspect the extracted output, and keep a human reviewer in the loop.

OpenERA extends that value into pre-award operations. RFA analysis, AI-generated document
requirements, document review tooling, and budget review workspaces all reduce the amount of
manual sorting and context reconstruction reviewers need to do.

### 6. Knowledge management and onboarding

The community also asked for ways to retain institutional knowledge and reduce onboarding
burden.

Neither platform fully solves the "RA knowledge base" problem yet, but both point in a
useful direction. Vandalizer makes workflow logic visible and reusable, which helps teams
avoid burying know-how inside one person's habits. OpenERA makes operational steps,
requirements, roles, and review states more explicit, which is a meaningful improvement over
tribal knowledge and spreadsheet-driven process.

### 7. Funding search and pre-award support

This is an area where OpenERA is already more concrete than many people might expect.
Grants.gov search, import, and sync are operational, and RFA ingestion gives institutions a
way to move from opportunity discovery into actual proposal preparation.

Vandalizer supports the earlier interpretive layer: summarizing an opportunity, extracting
key dates and limits, and structuring program requirements so staff do not have to read
every document from scratch.

### 8. Reporting, forecasting, and post-award analytics

This is where the community demand is strong and the current product gap is still visible.

OpenERA has a strong pre-award foundation and some review-oriented oversight features, but
the broader reporting, forecasting, invoice automation, and PI dashboard needs raised by
the community are not yet the most mature part of the stack. Vandalizer can support pieces
of that work where documents need to be interpreted, but it is not a substitute for a full
analytics and post-award reporting layer.

That gap is not a failure. It is a useful roadmap signal from the community.

## What this means for AI4RA

The community did not ask for autonomous administration. It asked for trustworthy leverage.
That is why the alignment between these two products matters.

Vandalizer is strongest when we need bounded AI workflows with explicit review and
verification. OpenERA is strongest when we need those capabilities embedded inside an open,
operational research administration platform. Together, they create a more credible answer
to the community's actual pain points than either "AI assistant" language or generic
enterprise modernization claims.

The next step for AI4RA is not to promise that every requested use case is solved. It is to
keep showing which pain points are already addressable, which capabilities are emerging, and
where the community can help validate the next layer of practical, governed tools.
