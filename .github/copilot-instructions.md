# Copilot Instructions for coding-challenges

## Project Overview

This repository contains coding challenge solutions, organized by date in subfolders (e.g., `2025-08-28/`). Each file is self-contained and focuses on a specific algorithm or data structure problem, often mirroring LeetCode or Codewars prompts.

## Key Patterns & Conventions

-   **File Structure:** Each challenge is in its own file, named after the problem (e.g., `reverse-linked-list.js`). The folder structure uses dates for organization.
-   **Class Definitions:** Custom data structures (e.g., `Node`, `LinkedList`) are defined within each file as needed. These may differ from standard library implementations.
-   **Method Naming:** Methods are named to match the problem statement (e.g., `reverse`, `reverseLinkedList`, `reverseLinkedListRecursive`).
-   **Input/Output:** Functions expect inputs as described in the problem prompt, typically using custom classes rather than raw arrays.
-   **Comments:** Problem descriptions, constraints, and example inputs/outputs are included at the top of each file for context.

## Developer Workflows

-   **Testing:** There is no formal test framework or runner; manual testing is expected. You may add test cases at the bottom of each file or use Node.js REPL.
-   **Debugging:** Use inline `console.log` statements for debugging. No external debugging tools are integrated.
-   **No Build Step:** All code is plain JavaScript and can be run directly with Node.js.

## Integration Points

-   **No External Dependencies:** All code is standalone; no npm packages or external libraries are used.
-   **No Cross-File Imports:** Each file is independent; do not expect shared modules or utilities.

## Project-Specific Advice

-   When implementing algorithms, follow the conventions in existing files: include a descriptive comment block, define custom classes as needed, and keep logic self-contained.
-   If you add new challenges, use the date-based folder structure and match the naming conventions.
-   For linked list problems, ensure you use the correct property (`next`) for singly linked lists.

---

**Feedback Request:**  
If any section is unclear or missing details about workflows, conventions, or architecture, please specify so this guide can be improved.
