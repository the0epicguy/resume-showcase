

# Update Achievements: Add New Certifications + Pause on Hover

## Current vs New

**Already exists** (will update years to match your dates):
- Hackathon Finalist (keep as-is)
- Generative AI Explained - NVIDIA (Oct 2025)
- An Even Easier Introduction to CUDA - NVIDIA (Oct 2025)
- Planning a Machine Learning Project - AWS (Dec 2025)
- AWS Foundations: Machine Learning Basics - AWS (Dec 2025)
- An Introduction to Social Work Basics - Alison (Sep 2025)

**Split existing combined Tabla entry** into individual certs:
- Prarambhik (Apr 2016)
- Praveshika Pratham (Apr 2017)
- Praveshika Purna (Apr 2018)
- Madhyama Pratham (Apr 2022)
- Madhyama Purna (Apr 2023)

**Brand new additions**:
- PCEP - Certified Entry-Level Python Programmer - Python Institute (Jan 2026)
- Building a Machine Learning Ready Organization - AWS (Jan 2026)

## Pause on Hover

Add `isPaused` state; pause the auto-rotate interval on `mouseEnter`, resume on `mouseLeave`.

## File Changes

| File | Change |
|------|--------|
| `src/components/AchievementsSection.tsx` | Update achievements array (split Tabla, add 2 new certs, fix years), add hover-to-pause |

