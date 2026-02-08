import re
import sys

def validate_chapter(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    errors = []

    # Check for required top-level headings
    required_sections = [
        "# Hardware Overview",
        "## Overview",
        "## Key Concepts",
        "## Subsections",
        "## Learning Goals",
        "## Mini Diagram",
        "## Short Example",
        "## References"
    ]

    for section in required_sections:
        if section not in content:
            errors.append(f"Missing required section: '{section}'")

    # Basic check for MDX components (e.g., ensure code blocks are balanced)
    mermaid_starts = len(re.findall(r"```mermaid", content))
    python_starts = len(re.findall(r"```python", content))
    total_code_blocks = content.count("```")

    # Total number of opening code fences (e.g., ```mermaid, ```python)
    total_opening_fences = mermaid_starts + python_starts

    # Total number of closing code fences (generic ```)
    # This assumes that any ``` that is not followed by a language name is a closing fence.
    total_closing_fences = total_code_blocks - total_opening_fences

    if total_opening_fences != total_closing_fences:
        errors.append("Unbalanced code blocks detected. Ensure all '```lang' have a matching '```'.")
    
    # Check for placeholder references
    if "[APA citation for:" in content:
        errors.append("Found placeholder APA citations. Please replace with actual citations.")

    if errors:
        print(f"Validation failed for {file_path}:")
        for error in errors:
            print(f"- {error}")
        return False
    else:
        print(f"Validation passed for {file_path}")
        return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python validate-chapters.py <path_to_chapter.mdx>")
        sys.exit(1)

    chapter_file = sys.argv[1]
    if not validate_chapter(chapter_file):
        sys.exit(1)
