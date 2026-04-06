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

At least two evaluation cycles were conducted to refine usability and interaction flows. :contentReference[oaicite:0]{index=0}

## Key Design Decisions

- **Progressive disclosure**
  → reduces cognitive load during quiz creation

- **Task-oriented flows**
  → aligns UI with user goals instead of system structure

- **Consistency across workflows**
  → same mental model for individual, collaborative, and AI modes

- **Error prevention over correction**
  → validation and constraints embedded in the UI
