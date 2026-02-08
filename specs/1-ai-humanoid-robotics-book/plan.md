# Implementation Plan: AI-Humanoid Robotics Book

**Branch**: `1-ai-humanoid-robotics-book` | **Date**: 2025-12-04 | **Spec**: /specs/1-ai-humanoid-robotics-book/spec.md
**Input**: Feature specification from `/specs/1-ai-humanoid-robotics-book/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the architecture for generating the "AI-Humanoid Robotics Book", a Docusaurus-based book deployed to GitHub Pages. The core approach involves generating MDX chapters, refining content, ensuring fact-checking with APA-cited sources, injecting diagrams, and validating the Docusaurus build.

## Technical Context

**Language/Version**: MDX (Markdown with JSX) for content, JavaScript/TypeScript for Docusaurus framework. Python for `rclpy` examples in book. NEEDS CLARIFICATION for specific generation script language if not Python.
**Primary Dependencies**: Docusaurus (for book framework), Claude Code (for content generation and revision workflows), GitHub Pages (for deployment).
**Storage**: Local filesystem for MDX chapter files, assets (diagrams), and Docusaurus configuration.
**Testing**: Docusaurus build command (`docusaurus build`), MDX linting, structural completeness checks, content accuracy validation (APA citations), diagram rendering tests, cross-chapter continuity checks.
**Target Platform**: GitHub Pages (for hosting the Docusaurus book).
**Project Type**: Documentation/Book (Docusaurus-based).
**Performance Goals**: Fast loading times for generated Docusaurus site on GitHub Pages. NEEDS CLARIFICATION on specific generation performance goals.
**Constraints**: Target chapter length (400-900 words), conceptual focus (no step-by-step tutorials), short/optional code samples, use of official documentation and academic papers as references, consistent section structure, APA citation style.
**Scale/Scope**: 12 fully structured chapters, covering 7 parts of Physical AI, 5,000-7,000 words total for the book, minimum 15 sources.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Accuracy**: All factual claims in the book content must be verifiable from sources and APA-cited. This plan incorporates "Accuracy validated against primary sources" and "APA citations for every factual claim" in Quality Validation.
- **Clarity**: The book is targeted at AI students, beginner-to-intermediate robotics learners. The plan's "Quality Validation" includes "Clarity — beginner-friendly but technically correct".
- **Consistency**: The plan dictates a "Consistent formatting ensures clean Docusaurus builds and uniform reader experience" and "Consistency — chapter format uniform" in Quality Validation.
- **Reproducibility**: All claims should be cited and traceable. "All factual claims must be: Verified from sources, APA-cited, Stored in the chapter reference section" is part of the Research Approach.
- **Key Standards**:
    - Use Docusaurus for all book content (MDX format): Explicitly stated in "Technical architecture for generation" and "Constraints".
    - Use Claude Code for generation and revision: Explicitly stated in "Technical architecture for generation".
    - Cite sources for factual claims (official docs preferred): Covered in "Research Approach" and "Constraints".
    - Writing style: clear, structured, and instructional: Covered by "Clarity" principle and "Tone matches the book’s educational style" in Quality Validation.
    - Code examples must be runnable or logically correct: "Code samples should be short, high-level, optional" and will be logically correct.
- **Constraints**:
    - Minimum 8 chapters + intro + conclusion: The plan details 12 chapters, meeting this.
    - All content must integrate cleanly with Docusaurus: Addressed by "Docusaurus structure" and "MDX validates in Docusaurus" in Quality Validation.
    - Project must be version-controlled and deployed via GitHub Pages: "Docusaurus-based book deployed to GitHub Pages" is a core aspect of the plan.
    - Only credible sources for claims (APA for academic ones): "Research Approach" specifies "authoritative sources" and "APA-cited".
- **Success Criteria**:
    - Book builds without errors and deploys successfully: Covered by "Build health — no MDX syntax errors" and "GitHub Pages deploys without errors" in Quality Validation.
    - Content is accurate, consistent, and easy to follow: Covered by "Accuracy", "Clarity", "Consistency" principles and corresponding Quality Validation points.
    - Code examples work as expected: Implied by "Code samples should be short, high-level, optional" and "logically correct".
    - All specs of this constitution are met: The plan directly addresses all points.

This plan aligns with all aspects of the project constitution.

## Project Structure

### Documentation (this feature)

```text
specs/1-ai-humanoid-robotics-book/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
.
├── docs/                     # Contains all book chapters (MDX files)
│   ├── part1-foundations/
│   │   ├── chapter1-what-is-physical-ai.mdx
│   │   └── chapter2-robotics-foundations.mdx
│   ├── part2-ros2/
│   │   ├── chapter3-ros2-architecture.mdx
│   │   └── chapter4-robot-models-urdf.mdx
│   # ... (more parts and chapters as defined in spec.md)
├── blog/                     # Optional: for release notes or related articles (Docusaurus default)
├── src/                      # For custom React components, CSS, etc. if needed by Docusaurus
│   ├── components/           # Custom React components for MDX
│   ├── css/                  # Custom CSS styles
│   └── theme/                # Custom Docusaurus theme overrides
├── static/                   # Static assets like images, PDFs for Docusaurus
├── docusaurus.config.js      # Docusaurus configuration file
├── sidebars.js               # Docusaurus sidebar configuration
└── package.json              # Project dependencies and scripts
```

**Structure Decision**: The project will follow a Docusaurus-native structure, with MDX chapters organized within the `docs/` directory by book parts. Custom components, CSS, and static assets will reside in their respective Docusaurus standard locations.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No constitution violations detected for this plan.

