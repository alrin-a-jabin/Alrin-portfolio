import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SkillBadge from '@/components/ui/SkillBadge';

/**
 * Component Library Showcase
 * 
 * This file demonstrates all available components and their variants.
 * Use this as a reference for implementing consistent designs.
 */

// Button Examples
export const ButtonShowcase = () => (
  <div className="space-y-8 p-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Buttons</h2>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="gradient">Gradient Button</Button>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" size="xl">Extra Large</Button>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" isLoading>Loading...</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="gradient" fullWidth>Full Width</Button>
        </div>
      </div>
    </div>
  </div>
);

// Card Examples
export const CardShowcase = () => (
  <div className="space-y-8 p-8 bg-gray-50">
    <div>
      <h2 className="text-2xl font-bold mb-4">Cards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card variant="default">
          <h3 className="text-xl font-bold mb-2">Default Card</h3>
          <p className="text-gray-600">
            Standard card with subtle shadow and clean design.
          </p>
        </Card>
        
        <Card variant="elevated">
          <h3 className="text-xl font-bold mb-2">Elevated Card</h3>
          <p className="text-gray-600">
            Enhanced shadow for more prominence.
          </p>
        </Card>
        
        <Card variant="bordered">
          <h3 className="text-xl font-bold mb-2">Bordered Card</h3>
          <p className="text-gray-600">
            Clean border design with hover effects.
          </p>
        </Card>
        
        <Card variant="glass">
          <h3 className="text-xl font-bold mb-2">Glass Card</h3>
          <p className="text-gray-600">
            Modern glassmorphism effect with blur.
          </p>
        </Card>
        
        <Card variant="gradient">
          <h3 className="text-xl font-bold mb-2">Gradient Card</h3>
          <p className="text-gray-600">
            Subtle gradient background for emphasis.
          </p>
        </Card>
        
        <Card variant="elevated" hover glow>
          <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
          <p className="text-gray-600">
            With hover lift and glow effects.
          </p>
        </Card>
      </div>
    </div>
  </div>
);

// Badge Examples
export const BadgeShowcase = () => (
  <div className="space-y-8 p-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Badges</h2>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="gray">Gray</Badge>
          <Badge variant="gradient">Gradient</Badge>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" size="md">Medium</Badge>
          <Badge variant="primary" size="lg">Large</Badge>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary" dot>With Dot</Badge>
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="error" dot>Offline</Badge>
        </div>
      </div>
    </div>
  </div>
);

// Skill Badge Examples
export const SkillBadgeShowcase = () => (
  <div className="space-y-8 p-8 bg-gray-50">
    <div>
      <h2 className="text-2xl font-bold mb-4">Skill Badges</h2>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <SkillBadge skill="React" level="expert" />
          <SkillBadge skill="TypeScript" level="advanced" />
          <SkillBadge skill="Node.js" level="intermediate" />
          <SkillBadge skill="GraphQL" level="beginner" />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <SkillBadge skill="Next.js" />
          <SkillBadge skill="Tailwind CSS" />
          <SkillBadge skill="PostgreSQL" />
          <SkillBadge skill="AWS" />
        </div>
      </div>
    </div>
  </div>
);

// Typography Examples
export const TypographyShowcase = () => (
  <div className="space-y-8 p-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Typography</h2>
      
      <div className="space-y-4">
        <div>
          <h1 className="text-7xl font-bold">Heading 1 - 7xl</h1>
          <h2 className="text-6xl font-bold">Heading 2 - 6xl</h2>
          <h3 className="text-5xl font-bold">Heading 3 - 5xl</h3>
          <h4 className="text-4xl font-bold">Heading 4 - 4xl</h4>
          <h5 className="text-3xl font-bold">Heading 5 - 3xl</h5>
          <h6 className="text-2xl font-bold">Heading 6 - 2xl</h6>
        </div>
        
        <div>
          <p className="text-xl">Large body text - xl</p>
          <p className="text-lg">Medium body text - lg</p>
          <p className="text-base">Regular body text - base</p>
          <p className="text-sm">Small text - sm</p>
          <p className="text-xs">Extra small text - xs</p>
        </div>
        
        <div>
          <p className="font-light">Light weight - 300</p>
          <p className="font-normal">Normal weight - 400</p>
          <p className="font-medium">Medium weight - 500</p>
          <p className="font-semibold">Semibold weight - 600</p>
          <p className="font-bold">Bold weight - 700</p>
          <p className="font-extrabold">Extrabold weight - 800</p>
        </div>
        
        <div>
          <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl font-bold">
            Gradient Text Example
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Color Palette
export const ColorShowcase = () => (
  <div className="space-y-8 p-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Primary Colors</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="h-24 bg-blue-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Blue 600</p>
              <p className="text-xs text-gray-600">#3b82f6</p>
            </div>
            <div className="flex-1">
              <div className="h-24 bg-blue-700 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Blue 700</p>
              <p className="text-xs text-gray-600">#2563eb</p>
            </div>
            <div className="flex-1">
              <div className="h-24 bg-blue-100 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Blue 100</p>
              <p className="text-xs text-gray-600">#dbeafe</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Secondary Colors</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="h-24 bg-purple-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Purple 600</p>
              <p className="text-xs text-gray-600">#8b5cf6</p>
            </div>
            <div className="flex-1">
              <div className="h-24 bg-purple-700 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Purple 700</p>
              <p className="text-xs text-gray-600">#7c3aed</p>
            </div>
            <div className="flex-1">
              <div className="h-24 bg-purple-100 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Purple 100</p>
              <p className="text-xs text-gray-600">#ede9fe</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Semantic Colors</h3>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="h-24 bg-green-500 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Success</p>
              <p className="text-xs text-gray-600">#10b981</p>
            </div>
            <div className="flex-1">
              <div className="h-24 bg-yellow-500 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Warning</p>
              <p className="text-xs text-gray-600">#f59e0b</p>
            </div>
            <div className="flex-1">
              <div className="h-24 bg-red-500 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Error</p>
              <p className="text-xs text-gray-600">#ef4444</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Gray Scale</h3>
          <div className="flex gap-2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div key={shade} className="flex-1">
                <div className={`h-16 bg-gray-${shade} rounded mb-1`}></div>
                <p className="text-xs text-center">{shade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Shadow Examples
export const ShadowShowcase = () => (
  <div className="space-y-8 p-8 bg-gray-50">
    <div>
      <h2 className="text-2xl font-bold mb-4">Shadows</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <div className="h-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="text-sm font-medium">Small</span>
          </div>
        </div>
        <div>
          <div className="h-32 bg-white rounded-lg shadow-md flex items-center justify-center">
            <span className="text-sm font-medium">Medium</span>
          </div>
        </div>
        <div>
          <div className="h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-sm font-medium">Large</span>
          </div>
        </div>
        <div>
          <div className="h-32 bg-white rounded-lg shadow-xl flex items-center justify-center">
            <span className="text-sm font-medium">Extra Large</span>
          </div>
        </div>
        <div>
          <div className="h-32 bg-white rounded-lg shadow-2xl flex items-center justify-center">
            <span className="text-sm font-medium">2XL</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Export all showcases
const ComponentShowcase = {
  ButtonShowcase,
  CardShowcase,
  BadgeShowcase,
  SkillBadgeShowcase,
  TypographyShowcase,
  ColorShowcase,
  ShadowShowcase,
};

export default ComponentShowcase;
