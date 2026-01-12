# Contributing to Ayno UI

Thank you for your interest in contributing to Ayno UI! This guide provides everything you need to get started.

## Code of Conduct

- Be respectful and inclusive
- Welcome diverse perspectives
- Help others learn
- Report issues privately if needed

## Getting Started

### 1. Fork & Clone

```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/polyglot
cd polyglot/Ayno_UI/Ayno_UI
```

### 2. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

**Branch naming:**
- `feature/add-dashboard` - New feature
- `fix/button-styling` - Bug fix
- `docs/api-guide` - Documentation
- `refactor/component-cleanup` - Refactoring
- `perf/optimize-rendering` - Performance

### 3. Setup Environment

```bash
npm install
npm run dev
```

## Development Workflow

### Code Style

**TypeScript**
```typescript
// Use strict mode
"strict": true

// Explicit types
function greet(name: string): string {
  return `Hello, ${name}`
}

// Avoid `any`
const data: Record<string, unknown> = {}
```

**React Components**
```typescript
// Named exports for components
export function MyComponent({ prop }: Props) {
  return <div>{prop}</div>
}

// Props interface
interface MyComponentProps {
  title: string
  onClick?: () => void
  children: React.ReactNode
}

// Functional components with hooks
export function MyComponent() {
  const [state, setState] = useState<string>('')
  
  return <div>{state}</div>
}
```

**Tailwind CSS**
```typescript
// Prefer utility classes
<button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600">
  Click me
</button>

// Use cn() for conditional classes
<div className={cn(
  'base classes',
  isActive && 'active-classes'
)}>
  Content
</div>

// Avoid inline styles
// ❌ style={{ color: 'red' }}
// ✅ className="text-red-500"
```

**File Organization**
```
components/
  ├── my-feature/           # Feature folder
  │   ├── my-feature.tsx    # Main component
  │   ├── sub-component.tsx # Sub components
  │   └── types.ts          # TypeScript interfaces
  └── utils/
      └── helpers.ts        # Utility functions
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: correct button alignment"
git commit -m "docs: update API guide"
git commit -m "refactor: simplify header component"
git commit -m "style: format code with prettier"
git commit -m "test: add button component tests"
git commit -m "chore: update dependencies"
```

### Before Pushing

```bash
# Run linter
npm run lint

# Fix formatting
npm run lint -- --fix

# Type check
npx tsc --noEmit

# Build to check for errors
npm run build

# Manual testing
npm run dev  # Test in browser
```

## Creating Features

### New Component

1. **Create component file** with TypeScript:

```typescript
// components/my-component.tsx
import { ReactNode } from 'react'

export interface MyComponentProps {
  title: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function MyComponent({
  title,
  children,
  variant = 'primary'
}: MyComponentProps) {
  return (
    <div className={`p-4 rounded-lg ${
      variant === 'primary' 
        ? 'bg-blue-500 text-white'
        : 'bg-gray-100 text-gray-900'
    }`}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

2. **Export from barrel file**:

```typescript
// components/index.ts
export { MyComponent, type MyComponentProps } from './my-component'
```

3. **Use in page/component**:

```typescript
import { MyComponent } from '@/components'

export function HomePage() {
  return (
    <MyComponent title="Welcome" variant="primary">
      <p>Hello world</p>
    </MyComponent>
  )
}
```

### New Page

1. **Create file** in `app/`:

```bash
mkdir app/new-page
touch app/new-page/page.tsx
```

2. **Add content**:

```typescript
// app/new-page/page.tsx
export const metadata = {
  title: 'New Page',
  description: 'Page description'
}

export default function NewPage() {
  return <main>Content</main>
}
```

3. **Access at** `http://localhost:3000/new-page`

### Add UI Component

```bash
# Install from shadcn/ui
npx shadcn-ui@latest add [component-name]
```

**Available components:**
- Button, Checkbox, Input, Select, Textarea
- Dialog, Dropdown Menu, Popover
- Card, Tabs, Accordion
- Toast, Alert, Progress
- And 20+ more!

### Update Styles

Edit `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#b8860b',
        secondary: '#00d9ff'
      },
      spacing: {
        '128': '32rem'
      }
    }
  }
}
```

## Testing

### Manual Testing

1. **Run dev server**:
```bash
npm run dev
```

2. **Test in browser**:
   - Visit http://localhost:3000
   - Check desktop and mobile
   - Test dark/light mode
   - Test interactions

3. **Check console**:
   - Look for errors
   - Check warnings
   - Verify no memory leaks

### Automated Testing (Future)

```bash
# When tests are set up
npm run test
npm run test -- --watch
npm run test -- --coverage
```

## Documentation

### Update README

If changing features or setup, update `README.md`:

```markdown
## My New Feature

Brief description of feature.

### Usage

```typescript
import { MyFeature } from '@/components'

<MyFeature />
```
```

### Add to ARCHITECTURE.md

For significant changes to architecture, document:
- What changed
- Why it changed
- How it affects the system

### Inline Code Comments

Comment only complex logic:

```typescript
// ✅ Good - explains the why
// Debounce to avoid excessive re-renders during rapid typing
const debouncedSearch = useCallback(
  debounce((value: string) => setQuery(value), 300),
  []
)

// ❌ Bad - obvious from code
// Set loading to true
setLoading(true)
```

## Pull Request Process

### 1. Push Your Branch

```bash
git push origin feature/your-feature-name
```

### 2. Create Pull Request

On GitHub:
- **Title**: Short, descriptive (e.g., "Add dark mode toggle")
- **Description**: Use template below
- **Labels**: Add relevant labels

### PR Description Template

```markdown
## Description
Brief description of changes.

## Related Issues
Closes #123

## Type of Change
- [x] New feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Style change
- [ ] Refactor

## Changes Made
- Item 1
- Item 2

## Testing
Describe how you tested this:
- Manual testing on desktop
- Manual testing on mobile
- Browser dev tools check

## Checklist
- [x] Code follows style guide
- [x] TypeScript compiles (`npm run build`)
- [x] No console errors/warnings
- [x] Documentation updated
- [x] Tested on Chrome/Firefox/Safari
- [x] Mobile responsive
```

### 3. Code Review

- Respond to reviewer comments
- Make requested changes
- Commit with descriptive messages
- Request re-review when done

### 4. Merge

Once approved:
- Squash commits if needed
- Delete branch after merge
- Verify deployment success

## Common Tasks

### Adding Dependencies

```bash
# Add new dependency
npm install new-package

# Update all dependencies
npm update

# Check for outdated packages
npm outdated
```

**Before committing:**
- Verify it doesn't break existing code
- Check bundle size impact
- Test in production build

### Fixing TypeScript Errors

```bash
# Find all errors
npx tsc --noEmit

# Generate types
npm run build
```

### Improving Performance

Profile before/after:
1. Open DevTools → Performance tab
2. Record interaction
3. Analyze flame graph
4. Make optimization
5. Verify improvement

## Style Guide

### Naming Conventions

**Components**: PascalCase
```typescript
export function MyComponent() {}
```

**Functions**: camelCase
```typescript
export function getChannelHistory() {}
```

**Constants**: UPPER_SNAKE_CASE
```typescript
const MAX_RETRIES = 3
```

**CSS Classes**: kebab-case
```typescript
className="my-component-title"
```

### Component Props

**Keep props shallow:**
```typescript
// ✅ Good - specific props
<Button label="Click" onClick={handleClick} />

// ❌ Bad - spreading unknown props
<Button {...buttonConfig} />
```

**Document complex props:**
```typescript
interface HeaderProps {
  /** Navigation items to display */
  items: NavItem[]
  /** Callback when item is clicked */
  onItemClick?: (item: NavItem) => void
  /** Whether header is sticky */
  sticky?: boolean
}
```

## Performance Guidelines

### Don't

```typescript
// ❌ Unnecessary re-renders
function List({ items }: Props) {
  return items.map((item) => (
    <Component key={Math.random()} item={item} />
  ))
}

// ❌ Large inline objects
<Component config={{ a: 1, b: 2, c: 3, ... }} />

// ❌ Function creation on every render
<Component onClick={() => handleClick()} />
```

### Do

```typescript
// ✅ Stable keys
function List({ items }: Props) {
  return items.map((item) => (
    <Component key={item.id} item={item} />
  ))
}

// ✅ Memoize objects
const config = useMemo(() => ({ a: 1, b: 2, c: 3 }), [])
<Component config={config} />

// ✅ Memoize functions
const handleClick = useCallback(() => {
  // handler
}, [])
<Component onClick={handleClick} />
```

## Accessibility

All components should be:

- **Keyboard accessible**: Tab through all interactive elements
- **Screen reader friendly**: Use semantic HTML and ARIA
- **Color contrast**: WCAG AA minimum (4.5:1 for text)
- **Focus visible**: Clear focus indicators

```typescript
// ✅ Accessible
<button
  className="focus:outline-none focus:ring-2 focus:ring-blue-500"
  aria-label="Toggle menu"
>
  {/* content */}
</button>

// ❌ Not accessible
<div onClick={handleClick} className="cursor-pointer">
  Menu
</div>
```

## Questions or Issues?

- Check existing issues and discussions
- Review [README.md](./README.md)
- Ask in pull request comments
- Create a discussion for questions

## Recognition

Contributors will be listed in:
- CONTRIBUTORS.md
- Release notes
- GitHub acknowledgments

Thank you for contributing!
