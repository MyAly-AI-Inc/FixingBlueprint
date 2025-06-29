# 3DBlueprint.io Page Layout Style Guide

This document outlines the standard layout structure and styling for category pages on the 3DBlueprint.io website. Follow this guide to ensure consistency across all pages.

## Table of Contents

1. [Page Structure](#page-structure)
2. [Color Scheme](#color-scheme)
3. [Section Layout](#section-layout)
   - [Hero Section](#hero-section)
   - [Introduction Section](#introduction-section)
   - [Core Topics Section](#core-topics-section)
   - [Featured Content Section](#featured-content-section)
   - [Quick Start Guides Section](#quick-start-guides-section)
   - [Call to Action Section](#call-to-action-section)
4. [Typography](#typography)
5. [Spacing](#spacing)
6. [Animations](#animations)
7. [Common Components](#common-components)

## Page Structure

Each category page follows this structure:

1. Hero Section with full-width image and gradient overlay
2. Introduction Section with quote card
3. Core Topics Section with cards
4. Featured Content Section with gradient background
5. Quick Start Guides Section
6. Optional: Additional Content Section (varies by category)
7. Call to Action Section

## Color Scheme

Each category has its own color scheme:

- **Fundamentals**: Blue
- **Design & Modeling**: Green
- **Technical Skills**: Orange
- **Business & Entrepreneurship**: Purple
- **Advanced Topics**: Cyan
- **Resources**: Teal

Common accent colors used across all categories:
- Gold/Amber gradient for buttons, icons, and accents

## Section Layout

### Hero Section

The hero section consists of:

- Full-width image (500px height on mobile, 600px on desktop)
- Gradient overlay that fades from the category color to transparent
- Content positioned at the bottom of the image
- Category label badge with gold icon
- H1 heading in white with drop shadow
- Description text in the category's accent color

\`\`\`jsx
<section className="relative">
  {/* Full-width hero image */}
  <div className="relative h-[500px] md:h-[600px] w-full">
    <Image
      src="/path/to/image.jpg"
      alt="Alt text"
      fill
      className="object-cover"
      priority
    />
    {/* Gradient overlay */}
    <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-{color}-900/95 via-{color}-900/70 to-transparent"></div>
  </div>

  {/* Content overlay */}
  <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-{color}-100/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
          <Icon className="h-3 w-3 text-white" />
          <span className="text-{color}-100 font-medium">Category Label</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          Category Title
        </h1>

        <p className="text-xl text-{color}-100 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
          Category description
        </p>
      </div>
    </div>
  </div>
</section>
\`\`\`

### Introduction Section

The introduction section consists of:

- Two-column layout (7/12 and 5/12 width)
- Left column: Introduction text and pro tip
- Right column: Quote card with author image and quote
- Pro tip with gold icon and left border in the category color

\`\`\`jsx
<section className="max-w-6xl mx-auto mb-20">
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
    {/* Left column - Introduction text */}
    <div className="lg:w-7/12 flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="text-3xl font-bold mb-6 text-{color}-800">
          Introduction Heading
        </h2>
        <p className="text-xl text-{color}-700 leading-relaxed">
          Introduction text
        </p>
      </div>

      <div className="bg-white/90 border border-{color}-200 border-l-{color}-600 border-l-4 rounded-2xl p-6 mt-16">
        <div className="flex gap-4">
          <div className="bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-2 rounded-full shadow-md">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-{color}-800 mb-2">Pro Tip</h3>
            <p className="text-{color}-700">Pro tip text</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right column - Quote Card */}
    <div className="lg:w-5/12">
      <Card className="overflow-hidden h-full border border-{color}-200 shadow-md">
        {/* Photo section */}
        <div className="relative aspect-square w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-{color}-800 to-{color}-900">
            <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-9xl">
              <span aria-hidden="true">A</span>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <CardContent className="p-6 bg-white/90">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-3 rounded-full shadow-md flex-shrink-0">
              <Quote className="h-5 w-5 text-white" />
            </div>
            <div>
              <blockquote className="mb-3">
                <p className="text-lg font-medium italic text-{color}-800 mb-2">
                  "Quote text"
                </p>
                <footer className="text-sm text-{color}-600">
                  <cite>— Author Name</cite>
                </footer>
              </blockquote>
              <p className="text-sm text-{color}-700">
                Additional context
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
\`\`\`

### Core Topics Section

The core topics section consists of:

- Section heading in the category color
- Grid of 4 cards (2 on mobile, 4 on desktop)
- Each card has an image with overlay, title badge, icon, and description
- Gold gradient for icons
- Hover effect that lifts the card slightly

\`\`\`jsx
<section className="mb-20">
  <h2 className="text-3xl font-bold mb-10 text-{color}-800">
    Core Topics
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {topics.map((topic) => (
      <Card className="h-full overflow-hidden border border-{color}-200 hover:border-{color}-300 hover:shadow-md transition-all duration-300">
        <CardContent className="p-0">
          <Link href={topic.href} className="block">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={topic.image || "/placeholder.svg"}
                alt={topic.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-{color}-600">
                  {topic.title}
                </span>
              </div>
            </div>
            <div className="p-6 bg-white/90">
              <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 mb-3 shadow-md">
                <topic.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-{color}-800">{topic.title}</h3>
              <p className="text-sm text-{color}-700 mb-4">{topic.description}</p>
              <div className="flex items-center text-{color}-600 font-medium">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </Link>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
\`\`\`

### Featured Content Section

The featured content section consists of:

- Light background color in the category's accent color
- Two-column layout (1/2 and 1/2 width)
- Left column: Heading, description, list of items with gold icons
- Right column: Featured image or video with play button
- Rounded corners for the entire section

\`\`\`jsx
<section className="mb-20 relative overflow-hidden rounded-3xl bg-{color}-50/50">
  <div className="py-12 px-6 md:p-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-{color}-800">
            Featured Content Heading
          </h2>
          <p className="text-lg text-{color}-700 mb-6">
            Description text
          </p>
          <ul className="space-y-4">
            {items.map((item) => (
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-{color}-800">{item.title}</p>
                  <p className="text-sm text-{color}-600">{item.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button className="bg-{color}-600 hover:bg-{color}-700 text-white">
              Call to Action
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/path/to/image.jpg"
              alt="Featured content"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 flex items-center justify-center cursor-pointer shadow-lg">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
\`\`\`

### Quick Start Guides Section

The quick start guides section consists of:

- Section heading in the category color
- Grid of 4 cards (1 on mobile, 2 on desktop)
- Each card has an icon, title, description, and "Read guide" link
- Gold gradient for icons
- Hover effect that scales the card slightly

\`\`\`jsx
<section className="mb-20">
  <h2 className="text-3xl font-bold mb-10 text-{color}-800">
    Quick Start Guides
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {guides.map((guide) => (
      <Card className="border border-{color}-200 hover:border-{color}-300 bg-white/90 hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 p-3 rounded-xl shadow-md">
              <guide.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2 text-{color}-800">{guide.title}</h3>
              <p className="text-sm text-{color}-700 mb-4">{guide.description}</p>
              <Link
                href={guide.href}
                className="inline-flex items-center text-{color}-600 text-sm font-medium hover:underline"
              >
                Read guide <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
\`\`\`

### Call to Action Section

The call to action section consists of:

- Gradient background in the category color
- Amber/gold border with rounded corners
- Centered content with heading, description, and button
- White button with category color text
- Fade-in animation

\`\`\`jsx
<section className="relative overflow-hidden rounded-3xl">
  <div className="absolute inset-0 bg-gradient-to-r from-{color}-600 to-{color}-700"></div>
  <div className="absolute inset-0 border-2 border-amber-400 rounded-3xl opacity-50"></div>

  <div className="relative z-10 p-12 md:p-16 text-white">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Call to Action Heading
      </h2>
      <p className="text-lg md:text-xl text-{color}-100 mb-8">
        Call to action description
      </p>
      <Button
        size="lg"
        className="bg-white text-{color}-700 hover:bg-{color}-50 border border-amber-300"
      >
        Call to Action Button
      </Button>
    </div>
  </div>
</section>
\`\`\`

## Typography

- **H1 (Hero)**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **H2 (Section)**: `text-3xl font-bold`
- **H3 (Card Title)**: `text-lg font-bold`
- **Body**: `text-base`
- **Body Large**: `text-lg`
- **Body Small**: `text-sm`
- **Quote**: `text-lg font-medium italic`

## Spacing

- **Section Margin**: `mb-20`
- **Subsection Margin**: `mb-10`
- **Paragraph Margin**: `mb-6`
- **Item Margin**: `mb-4`
- **Container Padding**: `px-4 py-16`
- **Card Padding**: `p-6`
- **Button Padding**: `px-4 py-2`

## Animations

- **Fade In**: Opacity 0 to 1
- **Fade In Up**: Opacity 0 to 1 and Y 20px to 0
- **Staggered Children**: Delay each child by 0.1s
- **Hover Scale**: Scale 1 to 1.02 or 1.05
- **Hover Lift**: Y 0 to -5px

## Common Components

- **Card**: White background with category color border
- **Button**: Category color background with white text
- **Icon**: Gold gradient background with white icon
- **Badge**: White background with category color text
- **Quote Card**: White background with quote icon and text
