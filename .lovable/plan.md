

# Projects Section Redesign: Tabbed Categories + Featured Expandable

A combined approach that organizes projects into **Completed** and **In Progress** tabs, with featured projects shown prominently and a "View All" expansion for additional projects.

---

## How It Will Work

### Visual Layout

```text
┌─────────────────────────────────────────────────────────┐
│  Projects                                               │
│  Interactive showcase of recent work...                 │
│                                                         │
│  ┌──────────────┐ ┌──────────────┐                      │
│  │  Completed   │ │ In Progress  │  ← Tabbed navigation │
│  └──────────────┘ └──────────────┘                      │
│                                                         │
│  Featured Projects (2x2 grid)                           │
│  ┌─────────────┐ ┌─────────────┐                        │
│  │ EchoPath    │ │ Smart Waste │  ← First 4 shown      │
│  └─────────────┘ └─────────────┘                        │
│  ┌─────────────┐ ┌─────────────┐                        │
│  │ Code a Block│ │ Portfolio   │                        │
│  └─────────────┘ └─────────────┘                        │
│                                                         │
│        ┌─────────────────────┐                          │
│        │   View All (12)     │  ← Expands to show more │
│        └─────────────────────┘                          │
└─────────────────────────────────────────────────────────┘
```

### User Experience

1. **Default View**: Shows 4 featured projects in a 2x2 grid
2. **Tabs**: Switch between "Completed" and "In Progress" projects
3. **View All Button**: Expands to show remaining projects with smooth animation
4. **Collapse Button**: Returns to featured-only view

---

## Data Structure Changes

Each project will have a new `status` field:

| Field | Values | Purpose |
|-------|--------|---------|
| `status` | `'completed'` or `'in-progress'` | Determines which tab it appears in |
| `featured` | `true` or `false` | Whether shown in initial view |

---

## Implementation Steps

### Step 1: Update Project Data Structure

Add `status` and `featured` fields to existing projects:
- EchoPath: `status: 'in-progress'`, `featured: true`
- Smart Waste Management: `status: 'completed'`, `featured: true`
- Code a Block: `status: 'completed'`, `featured: true`
- Interactive Portfolio: `status: 'in-progress'`, `featured: true`

### Step 2: Add Tab Navigation

Import and use the existing Radix UI Tabs component with custom styling to match the glass aesthetic of the site.

### Step 3: Implement Expandable Logic

- Add state to track if "View All" is expanded
- Filter projects by status and featured status
- Show first 4 featured projects by default
- "View All" button reveals remaining projects with animation

### Step 4: Add Animations

- Smooth height transition when expanding/collapsing
- Staggered fade-in for newly revealed projects
- Tab transition animations using Framer Motion

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/ProjectsSection.tsx` | Complete rewrite with tabs, expansion logic, and new data structure |

---

## Future-Proofing

This structure makes it easy to:
- Add new projects with just a data entry (no layout changes needed)
- Mark projects as in-progress and move to completed later
- Feature specific projects by setting `featured: true`
- Scale to dozens of projects without cluttering the page

---

## Technical Details

### Dependencies Used
- `@radix-ui/react-tabs` - Already installed
- `framer-motion` - Already installed for animations
- `lucide-react` - For expand/collapse icons

### Component Structure
```text
ProjectsSection
├── Tabs (Radix UI)
│   ├── TabsList
│   │   ├── TabsTrigger "Completed"
│   │   └── TabsTrigger "In Progress"
│   └── TabsContent (for each tab)
│       ├── Featured Grid (4 projects)
│       ├── AnimatePresence (for expansion)
│       │   └── Remaining Projects Grid
│       └── View All / Collapse Button
```

### State Management
- `activeTab`: Current tab ("completed" or "in-progress")
- `isExpanded`: Whether showing all projects or just featured

