# Himadri Content Hub

https://github.com/trackerbhai963-beep/capture-content-craft
DOWNLOAD IT AND THIS IS THE Update the existing Himadri Creation website. Do NOT rebuild the website from scratch and do NOT break any existing functionality.

This is a continuation of the existing website. Preserve the current design language, pages, components, navigation, responsive behavior and existing functionality.

PART 1 — FIX BLOG PAGE HEADER

The Blog page currently has a different upper navigation/header from the Home page.

Required fix

The Blog page upper task bar/header must be EXACTLY the same as the Home page header.

Use the existing Home page navbar/header component as the single source of truth.

Do NOT create a separate Blog navbar.

The Blog page must use exactly the same:

Header width

Header height

Rounded/pill-shaped container

Logo

Logo size

Logo position

Himadri Creation branding

"MEMORYCRAFTED SINCE 2018" tagline

Decorative separator lines

Navigation spacing

Font family

Font size

Font weight

Letter spacing

Colors

Background

Border

Shadow

Blur effects

Border radius

Padding

Book Now button

Button dimensions

Button typography

Button hover effect

Responsive behavior

Active navigation

When the user is on the Blog page:

Keep the entire navbar identical to Home.

ONLY change the active navigation item from Home to Blog.

Blog should receive the same active underline/highlight style that Home receives on the Home page.

There must be no visual jump, resizing or different navbar height when navigating:

Home → Blog

Do not modify the Blog content itself as part of this fix.

PART 2 — FIX HOME PAGE HERO FONT

On the Home page, change ONLY the main hero heading:

"Capture Your Beautiful Moments With Himadri Creation"

The current font is too thin/light.

Change it to match the typography style of the second reference screenshot.

The desired style is:

Very bold

Heavy

Modern

Editorial

Premium

Strong visual presence

Clean sans-serif

ExtraBold/Black appearance

Use approximately:

Font weight: 800–900

Tight letter spacing

Tight line height approximately 0.85–0.95

The heading should visually resemble the heavy bold typography in the second reference.

Keep the existing wording.

The heading can wrap naturally according to the existing hero layout.

Do NOT change:

Hero background

Camera image

Drone image

Wedding Moments badge

Gold category text

Paragraph

Navbar

Hero colors

Existing hero positioning

ONLY update the heading typography.

Make sure the font remains responsive on desktop, tablet and mobile.

PART 3 — CREATE CAREER & TEAM JOINING PAGE

Create a new professional page:

Career & Team Joining

Suggested route:

/careers

The purpose of this page is to allow photographers, videographers, editors, drone pilots, designers, social-media creators, coordinators, freelancers, interns and other creative professionals to apply to join the Himadri Creation team.

The page must feel like a natural part of the existing Himadri Creation website.

Career Hero

Create a premium hero section containing:

Heading

JOIN THE HIMADRI CREATION TEAM

Subtitle

Create. Capture. Collaborate. Grow with Himadri Creation.

Description

"We are always looking for talented photographers, cinematographers, editors, designers, creators and event professionals to join our growing creative team."

Add a prominent:

APPLY NOW

button.

The button should smoothly scroll to/open the application form.

PART 4 — AVAILABLE CAREER CATEGORIES

Create premium responsive cards with icons.

Photography

Photographer

Candid Photographer

Wedding Photographer

Event Photographer

Videography & Cinematography

Videographer

Cinematographer

Wedding Film Shooter

Camera Operator

Photo Editing

Photo Editor

Photoshop Retoucher

Lightroom Editor

Wedding Album Designer

Video Editing

Video Editor

Wedding Film Editor

Reels / Shorts Editor

Color Grading Artist

Drone & Aerial

Drone Pilot

Aerial Cinematographer

FPV Drone Pilot

Creative & Design

Graphic Designer

Motion Graphics Designer

VFX / CGI Artist

Thumbnail Designer

Social Media & Content

Social Media Manager

Content Creator

Instagram / Reels Creator

YouTube Content Creator

Client & Event Management

Client Coordinator

Booking Executive

Event Coordinator

Sales / Client Relationship Executive

Freelance / Project Based

Freelance Photographer

Freelance Videographer

Freelance Editor

Freelance Designer

Freelance Drone Pilot

Other Creative Professional

Internship / Fresher

Photography Intern

Videography Intern

Editing Intern

Graphic Design Intern

Social Media Intern

Digital Marketing Intern

Use clean cards, subtle hover animations, rounded corners and the existing Himadri Creation color palette.

PART 5 — CAREER APPLICATION FORM

When the visitor clicks APPLY NOW, show a professional application form.

Required fields:

Full Name *

WhatsApp Number *

Email Address

Current City *

Select Category *

Select Position *

Work Type *

Experience *

Skills / Specialization *

Camera / Equipment Available

Editing Software / Tools

Portfolio Link

Instagram Link

YouTube Link

Expected Salary / Per-Day Rate

Availability

Short Introduction / Why do you want to join Himadri Creation?

Work Type options

Full Time

Part Time

Freelance

Project Based

Internship

Experience options

Fresher

0–1 Year

1–3 Years

3–5 Years

5+ Years

Add an optional:

Resume / Portfolio Upload

field if supported by the current application/backend architecture.

PART 6 — FORM VALIDATION

Required fields must not be allowed to submit when empty.

Add clear validation messages.

Validate:

WhatsApp/mobile number

Email address when supplied

Portfolio/Instagram/YouTube URLs when supplied

Prevent duplicate accidental submissions where appropriate.

After successful validation, prepare the application information for WhatsApp.

PART 7 — WHATSAPP APPLICATION FLOW

The complete flow must be:

Fill Form → Validate → Submit → Prepare WhatsApp Message → Open WhatsApp

Do NOT open a blank WhatsApp chat.

The WhatsApp message must already contain the applicant's information.

IMPORTANT:

Do NOT invent or hard-code a WhatsApp number.

Use the existing official Himadri Creation WhatsApp number already configured somewhere in the website/project.

If there is an existing WhatsApp button, contact configuration, environment variable, site settings file or contact data, reuse exactly the same number.

Do not create a different number.

Generate a properly URL-encoded WhatsApp message.

Use this structure:

Hello Himadri Creation 👋

I would like to join the Himadri Creation team.

Name: [Full Name]
WhatsApp: [WhatsApp Number]
City: [City]
Category: [Category]
Position: [Position]
Work Type: [Work Type]
Experience: [Experience]
Skills: [Skills]
Portfolio: [Portfolio Link]
Instagram: [Instagram Link]
YouTube: [YouTube Link]

Short Introduction:
[Introduction]

I have submitted my application through the Himadri Creation Career page. Please let me know about the next steps.

Thank you,
[Full Name]

Make sure spaces, line breaks, emojis and special characters are URL encoded correctly.

PART 8 — CAREER SUCCESS SCREEN

After the application is successfully processed, show:

Application Ready! 🎉

"Your application details have been prepared. Continue to WhatsApp to send your application to the Himadri Creation team."

Add:

CONTINUE TO WHATSAPP →

The user should be able to review the process and then continue to WhatsApp.

PART 9 — CAREER PROCESS INDICATOR

Show a simple visual process:

01 — Choose Your Role
↓
02 — Fill Your Details
↓
03 — Submit Application
↓
04 — Continue on WhatsApp

Make this responsive and visually consistent with the Himadri Creation design.

PART 10 — ADMIN BLOG MANAGEMENT PAGE

Create a protected Admin Blog Management section.

Suggested route:

/admin/blog

The purpose is to allow the Himadri Creation administrator to create, edit, publish and manage Blog posts without manually editing website source code.

The Admin Blog page should include:

Dashboard

Show:

Total Blogs

Published Blogs

Draft Blogs

Recently Updated Blogs

Blog list

Display existing posts in a professional admin table/card layout.

Each post should show:

Featured image

Title

Slug

Category

Status

Published date

Last updated

Edit button

Preview button

Publish/Unpublish button

Delete button

Add:

+ CREATE NEW BLOG

PART 11 — ADMIN BLOG EDITOR

Create a professional Blog Editor.

Fields:

Blog Title *

URL Slug *

Short Description / Excerpt

Category

Author

Featured Image

Blog Content *

SEO Title

SEO Description

SEO Keywords

Published / Draft status

Published Date

The editor should support:

Headings

Paragraphs

Bold

Italic

Links

Lists

Images

Quotes

Proper spacing

Preview

Provide:

SAVE DRAFT

PUBLISH BLOG

PREVIEW

buttons.

PART 12 — BLOG FRONTEND CONNECTION

When an admin publishes a blog:

The published blog must automatically appear on the public Blog page.

The public Blog page should show:

Featured image

Blog title

Excerpt

Category

Published date

Read More button

Clicking the post should open its individual blog page.

Example:

/blog/[slug]

The existing Blog page design must remain consistent with the Himadri Creation website.

PART 13 — GITHUB BLOG STORAGE / API

Connect the Admin Blog system properly to the existing GitHub repository using the GitHub REST API and a Fine-grained Personal Access Token.

IMPORTANT SECURITY REQUIREMENT:

The GitHub Personal Access Token must NEVER be exposed in:

Frontend JavaScript

React components

Browser localStorage

Browser sessionStorage

Public environment variables

HTML

Client-side API calls

GitHub repository source code

The GitHub token must be stored as a server-side secret/environment variable.

The frontend must communicate with a secure backend/serverless function/API endpoint.

Architecture:

Admin Blog UI
→ Secure Server/API Function
→ GitHub REST API
→ GitHub Repository

Do NOT call GitHub's authenticated API directly from the browser.

PART 14 — GITHUB TOKEN

I will provide a GitHub Fine-grained Personal Access Token separately.

When I provide the token, treat it as a secret.

Do NOT print the token back to me.

Do NOT place the token directly into source code.

Do NOT commit it to GitHub.

Do NOT expose it through client-side environment variables.

Store it using the platform's secure secret/environment-variable system.

Use a server-side variable such as:

GITHUB_TOKEN

or the existing secure secret configuration if the project already has one.

PART 15 — GITHUB REPOSITORY CONFIGURATION

Do not invent repository information.

First inspect the existing project configuration for:

GitHub repository owner

Repository name

Branch

Existing GitHub integration

Existing environment variables

Existing backend/serverless functions

If repository information already exists, reuse it.

If configuration is missing, create a clean configuration using secure environment variables such as:

GITHUB_TOKEN

GITHUB_OWNER

GITHUB_REPO

GITHUB_BRANCH

Do not hard-code sensitive credentials.

PART 16 — GITHUB FINE-GRAINED TOKEN PERMISSIONS

Use the minimum permissions required.

The token should have repository access only to the required Himadri Creation repository.

Use the minimum repository permissions necessary for the blog system, such as appropriate Contents permissions for reading/writing blog files.

Do not request unnecessary permissions such as:

Administration

Organization management

User management

Actions administration

Secrets administration

Full account access

Only request the permissions required for the blog repository workflow.

PART 17 — BLOG DATA STORAGE IN GITHUB

Use a clean predictable structure inside the repository.

For example:

/content/blog/

for blog content.

And:

/public/blog/

or the existing project asset structure for blog images, depending on the current project architecture.

Do NOT blindly create duplicate systems.

First inspect how the current project handles blog content and images.

If an existing content structure exists, reuse it.

Each blog should have a stable slug and structured metadata.

Example conceptual structure:

title

slug

excerpt

category

author

featuredImage

publishedAt

status

seoTitle

seoDescription

content

The exact implementation can use the project's existing preferred format such as Markdown, JSON, MDX or another content system.

PART 18 — GITHUB BLOG OPERATIONS

The secure backend must support:

Create Blog

Admin creates a blog → backend validates → backend commits/updates the blog content in GitHub.

Update Blog

Admin edits an existing blog → backend updates the corresponding GitHub file.

Publish Blog

Admin selects Publish → blog status becomes published → GitHub content is updated.

Draft Blog

Admin saves without publishing → content remains a draft and does not appear on the public Blog page.

Delete Blog

Admin confirms deletion → backend removes the corresponding blog content/assets safely.

Read Blogs

Admin dashboard reads the blog content from the configured source/repository.

Handle GitHub API errors properly.

Show useful admin messages such as:

"Blog saved successfully."

"Blog published successfully."

"Unable to connect to GitHub."

"GitHub authentication failed."

"Repository not found."

"Permission denied."

"Blog could not be updated."

Do not expose raw access tokens or sensitive API responses to the user.

PART 19 — GITHUB API SECURITY

All GitHub API requests requiring authentication must happen server-side.

Use the GitHub REST API with the secure token.

Never do something like:

fetch("https://api.github.com/...", { Authorization: "Bearer TOKEN" })

inside a frontend React/browser component.

Instead:

Frontend:

POST /api/admin/blog

Backend:

GitHub API

This is extremely important.

PART 20 — ADMIN ACCESS

The Admin Blog page must NOT be publicly accessible.

Protect:

/admin/blog

and all admin API endpoints.

Do not rely only on hiding the admin link.

The server/backend must also verify admin authorization before allowing:

Create

Update

Publish

Delete

GitHub write operations

Reuse the project's existing authentication/admin system if one already exists.

Do NOT replace an existing authentication system unnecessarily.

If there is no admin authentication system, create a secure minimal admin authentication flow appropriate for the current project architecture.

Never put admin credentials in frontend source code.

PART 21 — NAVIGATION

Add a suitable way for the administrator to reach the Admin Blog dashboard.

Do NOT expose an obvious public "Admin" button in the main customer navbar unless the existing website already uses one.

The public navigation should remain:

Home
About
Services
Gallery
Packages
Blog
Contact
Book Now

Add the Career page in an appropriate location without destroying the existing navigation design.

PART 22 — CAREER PAGE NAVIGATION

The Career / Team Joining page must use the SAME exact header/navbar as the Home page.

Do not create another header design.

The Career page should look like a natural extension of the website.

PART 23 — FOOTER

Use the existing Himadri Creation footer on:

Career page

Blog page

Individual blog page

Other new pages

Do not create an unrelated footer.

PART 24 — RESPONSIVE DESIGN

Everything must work properly on:

Desktop

Laptop

Tablet

Mobile

Pay special attention to:

Home hero heading

Navbar

Blog cards

Blog editor

Career cards

Career form

Admin dashboard

Admin blog editor

No horizontal overflow.

No broken navigation.

No overlapping content.

PART 25 — DO NOT BREAK EXISTING WEBSITE

Before making changes, inspect the existing project structure and reuse existing components wherever possible.

Do NOT:

Rebuild the website unnecessarily

Replace working pages

Remove existing content

Remove existing images

Change existing contact information

Change the existing WhatsApp number

Break existing routes

Break Book Now

Break Contact

Break Gallery

Break Packages

Break Services

Break About

Break Blog functionality

Remove existing responsive behavior

Make the changes incrementally.

FINAL QUALITY CHECK

Before finishing, verify all of the following:

Home

Home navbar remains unchanged.

Hero heading uses the new bold typography.

Hero layout remains correct.

Blog

Blog navbar is EXACTLY the same as Home.

Blog active state is correct.

Existing Blog content still works.

Published posts appear automatically.

Career

Career page exists.

All categories are available.

Application form works.

Required-field validation works.

WhatsApp message is generated correctly.

Existing official WhatsApp number is reused.

No blank WhatsApp redirect.

Admin Blog

Admin page is protected.

Admin can create blogs.

Admin can edit blogs.

Admin can save drafts.

Admin can publish blogs.

Admin can preview blogs.

Admin can delete blogs.

Published blogs appear on the public Blog page.

GitHub

Fine-grained GitHub token is stored securely.

Token is NEVER exposed to browser/client code.

GitHub operations happen through secure server/API functions.

Repository/owner/branch configuration is not invented.

Existing GitHub configuration is reused where available.

Proper error handling is implemented.

Only minimum required GitHub permissions are used.

Overall

The website should feel like one cohesive, premium Himadri Creation website, not a collection of separately designed pages.

Do not finish with placeholder functionality. Implement the actual working connections and preserve the existing website.  AND THIS IS THE TOKEN Fine-grained personal access tokens @secret:GITHUB_FINE_GRAINED_PERSONAL_ACCESS_TOKEN

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d223be41-5955-428f-9616-810dfb6fc9b6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
