# Quizzes Tutor Redesign – UX Bake-off #1

## Prototype (Figma)

The high-fidelity prototype for Bake-off #1 can be accessed here:

👉 [View interactive prototype on Figma](https://www.figma.com/proto/zXBNrwMJNgw0jstrDvN0oe/Projeto-IPM?node-id=1-2&starting-point-node-id=1%3A2)

## Overview

This project consists of a high-fidelity redesign of the Quizzes Tutor mobile application, developed for the Human-Computer Interaction course at Instituto Superior Técnico.

The goal was to rethink the quiz creation experience, focusing on usability, efficiency, and user experience, while supporting individual, collaborative, and AI-assisted quiz creation workflows.

## Problem Context

Quizzes Tutor is widely used at IST for creating and completing quizzes in an academic setting.

However, the quiz creation experience presents several UX challenges:
- complex configuration flows
- lack of guidance during quiz creation
- limited support for collaboration
- no intelligent assistance for content generation

The challenge was to redesign the mobile interface to make quiz creation:
- faster
- more intuitive
- less error-prone

## Solution

We designed a mobile-first interface that streamlines the quiz creation process across three core workflows:

### 1. Individual Quiz Creation
- guided step-by-step creation flow
- clear structure: metadata → questions → settings
- inline validation to prevent errors

### 2. Collaborative Quiz Creation
- shared ownership model
- contribution-based workflow (add/edit questions)
- clear visibility of collaborators and contributions

### 3. AI-Assisted Quiz Creation
- AI-generated question suggestions
- user-in-the-loop editing and validation
- support for rapid quiz bootstrapping

## Design Approach

The project followed an iterative user-centered design process:

- **Low-fidelity prototyping (paper)**
  - rapid ideation and exploration
- **Formative evaluation**
  - Think-Aloud sessions
  - Wizard-of-Oz simulations
- **High-fidelity prototyping (Figma)**
  - mobile UI with realistic interaction flows
- **Iteration based on user feedback**
  - At least two evaluation cycles were conducted to refine usability and interaction flows.

## Key Design Decisions

- **Progressive disclosure**
  → reduces cognitive load during quiz creation

- **Task-oriented flows**
  → aligns UI with user goals instead of system structure

- **Consistency across workflows**
  → same mental model for individual, collaborative, and AI modes

- **Error prevention over correction**
  → validation and constraints embedded in the UI

---

# Dense UI Target Selection – UX Bake-off #2

## Prototype (p5.js)

Bake-off #2 – Interactive prototype:

👉 [Open interactive prototype](https://editor.p5js.org/miguel.almeida.morais/full/oh5-i6VRd)

## Overview

This project explores interaction techniques to optimize target selection in dense user interfaces, developed for the Human-Computer Interaction course at Instituto Superior Técnico.

The objective was to minimize selection time and maximize accuracy when interacting with a grid of 80 targets.

## Problem Context

Dense interfaces are common in real-world systems (dashboards, control panels, data visualization tools), where users must quickly locate and select targets.

The baseline system presents:
- a grid of 8×10 targets
- randomly assigned labels
- a target to be selected per trial

User performance is measured through:
- accuracy (%)
- total time
- average selection time
- penalized time (accounts for errors)

These metrics are automatically collected and stored for evaluation.

## Challenge

The main challenge is reducing selection time without increasing error rate.

This requires optimizing:
- visual search
- motor interaction
- cognitive load

## Solution

We redesigned the interaction model and visual layout to improve target acquisition efficiency.

The solution focuses on:

- improving **visual hierarchy and grouping**
- reducing **search space complexity**
- enhancing **target distinguishability**
- supporting faster **eye-hand coordination**

## Design Approach

The project followed an iterative design cycle:

- ideation based on HCI principles and heuristics
- rapid prototyping in p5.js
- user testing and performance measurement
- iterative refinement based on data

At least two iterations were implemented and evaluated with users. :contentReference[oaicite:3]{index=3}

## Constraints

The solution had to respect strict constraints:

- no access to the target label variable
- no modification of performance metrics or Firebase logging
- no changes to the target label display area
- no additional input devices beyond a standard mouse
- no text input allowed

These constraints ensured a fair evaluation focused purely on UI/interaction design. :contentReference[oaicite:4]{index=4}

## Implementation

The prototype was developed using **p5.js**, running in the browser.

Key aspects:
- responsive UI using screen density (PPI/PPCM)
- consistent target sizing across devices
- real-time performance tracking

## Evaluation

Performance was evaluated using:

- average selection time
- penalized time (accounts for accuracy)
- success rate

Additionally:
- A/B testing across iterations
- statistical validation (e.g., t-tests)

## Key Design Principles Applied

- Fitts’s Law (target acquisition)
- Hick’s Law (decision time)
- visual grouping and proximity
- feedback and error prevention
