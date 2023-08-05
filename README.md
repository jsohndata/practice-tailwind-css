# Practice TailwindCSS

## Utility First
* No unclear class names, clear intent
* No overrides
* Mirrors CSS

<br>

## Pitfalls
* Build process
* A lot of classes
* Repeated Elements
* Difficult to memorize the classes

<br>

## Customizing
`global.css`

```
@layer base {
  body {
    @apply bg-gray-600;
  }
}

```